// In netlify/functions/upload-image.js

const { Octokit } = require("@octokit/rest");

exports.handler = async function(event) {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers };
  }

  const GITHUB_PAT = process.env.GITHUB_PAT;
  if (!GITHUB_PAT) {
    return { statusCode: 500, headers, body: JSON.stringify({ message: "GitHub PAT not configured." }) };
  }

  try {
    const { fileName, fileContent } = JSON.parse(event.body);
    const octokit = new Octokit({ auth: GITHUB_PAT });
    
    // Define the path where the image will be saved
    const filePath = `images/${fileName}`;

    // Upload the file to the 'images' folder in your repository
    await octokit.repos.createOrUpdateFileContents({
      owner: 'fi-group',
      repo: 'clearly-support-page',
      path: filePath,
      message: `feat: Add image ${fileName}`,
      content: fileContent, // The content is already Base64 encoded
      encoding: 'base64'
    });
    
    // Return the public path to the image
    return { 
      statusCode: 200, 
      headers, 
      body: JSON.stringify({ 
        message: "Image uploaded successfully!",
        path: `/${filePath}` // e.g., /images/my-screenshot.png
      }) 
    };

  } catch (error) {
    console.error(error);
    return { statusCode: 500, headers, body: JSON.stringify({ message: "Error uploading image.", error: error.message }) };
  }
};