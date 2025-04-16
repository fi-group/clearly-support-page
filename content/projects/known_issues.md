This page lists known issues for the Clearly 3D product that are currently being tracked or have recently been resolved.

---

### Issue #3D-101: Slow Performance with Large Scene Files

**Status:** `Investigating`

**First Noticed:** v2.5.0

**Description:** Loading and navigating scenes containing extremely high polygon counts (over 5 million polygons) or numerous high-resolution textures may result in slow viewport performance and increased loading times on some hardware configurations.

**Workaround:** Consider using display layers or object proxies to manage scene complexity during editing. Optimizing textures may also help. Performance improvements are under review for future updates.

---

### Issue #3D-102: Incorrect Normal Map Display on Imported FBX Models

**Status:** `Fix Planned` (Target: v2.6.0)

**Affected Versions:** v2.4.0 - v2.5.1

**Description:** Normal maps applied to models imported via the FBX format may appear inverted or incorrectly rendered under certain lighting conditions, particularly when the source application used a different tangent space convention.

**Workaround:** Re-importing the model using `.obj` format might resolve the issue temporarily. Alternatively, manually adjusting normal map settings in the material editor can sometimes correct the display.

---

### Issue #3D-103: Boolean Modifier Fails on Non-Manifold Geometry

**Status:** `Workaround Available`
**Description:** Applying Boolean operations (Union, Difference, Intersect) may fail or produce unexpected results if one or both of the involved mesh objects contain non-manifold geometry (e.g., edges shared by more than two faces, vertices with no connecting edges).
**Workaround:** Ensure meshes are manifold before performing Boolean operations. Use mesh cleanup tools (check for loose vertices, interior faces, multiple edges) to repair geometry first. See the documentation section on [Mesh Validation](link-to-docs-placeholder.html) for details.

---

### Issue #3D-095: Rendering Artifacts with Volumetric Lighting and Alpha Transparency

**Status:** `Investigating`
**Description:** Visual artifacts or incorrect blending may occur when objects using alpha-blended transparent materials are rendered within areas affected by volumetric lighting effects.
**Workaround:** Currently, reducing the intensity of volumetric effects or avoiding complex overlaps with transparent surfaces can mitigate the issue. Improvements to the rendering pipeline are being investigated.

---

### Issue #3D-081: Resolved - Application Crash When Undoing Complex Operations

**Status:** `Resolved` (in v2.5.1)
**Description:** In previous versions (v2.4.x - v2.5.0), performing an "Undo" action immediately after a computationally intensive operation (like a complex simulation bake or a high-resolution remesh) could occasionally lead to an application crash.
**Resolution:** This stability issue was addressed in version **v2.5.1**. Please update to the latest version for the fix.