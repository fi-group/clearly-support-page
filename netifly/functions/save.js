// In netlify/functions/save.js

const { Octokit } = require("@octokit/rest");

exports.handler = async function(event) {
  // Allow requests from any origin (for CORS)
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests for CORS
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers };
  }

  // Your GitHub Personal Access Token (stored securely)
  const GITHUB_PAT = process.env.GITHUB_PAT;
  if (!GITHUB_PAT) {
    return { statusCode: 500, headers, body: "GitHub PAT not configured." };
  }

  try {
    const { filePath, newContent, commitMessage } = JSON.parse(event.body);

    const octokit = new Octokit({ auth: GITHUB_PAT });

    // Get the current file's SHA (version ID)
    const { data: fileData } = await octokit.repos.getContent({
      owner: 'fi-group',
      repo: 'clearly-support-page',
      path: filePath,
    });

    // Commit the new content
    await octokit.repos.createOrUpdateFileContents({
      owner: 'fi-group',
      repo: 'clearly-support-page',
      path: filePath,
      message: commitMessage,
      content: Buffer.from(newContent).toString('base64'),
      sha: fileData.sha,
    });

    return { statusCode: 200, headers, body: JSON.stringify({ message: "File updated successfully!" }) };

  } catch (error) {
    console.error(error);
    return { statusCode: 500, headers, body: JSON.stringify({ message: "Error updating file.", error: error.message }) };
  }
};