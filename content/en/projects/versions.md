## Version 20.41.0 (Latest)

### Release Notes:

- **Integration:**
    * **Smoother Bulk Edits:** We've resolved several issues with the bulk editing feature. The "unsaved changes" warning no longer appears incorrectly after you apply changes, and the "Apply Changes" pop-up now more accurately reflects when all updates have been completed, preventing accidental unselections.

- **UI:**
    * **Improved Project Relations:** When you copy an item that has relations defined in its metadata, those relations will no longer be inherited if the "inherit relations from source item" option is not selected. This gives you more control over your copied items.
    * **Minor Text Updates:** The phrase "since yesterday evening" has been changed to "since yesterday morning" for better accuracy.

- **Technical Updates & Fixes:**
    * **Simplified Protected Layer Configuration:** The configuration for protected Esri layers is now stored in the database instead of a hard-to-edit file. This makes configuration easier and eliminates the need to reload the application after making changes.
    * **Corrected User Removal:** When you remove a user from a project, they are now correctly removed from all associated processes, preventing them from being assigned new tasks.
    * **Bouwapp Project Fetching:** The system now fetches both published and unpublished Bouwapp projects, allowing you to prepare and link projects before they go live.

---

## Version 20.40.0

### Release Notes:

- **UI:**
    * **Renamed Radius Measurement:** The description for the circle measurement tool has been renamed from "Measure area" to "Measure radius" for clarity.

---

## Version 20.39.0

### Release Notes:

- **Integration:**
    * **Improved Status Check:** The platform's status check now verifies the database connection, providing a more reliable indicator of whether the application is fully operational.
    * **Enhanced Read-Only Access:** We've removed the ability for users with read-only access to perform actions like deleting items, preventing unintended changes and improving security.

- **Technical Updates & Fixes:**
    * **Esri Layer Transparency Fix:** We've resolved an issue where Esri layer transparency was lost after closing the identify item pane. Your transparency settings will now be correctly maintained.