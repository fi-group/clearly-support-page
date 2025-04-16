This page lists known issues for Clearly.BIM that are currently being tracked or have recently been resolved.

---

### Issue #BIM-201: Incorrect Material Mapping on IFC 4x3 Export

**Status:** `Investigating`

**Affected Versions:** v5.1.0+

**Description:** When exporting models to the IFC 4x3 format, some complex material assignments or custom procedural textures may not map correctly according to the standard, potentially causing display issues in receiving applications.

---

### Issue #BIM-202: Clash Detection Reports Timeout on Very Large Federated Models

**Status:** `Performance Review`

**Description:** Running clash detection analysis on federated models exceeding 2GB or containing hundreds of linked files may take an excessive amount of time or occasionally result in a process timeout error message.

---

### Issue #BIM-203: Difficulty Aligning Imported Point Cloud Data from Scanner XYZ

**Status:** `Needs More Info`

**Description:** Some users have reported difficulties accurately aligning point cloud data (`.e57`, `.rcp` formats) originating specifically from Scanner Model XYZ when using the automatic registration tools. Manual alignment remains functional.

---