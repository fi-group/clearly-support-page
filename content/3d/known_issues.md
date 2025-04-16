This page lists known issues for the Clearly.3D-City products that are currently being tracked or have recently been resolved.

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

---

