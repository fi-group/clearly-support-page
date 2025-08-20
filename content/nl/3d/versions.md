

Aangezien **Clearly.3D-City** wordt aangedreven door de VC Suite, belichten deze release-opmerkingen de nieuwe functies en verbeteringen die beschikbaar zijn in de nieuwste VC Suite-producten. U kunt meer gedetailleerde technische informatie en documentatie vinden op de [VC Map Open-Source Community](https://github.com/virtualcitySYSTEMS) pagina.

---
## VC Suite 2025.0 (Meest recent)
### VC Map 6.1 

* **Integratie van IoT-data:** U kunt nu realtime sensordata van elk OGC SensorThings API-compatibel platform integreren en visualiseren. Dit stelt u in staat om sensorlocaties direct op de kaart te bekijken en tijdreeksen en meetwaarden te analyseren in interactieve grafieken.
* **Dynamische POI-clustering:** Er is een nieuwe clusteringfunctie geïntroduceerd die automatisch points of interest (POI's) groepeert op basis van hun nabijheid. Dit houdt uw kaart overzichtelijk en gemakkelijk te navigeren, zelfs met een groot aantal POI's, en stelt u in staat om informatie met een enkele klik te openen.
* **Diepe selectie ("Wat is hier?"):** Met een eenvoudige rechtermuisklik kunt u nu informatie van alle lagen op een specifieke locatie ophalen, zelfs als ze elkaar overlappen. Deze "diepe selectie"-functionaliteit zorgt ervoor dat u geen gegevens mist en presenteert deze in een duidelijke, georganiseerde lijst.
* **Toegankelijkheidskaart:** Een nieuwe plugin stelt u in staat om de toegankelijkheid van elke locatie te analyseren en te visualiseren. U kunt reistijden berekenen te voet, met de fiets, het openbaar vervoer of de auto, en de resultaten direct op de kaart bekijken.
* **Verbeterde navigatie:** De navigatiemogelijkheden zijn uitgebreid; u kunt de kaart nu navigeren met een muis, toetsenbord, gamepad of spacemouse.
* **Geavanceerde visualisaties:** We hebben de weergaveopties voor point clouds uitgebreid, en u kunt nu automatisch clipping-polygonen laden om specifieke delen van uw terrein of 3D-lagen te verbergen.
* **Verbeterde mobiele weergave:** De gebruikersinterface is volledig herontworpen en geoptimaliseerd voor een soepele ervaring op mobiele apparaten.
* **Diverse verbeteringen:** De zoekfunctionaliteit biedt nu suggesties, WMS-lagen worden automatisch gedetecteerd, en u kunt nu 3D-presentaties maken met een 360°-camera fly-through.



### VC Publisher

* **Nieuwe versies:** Nieuwe versies van de App Configurator, X3DM Converter en VC Solar-backend zijn uitgebracht met talrijke verbeteringen ter ondersteuning van de nieuwste functies van VC.Map.



### Overig

* **3D City Database 5.0:** De nieuwe 3D City Database 5.0 ondersteunt nu volledig CityGML 3.0, wat een belangrijke mijlpaal is. De database blijft compatibel met CityGML 2.0- en 1.0-data.
* **Vooruitblik:** We werken aan een nieuwe functie die de automatische 3D-visualisatie van ontwikkelingsplannen in het XPlan-formaat mogelijk maakt, zonder enige voorbewerking.
---

### VC.Map 6.0

* **Verbeterde tekengereedschappen:** De tekengereedschappen ondersteunen gebruikers nu intuïtief bij het creëren van parallelle en orthogonale polylijnen. De lijnlengte wordt getoond tijdens het tekenen en u kunt punten en randen van bestaande objecten vastklikken voor nauwkeurigere tekeningen.
* **Stedelijke klimaatsimulatie:** Een nieuwe plugin verbindt het stedelijke klimaatsimulatieprogramma PALM-4U met VC.Map. Hiermee kunt u zowel invoerdata als simulatie-uitkomsten visualiseren en stylen, en verschillende stedelijke ontwikkelingsscenario's eenvoudig vergelijken met behulp van de splitscreen-tool.
* **Line-of-Sight Analyse:** Beoordeel snel de zichtbaarheid van zichtlijnen binnen het 3D-stadsmodel. Met slechts twee klikken definieert u een zichtlijn die wordt gestyled om te tonen wat zichtbaar of geblokkeerd is vanuit het oogpunt van de waarnemer.
* **Dynamische kaartmodules:** Met de nieuwe moduleselectie kunt u modules dynamisch toevoegen tijdens het gebruik. Dit houdt de basiskaart gestroomlijnd, terwijl gebruikers specifieke content en tools, zoals de volledige zonanalyse-applicatie, kunnen toevoegen wanneer dat nodig is.
* **Nieuwe functies & verbeteringen:**
    * **VC Solar App:** Een nieuwe app voor het bepalen en analyseren van zonnestraling en fotovoltaïsche opbrengst voor gebouwen en open ruimtes. Het berekent geschiktheid, opbrengst en CO2-besparingen, rekening houdend met schaduw en planningsobjecten.
    * **Algemene gebruiksvriendelijkheid:** We hebben nieuwe tools toegevoegd voor terreintransparantie, het creëren van snijvlakken, het berekenen van hoogteprofielen en een voetgangersmodus.
    * **Link Button Plugin:** U kunt nu een knop aan de gebruikersinterface toevoegen om te linken naar andere websites of content.
    * **Prestaties:** De ondersteuning en visualisatieprestaties voor 3D VectorTiles zijn aanzienlijk verbeterd.
    * **Verbeterde gebruikersinterface:** De nieuwe look-and-feel van VC.Planner is nu beschikbaar voor VC.Map 5 en biedt een moderne en gestroomlijnde gebruikersinterface.
    * **Nieuwe plugins:** Plugins voor 2D/3D-metingen, het definiëren van camera-vluchten en viewshed-analyses zijn nu beschikbaar.
    * **Export:** U kunt nu kaartscènes en planningsscenario's exporteren.
    * **Beveiligingsupdate:** Er is een beveiligingsupdate uitgebracht die een hoog-risico kwetsbaarheid aanpakt die Cross-Site Scripting (XSS)-aanvallen in VC.Map 4 mogelijk maakte. We raden u ten zeerste aan om te updaten naar VC.Map 5 om dit probleem op te lossen.
    * **Overig:** Diverse kleine verbeteringen en bugfixes zijn doorgevoerd.

### VC.Publisher

* **API-verbeteringen:** We bieden nu vooraf gedefinieerde FME-transformatoren voor de OpenAPI-compatibele REST-interface. Dit maakt het eenvoudig om taken te automatiseren en VC.Publisher in uw eigen workflows te integreren.
* **Beveiligingsupdate:** Een beveiligingsupdate vervangt de Node.js runtime-omgeving naar versie 20, wat de huidige long-term support (LTS) versie is. Deze verandering verwijdert beveiligingsrisico's door het gebruik van een verouderde versie.
* **Unreal Engine-ondersteuning:** De nieuwste versie van VC.Publisher ondersteunt nu instanced 3D-objecten (I3DM) in Unreal, wat zorgt voor de efficiënte weergave van grote hoeveelheden 3D-objecten.
* **Gedetailleerde configuratie:** De app-configurator maakt nu gedetailleerde aanpassingen mogelijk van het uiterlijk van een VC.Map, inclusief titel, logo, kleuren en lettertypen.
* **Kleine bugfixes:** Diverse bugs zijn opgelost, waaronder een probleem dat voorkwam dat 3D-objecttaken toegang kregen tot de VC Database.

### VC.Planner

* **Live mesh-aanpassingen:** U kunt nu 3D-meshes en 3D-objectlagen direct in de webbrowser afvlakken of uitsnijden. Dit zorgt voor meer dynamische en visueel aantrekkelijke planning en publicatie van scenario's.
* **Nieuwe look-and-feel:** VC.Planner is volledig opnieuw ontworpen met een moderne en gestroomlijnde gebruikersinterface voor de nieuwe VC.Map 5.

### VC.Database

* **Verbeterde data-integriteit:** We hebben een controle toegevoegd om te voorkomen dat importtaken mislukken door ongeldige geometrieën.
* **Prestatieverbeteringen:** Nieuwe opties zijn toegevoegd om delete-operaties automatisch vast te leggen, wat databasefouten voorkomt en de prestaties verbetert.