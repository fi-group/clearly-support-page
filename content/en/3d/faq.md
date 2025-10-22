### 1. Why is my 2D layer draping over 3D buildings?

If a 2D layer drapes over both the terrain and your 3D buildings, you need to adjust a setting in that 2D layer.

![drape-issue.png](https://raw.githubusercontent.com/fi-group/clearly-support-page/main/images/drape-issue.png)

Look for the **'handling in map'** (or similar) setting within the layer's properties and adjust its value (e.g., set it to drape on terrain only).

![drape-fix.png](https://raw.githubusercontent.com/fi-group/clearly-support-page/main/images/drape-fix.png)
---

### 2. Why is the aerial photo quality better in 3D than in 2D?

This can happen if the **"High resolution"** setting is enabled, as it often only affects the 3D view and may default the 2D view to a lower-resolution level (e.g., level 18).

To fix this, try **unchecking the "High resolution"** option. Then, manually define the 2D view to use the highest available resolution level (e.g., level 21).

![photo-quality.png](https://raw.githubusercontent.com/fi-group/clearly-support-page/main/images/photo-quality.png)

---

### 3. Can you filter on multiple attributes in a layer?

Yes. In version 5.2.12 and later, the **advanced filter settings** include an **"OR"** operator.

* This setting is global. If you query attributes A, B, and C and select "OR", the filter will be `A OR B OR C`. Selecting "AND" will result in `A AND B AND C`.
* For more complex queries (e.g., `A AND (B OR C)`), you must write the filter expression manually in the **3DCityDB XML filter language**. You can then adapt the x3dm converter's config and paste the expression there.
* The 3DCityDB filter language is documented here: [3DCityDB Documentation](https://3dcitydb-docs.readthedocs.io/en/latest/impexp/xml-query/index.html)

---

### 4. My 2D layers appear in 3D mode but not in 2D mode. What's wrong?

This issue can have several causes, even if feature info is correctly displayed when clicking.

A common solution is to check the **layer's configuration**. In a known case, the problem was resolved by ticking a specific **checkbox in the layer configuration settings** that controlled 2D visibility. Double-check all visibility and mode settings for that layer.

![2d-not-showing.png](https://raw.githubusercontent.com/fi-group/clearly-support-page/main/images/2d-not-showing.png)

---

### 5. I'm getting a "blocked by CORS policy" error. How do I fix this?

A **"Cross-Origin Resource Sharing" (CORS)** error happens when a web application (e.g., `https://hub.clearly.app`) tries to request data from a server on a different domain (e.g., `https://www.gis.example.nl/gisweb2/wms`). The server, by default, blocks this for security.

To fix this, the **server** (the one hosting the data) must be configured to explicitly allow requests from the application's origin. This is done by adding an `Access-Control-Allow-Origin` header to the server's response, listing the allowed domains.

For example, the server `www.gis.example.nl` would need to be updated to allow origins like `https://hub.clearly.app`.

You can read more about the technical details here: [Cross-Origin Resource Sharing (Wikipedia)](https://en.m.wikipedia.org/wiki/Cross-origin_resource_sharing)

---

### 6. Why is the "object selection" grayed out in the export tool?

This usually happens because the layers themselves have not been configured to be exportable. There are two main steps to configure this:

1.  **Module Configuration:** Ensure the export plugin (tool) is placed in the same module as the data layers you wish to export.
2.  **Layer JSON Editing:** You must manually edit the JSON configuration for each layer you want to make exportable. Add the `"exportWorkbench"` property to the layer's JSON definition, pointing to the FME download service URL.