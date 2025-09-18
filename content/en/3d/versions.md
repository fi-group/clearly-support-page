

Since **Clearly.3D-City** is powered by the VC Suite, these release notes highlight the new features and improvements available in the latest VC Suite products. You can find more detailed technical information and documentation on the [VC Map Open-Source Community](https://github.com/virtualcitySYSTEMS) page.

---
## VC Suite 2025.1 (Latest)
### VC Map 6.2

* **Panorama Viewer:** With the introduction of the new Panorama Viewer, it's possible to explore 360° panoramic images with a single click, alongside existing 2D, 3D, and oblique photos. Navigation allows for quick switching between panoramas at different locations. An extension of the Multi View plugin allows an additional window to be displayed alongside the main map. This Multi View, synchronized with the panoramic view, displays 2D/3D content or oblique photos. The Panorama Viewer supports mobile mapping data from various providers and camera systems through an open interface. Future releases will further expand its functionality, with 3D surveying and the integration of vector data directly within panoramic images currently being developed.
* **Dynamic Layers:** The new Dynamic Layer plugin allows map layers to be added and displayed at runtime, without pre-configuring them as static layers. This minimizes the number of predefined map contents and makes VC Map more flexible for specialized applications. Supported external data sources include OGC services (WMS, WMTS, WFS), 3D content, point clouds, and terrain layers. A key feature is the integration with data catalogs, such as Clearly.Hub, allowing direct searches for relevant geodata within VC Map and seamless integration of the results.
* **Dynamic Layer Order:** In complex viewers, the default order of map layers can be problematic. Supported map layers can now be dynamically rearranged via drag & drop. This brings the relevant layer to the forefront and prevents visual conflicts.
* **Multi View Enhancement:** The Multi View plugin has been enhanced. While it previously only supported oblique photos, Multi View now works with all map types: 2D, 3D, panoramic, and oblique photos can be combined with the main map in a secondary map view. The secondary map window is automatically synchronized but can also be explored independently. The content type of the secondary window can be changed or swapped with the main map with a simple toggle.
* **Video Generation:** Exporting camera flights as video files is now available. Videos can be created from both standard VC Maps and the VC Planner for planning scenarios. This new video feature allows for the documentation and presentation of relevant 3D scenes or projects with a single click.
* **VC Story:** The VC Story Template has been migrated to VC Map 6, making it possible to create an interactive story map. By displaying text and images alongside a 3D map, a specific message can be conveyed immersively. This is further supported by the ability to automatically display a viewpoint and toggle layers on and off in the presentation.

### VC Database

* **Version 5.0:** Version 5.0 of the VC Database has been introduced with full support for the OGC standards CityGML 3.0 and CityJSON 2.0.

---
## VC Suite 2025.0
### VC Map 6.1

* **IoT Data Integration:** You can now integrate and visualize real-time sensor data from any OGC SensorThings API-compliant platform. This allows you to view sensor locations directly on the map and analyze time series and measurement values in interactive charts.
* **Dynamic POI Clustering:** A new clustering feature has been introduced that automatically groups points of interest (POIs) based on their proximity. This keeps your map clear and easy to navigate, even with a large number of POIs, and allows you to access information with a single click.
* **Deep Picking ("What's Here?"):** With a simple right-click, you can now retrieve information from all layers at a specific location, even when they overlap. This "deep picking" functionality ensures you don't miss any data and presents it in a clear, organized list.
* **Accessibility Map:** A new plugin allows you to analyze and visualize the accessibility of any location. You can calculate travel times by foot, bike, public transit, or car, and view the results directly on the map.
* **Improved Navigation:** The navigation options have been extended; you can now navigate the map with a mouse, keyboard, gamepad, or spacemouse.
* **Advanced Visualizations:** We have extended the rendering options for point clouds, and you can now automatically load clipping polygons to hide specific parts of your terrain or 3D layers.
* **Improved Mobile View:** The user interface has been completely redesigned and optimized for a smooth experience on mobile devices.
* **Miscellaneous Improvements:** The search functionality now provides suggestions, WMS layers are automatically detected, and you can now create 3D presentations with a 360Â° camera fly-through.


### VC Publisher

* **New Versions:** New versions of the App Configurator, X3DM Converter, and VC Solar backend have been released with numerous improvements to support the latest features of VC.Map.


### Other

* **3D City Database 5.0:** The new 3D City Database 5.0 now fully supports CityGML 3.0, marking a major milestone. The database remains compatible with CityGML 2.0 and 1.0 data.
* **Outlook:** We are working on a new feature that will enable the automatic 3D visualization of development plans in the XPlan format, without any preprocessing.
---

## VC Suite 2024.0 
### VC.Map 6.0

* **Improved Drawing Tools:** The drawing tools now intuitively assist users in creating parallel and orthogonal polylines. Line length is displayed as you draw, and you can snap to points and edges of existing objects for more precise drawings.
* **Urban Climate Simulation:** A new plugin connects the urban climate simulation tool PALM-4U to VC.Map. This allows you to visualize and style both input data and simulation results, and easily compare different urban development scenarios using the split-screen tool.
* **Line-of-Sight Analysis:** Quickly assess the visibility of sightlines within the 3D city model. With just two clicks, you can define a sightline that is styled to show what is visible or obstructed from the observer's viewpoint.
* **Dynamic Map Modules:** The new module selector allows you to dynamically add modules at runtime. This keeps the base map streamlined while enabling users to add specific content and tools, such as the full solar analysis application, as needed.
* **New Features & Enhancements:**
    * **VC Solar App:** A new app for determining and analyzing solar irradiation and photovoltaic output for buildings and open spaces. It calculates suitability, yield, and CO2 savings, taking into account shading and planning objects.
    * **General Usability:** We have added new tools for terrain transparency, creating cutting planes, calculating elevation profiles, and a pedestrian walk mode.
    * **Link Button Plugin:** You can now add a button to the user interface to link to other websites or content.
    * **Performance:** Support and visualization performance for 3D VectorTiles have been significantly improved.
    * **Improved User Interface:** The new look and feel of VC.Planner is now available for VC.Map 5, offering a modern and sleek user interface.
    * **New Plugins:** Plugins for 2D/3D measurements, defining camera flights, and viewshed analyses are now available.
    * **Export:** You can now export map scenes and planning scenarios.
    * **Security Update:** A security update has been released that addresses a high-risk vulnerability allowing for Cross-Site Scripting (XSS) attacks in VC.Map 4. We strongly recommend updating to VC.Map 5 to resolve this issue.
    * **Miscellaneous:** Various minor improvements and bug fixes have been implemented.

### VC.Publisher

* **API Enhancements:** We now provide pre-defined FME transformers for the OpenAPI-compliant REST interface. This makes it easy to automate tasks and embed VC.Publisher into your own workflows.
* **Security Update:** A security update replaces the Node.js runtime environment to version 20, which is the current long-term support (LTS) version. This change removes security risks from using an outdated version.
* **Unreal Engine Support:** The latest version of VC.Publisher now supports instanced 3D objects (I3DM) in Unreal, allowing for the efficient display of large quantities of 3D objects.
* **Detailed Configuration:** The app configurator now allows for detailed customization of a VC.Map's appearance, including title, logo, colors, and fonts.
* **Minor Bug Fixes:** Several bugs have been fixed, including an issue that prevented 3D object jobs from accessing the VC Database.

### VC.Planner

* **Live Mesh Modifications:** You can now flatten or cut 3D meshes and 3D object layers directly in the web browser. This allows for more dynamic and visually appealing planning and publication of scenarios.
* **New Look & Feel:** The VC.Planner has been completely redesigned with a modern and sleek user interface for the new VC.Map 5.

### VC.Database

* **Improved Data Integrity:** We have added a check to prevent import operations from failing due to invalid geometries.
* **Performance Improvements:** New options have been added to auto-commit delete operations, which avoids database errors and improves performance.