## Versie 1.37.0 (Meest recent)

### Release Notes:

- **Integratie:**
    * **Pas de lagen van uw Digital Twin aan:** U heeft nu meer controle bij het configureren van uw Digital Twins. In plaats van alle lagen van een WMS/WMTS-service toe te voegen, kunt u nu *alleen de specifieke sublagen selecteren* die u nodig heeft. Dit helpt u om overzichtelijkere, meer gerichte Digital Twins te creëren die relevant zijn voor uw gebruikssituatie.
    * **Slimmere WMS/WMTS/WFS-voorbeelden:** Wanneer de titel van een WMS-, WMTS- of WFS-resource *exact overeenkomt* met een laagnaam, zal Clearly.Hub nu automatisch *alleen die specifieke laag* selecteren en weergeven. Dit maakt het overbodig om een keuze te maken uit een keuzelijst.
    * **Gestroomlijnde Digital Twin-configuratie:** Dezelfde intelligente logica voor overeenkomsten is ook van toepassing wanneer u resources toevoegt aan een Digital Twin. Als de resourcetitel en een laagnaam exact overeenkomen, wordt de laag automatisch voor u geselecteerd, waardoor de configuratie sneller en intuïtiever wordt.

- **UI:**
    * **GeoJSON-bestandsvoorbeelden:** U kunt nu *GeoJSON-bestanden direct bekijken* binnen Clearly.Hub. Houd er rekening mee dat voor zeer grote bestanden (meer dan 10 MB) een waarschuwing is toegevoegd om te voorkomen dat uw browser vastloopt.
    * **Bijgewerkte toestemmings- en nieuwsbriefopties:** We hebben ons toestemmingsdialoogvenster bijgewerkt en een nieuwe optie toegevoegd waarmee u zich direct kunt *aan- of afmelden voor onze nieuwsbrief over ontwikkelingsupdates*. U kunt uw voorkeuren op elk moment beheren in uw gebruikersprofiel.

- **Technische Updates & Oplossingen:**
    * **Verbeterde WMS-compatibiliteit:** Er is een oplossing geïmplementeerd die de *compatibiliteit met een breder scala aan WMS-services aanzienlijk verbetert*. Dit betekent dat meer services nu naar verwachting werken op het platform.
    * **Configuratieproblemen opgelost:** Verschillende problemen met onjuiste Digital Twin-configuraties zijn opgelost, zodat uw Digital Twins correct laden en functioneren.
    * **Verbeterde stabiliteit:** We hebben kritieke beveiligingslekken aangepakt en een SOLR-fout opgelost die verhinderde dat sommige datasets correct werden opgehaald.

--- 
## Versie 1.36.0

### Release Notes:

- **UI:**
    * **Alfabetische sortering:** Alle lijsten en keuzemenu's op het platform zijn nu *alfabetisch gesorteerd*. Dit omvat resourceformaten, hubs en andere belangrijke lijsten, waardoor u sneller en gemakkelijker kunt vinden wat u zoekt.
    * **Verbeterde visuals:** We hebben verschillende kleine, maar impactvolle visuele verbeteringen aan het platform aangebracht.
        * Afbeeldingen op de homepage hebben geen grote rand meer wanneer ze zijn geselecteerd.
        * Het label "Navigatiehulpmiddelen" in de viewer is ingekort tot "Navigatie" om te voorkomen dat het uit de werkbalk stroomt.
        * De lay-out van de Digital Twin-voorbeeldweergave is verbeterd voor een betere leesbaarheid en een strakker uiterlijk.

- **Technische Updates & Oplossingen:**
    * **Verbeterde WMS-ondersteuning:** We hebben de ondersteuning voor een breder scala aan WMS-services verbeterd, met name door een probleem aan te pakken met services die geen `GetFeatureInfo` weergeven. Het platform verwerkt deze services nu correct zonder fouten.

---
## Versie 1.35.0

### Release Notes:

- **UI:**
    * **Herziene Digital Twin-overzicht:** We hebben de overzichtspagina van de Digital Twin volledig opnieuw ontworpen voor een schonere, meer logische lay-out.
    * **Consistente zijbalken:** Alle zijbalken hebben nu een consistente breedte en zijn aanpasbaar, wat zorgt voor een meer voorspelbare en comfortabele browse-ervaring.
    * **Tooltips & Helpteksten:** Er is een nieuw helpsysteem toegevoegd aan het hele platform. U kunt nu op het vraagtekenpictogram in de rechterbovenhoek klikken om handige tooltips in te schakelen die verschillende knoppen, velden en functionaliteiten uitleggen.
    * **Intuïtievere Hub-navigatie:** U kunt nu op een "eigenaar-hub"-veld klikken om direct naar de pagina van die hub te gaan.
    * **Slimmere Hub-toegang:** Wanneer u probeert toegang te krijgen tot data of een app die niet beschikbaar is in uw huidige actieve hub, presenteert het systeem u nu een lijst van alle hubs die toegang hebben tot dat item, zodat u kunt kiezen naar welke hub u wilt overschakelen.
    * **Verbeterde catalogusfilters:** Het filter "Onderdeel van hub" is toegevoegd aan de Digital Twins- en App-catalogi, wat consistentie brengt met de Datacatalogus en het gemakkelijker maakt om te vinden wat u zoekt.

- **Integratie:**
    * **Verbeterde Data & App-ontdekking:** We hebben het gemakkelijker gemaakt om compatibele apps voor uw data en compatibele data voor uw apps te vinden. Nieuwe filters en tabbladen zijn toegevoegd aan de catalogi om u te helpen relevante combinaties te ontdekken en nieuwe gebruikssituaties te ontsluiten.
    * **Directe Market Master-acties:** Market Master-acties kunnen nu worden gelogd en gecontroleerd voor betere traceerbaarheid en toezicht, zelfs wanneer de actie niet gebaseerd is op een gebruikersrapport.
    * **App als Hub-eigenaar:** Applicaties kunnen nu worden geconfigureerd om als een Hub-eigenaar te fungeren, waardoor ze een hub kunnen beheren en administreren via de API.

- **Technische Updates & Oplossingen:**
    * **Verbeterde DCAT-exportbeveiliging:** Toegangsrechten worden nu gecontroleerd voordat een DCAT-export wordt toegestaan, waardoor onbevoegde gebruikers geen datasetinformatie kunnen exporteren.
    * **WFS-resource fix:** Betaalde WFS-resources worden nu correct uitgeschakeld en grijs weergegeven voor gebruikers die geen abonnement hebben.
    * **Oplossing voor e-mailvalidatie:** Het e-mailvalidatieproces is verbeterd om een breder scala aan geldige e-mailadressen te accepteren.
    * **Kleine bugfixes:** Verschillende kleinere problemen zijn opgelost, waaronder het hernoemen van de knop "Link dataset" in het dialoogvenster voor het maken van apps.