## Version 1.37.0 (Latest)

### Release Notes:

- **Integration:**
    
    * **Customize Your Digital Twin Layers:** You now have more control when configuring your Digital Twins. Instead of adding all layers from a WMS/WMTS service, you can now select and add *only the specific sublayers you need*. This helps you create cleaner, more focused Digital Twins that are relevant to your use case.
    * **Smarter WMS/WMTS/WFS previews:** When a WMS, WMTS, or WFS resource's title *exactly matches* a layer name, Clearly.Hub will now automatically select and display *only that specific layer*. This eliminates the need for you to choose from a dropdown menu.
    * **Streamlined Digital Twin Configuration:** This same intelligent matching logic also applies when you're adding resources to a Digital Twin. If the resource title and a layer name are an exact match, the layer will be automatically selected for you, making configuration faster and more intuitive.

- **UI:**
    * **GeoJSON File Previews:** You can now *preview GeoJSON files directly* within Clearly.Hub. Please note that for very large files (over 10MB), we've added a warning to prevent your browser from freezing. 
    * **Updated Consent and Newsletter Options:** We've updated our consent dialogue and added a new option that allows you to *subscribe or unsubscribe from our development update newsletter* directly. You can manage your preferences at any time in your user profile.

- **Technical Updates & Fixes:**
    * **Expanded WMS Compatibility:** We've implemented a fix that significantly *improves compatibility with a wider range of WMS services*. This means more services will now work as expected on the platform.
    * **Resolved Configuration Issues:** Several issues related to incorrect Digital Twin configurations have been fixed, ensuring your Digital Twins load and function correctly.
    * **Improved Stability:** We have addressed critical security vulnerabilities and fixed a SOLR error that was preventing some datasets from being fetched correctly.

--- 
## Version 1.36.0

### Release Notes:

- **UI:**
    * **Alphabetical Sorting:** All lists and dropdown menus across the platform are now *alphabetically sorted*. This includes resource formats, hubs, and other key lists, making it faster and easier to find what you're looking for.
    * **Improved Visuals:** We've made several small but impactful visual improvements to the platform.
        * Images on the home page no longer have a large border when selected.
        * The "Navigatiehulpmiddelen" label in the viewer has been shortened to "Navigatie" to prevent it from overflowing the toolbar.
        * The Digital Twin preview layout has been improved for better readability and a cleaner appearance.

- **Technical Updates & Fixes:**
    * **Enhanced WMS Support:** We've improved support for a wider range of WMS services, specifically addressing an issue with services that don't expose `GetFeatureInfo`. The platform now correctly handles these services without any errors.
---
## Version 1.35.0

### Release Notes:

- **UI:**
    * **Overhauled Digital Twin Overview:** We've completely redesigned the Digital Twin overview page for a cleaner, more logical layout.
    * **Consistent Sidebars:** All sidebars are now a consistent width and are resizable, providing a more predictable and comfortable browsing experience.
    * **Tooltips & Help Texts:** A new help system has been added throughout the platform. You can now click the question mark icon in the top right corner to enable helpful tooltips that explain various buttons, fields, and functionalities.
    * **More Intuitive Hub Navigation:** You can now click on an "owner hub" field to be taken directly to that hub's page.
    * **Smarter Hub Access:** When you try to access data or an app that is not available in your current active hub, the system will now present you with a list of all hubs that have access to that item, allowing you to choose which hub to switch to.
    * **Improved Catalog Filters:** The "Part of hub" filter has been added to the Digital Twins and Apps catalogs, making it consistent with the Data catalog and easier to find what you're looking for.

- **Integration:**
    * **Enhanced Data & App Discovery:** We've made it easier to find compatible apps for your data and compatible data for your apps. New filters and tabs have been added to the catalogs to help you discover relevant combinations, unlocking new use cases.
    * **Direct Market Master Actions:** Market Master actions can now be logged and audited for better traceability and oversight, even when the action isn't based on a user report.
    * **App as a Hub Owner:** Applications can now be configured to act as a Hub Owner, allowing them to manage and administer a hub through the API.


- **Technical Updates & Fixes:**

    * **Improved DCAT Export Security:** Access rights are now checked before allowing a DCAT export, preventing unauthorized users from exporting dataset information.
    * **WFS Resource Fix:** Paid WFS resources are now correctly disabled and grayed out for users who do not have a subscription.
    * **Email Validation Fix:** The email validation process has been improved to accept a wider range of valid email addresses.
    * **Minor Bug Fixes:** Several smaller issues have been resolved, including the renaming of the "Link dataset" button in the app creation dialog.