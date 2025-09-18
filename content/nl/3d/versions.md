Aangezien **Clearly.3D-City** wordt aangedreven door de VC Suite, belichten deze release-opmerkingen de nieuwe functies en verbeteringen die beschikbaar zijn in de nieuwste VC Suite-producten. Meer gedetailleerde technische informatie en documentatie is te vinden op de [VC Map Open-Source Community](https://github.com/virtualcitySYSTEMS) pagina.

---
## VC Suite 2025.1 (Laatste versie)
### VC Map 6.2

* **Panorama Viewer:** Met de introductie van de nieuwe Panorama Viewer is het mogelijk om met één klik 360°-panoramabeelden te verkennen, naast de bestaande 2D-, 3D- en oblique-foto's. Navigatie maakt het mogelijk om snel te wisselen tussen panorama's op verschillende locaties. Een uitbreiding van de Multi View-plug-in maakt het mogelijk een extra venster naast de hoofdkaart weer te geven. Deze Multi View, gesynchroniseerd met de panoramaview, toont 2D/3D-content of oblique-foto's. De Panorama Viewer ondersteunt mobiele karteringsdata van diverse leveranciers en camerasystemen via een open interface. Toekomstige releases zullen de functionaliteit verder uitbreiden; 3D-metingen en de integratie van vectordata direct in panoramabeelden worden momenteel ontwikkeld.
* **Dynamic Layers:** De nieuwe Dynamic Layer-plug-in maakt het mogelijk om kaartlagen tijdens runtime toe te voegen en weer te geven, zonder deze vooraf als statische lagen te configureren. Dit minimaliseert het aantal vooraf gedefinieerde kaartinhouden en maakt VC Map flexibeler voor gespecialiseerde toepassingen. Ondersteunde externe databronnen zijn onder meer OGC-diensten (WMS, WMTS, WFS), 3D-content, puntenwolken en terreinlagen. Een belangrijke functie is de integratie met datcatalogi, zoals Clearly.Hub, wat direct zoeken naar relevante geodata binnen VC Map en naadloze integratie van de resultaten mogelijk maakt.
* **Dynamische laagvolgorde:** In complexe viewers kan de standaardvolgorde van kaartlagen problematisch zijn. Ondersteunde kaartlagen kunnen nu dynamisch worden herschikt via drag & drop. Dit brengt de relevante laag naar de voorgrond en voorkomt visuele conflicten.
* **Multi View-verbetering:** De Multi View-plug-in is verbeterd. Waar voorheen alleen oblique-foto's werden ondersteund, werkt Multi View nu met alle kaarttypes: 2D, 3D, panorama en oblique-foto's kunnen worden gecombineerd met de hoofdkaart in een secundaire kaartweergave. Het secundaire kaartvenster wordt automatisch gesynchroniseerd, maar kan ook onafhankelijk worden verkend. Met een simpele schakelaar kan het inhoudstype van het secundaire venster worden gewijzigd of omgewisseld met de hoofdkaart.
* **Video genereren:** Het exporteren van cameravluchten als videobestanden is nu beschikbaar. Video's kunnen worden gemaakt vanuit zowel standaard VC Maps als de VC Planner voor planningsscenario's. Deze nieuwe videofunctie maakt de documentatie en presentatie van relevante 3D-scènes of projecten met één klik mogelijk.
* **VC Story:** De VC Story Template is gemigreerd naar VC Map 6, waardoor het mogelijk is om een interactieve storymap te creëren. Door tekst en afbeeldingen naast een 3D-kaart te tonen, kan een specifieke boodschap op een meeslepende manier worden overgebracht. Dit wordt verder ondersteund door de mogelijkheid om automatisch een camerastandpunt weer te geven en lagen in- en uit te schakelen tijdens de presentatie.

### VC Database

* **Versie 5.0:** Versie 5.0 van de VC Database is geïntroduceerd met volledige ondersteuning voor de OGC-standaarden CityGML 3.0 en CityJSON 2.0.
---
## VC Suite 2025.0
### VC Map 6.1

* **IoT Data-integratie:** Integratie en visualisatie van real-time sensordata van elk OGC SensorThings API-compatibel platform is nu mogelijk. Hiermee kunnen sensorlocaties direct op de kaart worden bekeken en tijdreeksen en meetwaarden in interactieve grafieken worden geanalyseerd.
* **Dynamische POI-clustering:** Een nieuwe clusteringfunctie groepeert automatisch punten van interesse (POI's) op basis van nabijheid. Dit houdt de kaart overzichtelijk en gemakkelijk navigeerbaar, zelfs bij een groot aantal POI's, en maakt toegang tot informatie met Ã©Ã©n klik mogelijk.
* **Deep Picking ("Wat is hier?"):** Met een eenvoudige rechtermuisklik kan informatie uit alle lagen op een specifieke locatie worden opgevraagd, zelfs wanneer lagen elkaar overlappen. Deze "deep picking"-functionaliteit zorgt ervoor dat geen gegevens worden gemist en presenteert de informatie in een overzichtelijke lijst.
* **Toegankelijkheidskaart:** Een nieuwe plugin maakt het mogelijk om de toegankelijkheid van elke locatie te analyseren en visualiseren. Reistijden te voet, per fiets, openbaar vervoer of auto kunnen worden berekend en direct op de kaart weergegeven.
* **Verbeterde navigatie:** Navigatie-opties zijn uitgebreid; de kaart kan nu worden bediend met muis, toetsenbord, gamepad of spacemouse.
* **Geavanceerde visualisaties:** Renderopties voor point clouds zijn uitgebreid, en clipping polygons kunnen automatisch worden geladen om specifieke delen van het terrein of 3D-lagen te verbergen.
* **Verbeterde mobiele weergave:** De gebruikersinterface is volledig herzien en geoptimaliseerd voor een soepele ervaring op mobiele apparaten.
* **Diverse verbeteringen:** De zoekfunctie geeft nu suggesties, WMS-lagen worden automatisch gedetecteerd, en 3D-presentaties met een 360Â° camera fly-through kunnen worden gemaakt.

### VC Publisher

* **Nieuwe versies:** Nieuwe versies van de App Configurator, X3DM Converter en VC Solar backend zijn uitgebracht met tal van verbeteringen om de nieuwste VC.Map-functies te ondersteunen.

### Overig

* **3D City Database 5.0:** De nieuwe 3D City Database 5.0 ondersteunt volledig CityGML 3.0, een belangrijke mijlpaal. Compatibiliteit met CityGML 2.0 en 1.0-data blijft behouden.
* **Vooruitblik:** Er wordt gewerkt aan een nieuwe functie voor automatische 3D-visualisatie van ontwikkelingsplannen in het XPlan-formaat, zonder voorafgaande verwerking.

---

## VC Suite 2024.0 
### VC.Map 6.0

* **Verbeterde tekentools:** Tekentools ondersteunen nu intuÃ¯tief bij het maken van parallelle en orthogonale polylines. Lijnlengtes worden tijdens het tekenen weergegeven en punten en randen van bestaande objecten kunnen worden gesnapt voor preciezere tekeningen.
* **Stedelijke klimaatsimulatie:** Een nieuwe plugin koppelt het stedelijke klimaatsimulatie-instrument PALM-4U aan VC.Map. Inputdata en simulatie-uitkomsten kunnen worden gevisualiseerd en gestyled, en verschillende stedelijke ontwikkelingsscenario's kunnen eenvoudig worden vergeleken met de split-screen tool.
* **Lijn-van-zicht-analyse:** De zichtbaarheid van sightlines binnen het 3D-stadsmodel kan snel worden beoordeeld. Met twee klikken kan een zichtlijn worden gedefinieerd die toont wat zichtbaar of geblokkeerd is vanuit het observatiepunt.
* **Dynamische kaartmodules:** De nieuwe module-selector maakt het mogelijk modules dynamisch toe te voegen tijdens runtime. Dit houdt de basiskaart overzichtelijk en maakt het mogelijk specifieke inhoud en tools toe te voegen, zoals de volledige zonne-analyse applicatie.
* **Nieuwe functies & verbeteringen:**
    * **VC Solar App:** Een nieuwe app voor het bepalen en analyseren van zoninstraling en fotovoltaÃ¯sche opbrengst voor gebouwen en open ruimtes. Geschiktheid, opbrengst en CO2-besparing worden berekend, rekening houdend met schaduwen en planobjecten.
    * **Algemene bruikbaarheid:** Nieuwe tools voor terreintransparantie, snijvlakken, hoogteprofielen en een voetgangersmodus zijn toegevoegd.
    * **Link-knop plugin:** Een knop kan worden toegevoegd aan de gebruikersinterface om te linken naar andere websites of inhoud.
    * **Prestaties:** Ondersteuning en visualisatieprestaties voor 3D VectorTiles zijn aanzienlijk verbeterd.
    * **Verbeterde gebruikersinterface:** Het nieuwe uiterlijk van VC.Planner is nu beschikbaar voor VC.Map 5, met een moderne en strakke interface.
    * **Nieuwe plugins:** Plugins voor 2D/3D-metingen, cameravluchten en zichtanalysetools zijn beschikbaar.
    * **Export:** KaartscÃ¨nes en planningsscenario's kunnen worden geÃ«xporteerd.
    * **Beveiligingsupdate:** Een beveiligingsupdate verhelpt een hoog-risico kwetsbaarheid die Cross-Site Scripting (XSS) aanvallen in VC.Map 4 mogelijk maakte. Het wordt sterk aanbevolen te upgraden naar VC.Map 5.
    * **Diverse:** Verschillende kleine verbeteringen en bugfixes zijn doorgevoerd.

### VC.Publisher

* **API-verbeteringen:** Voor de OpenAPI-compatibele REST-interface zijn vooraf gedefinieerde FME-transformers beschikbaar. Automatisering van taken en integratie van VC.Publisher in eigen workflows wordt hiermee vereenvoudigd.
* **Beveiligingsupdate:** Het Node.js-runtime environment is geÃ¼pdatet naar versie 20 (LTS) om beveiligingsrisico's van verouderde versies te verwijderen.
* **Ondersteuning Unreal Engine:** Instanced 3D-objecten (I3DM) worden nu ondersteund in Unreal voor efficiÃ«nte weergave van grote hoeveelheden 3D-objecten.
* **Gedetailleerde configuratie:** App configurator maakt nu uitgebreide aanpassing van VC.Map- uiterlijk mogelijk, inclusief titel, logo, kleuren en lettertypen.
* **Kleine bugfixes:** Diverse bugs zijn opgelost, waaronder een probleem waardoor 3D-objecttaken geen toegang hadden tot de VC Database.

### VC.Planner

* **Live Mesh-modificaties:** 3D-meshes en objectlagen kunnen nu direct in de webbrowser worden afgevlakt of gesneden. Dit maakt dynamischere en visueel aantrekkelijkere planning en publicatie van scenario's mogelijk.
* **Nieuw uiterlijk:** VC.Planner is volledig herzien met een moderne en strakke interface voor VC.Map 5.

### VC.Database

* **Verbeterde data-integriteit:** Een controle voorkomt dat importbewerkingen falen door ongeldige geometrieÃ«n.
* **Prestatieverbeteringen:** Nieuwe opties voor auto-commit bij delete-operaties voorkomen databasefouten en verbeteren prestaties.
