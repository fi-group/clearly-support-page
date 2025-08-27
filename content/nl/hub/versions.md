## Versie 1.37.0 (Laatste)

### Release-opmerkingen:

- **Integratie:**
    * **Aanpasbare Digital Twin-lagen:** Meer controle bij het configureren van Digital Twins is nu mogelijk. In plaats van alle lagen van een WMS/WMTS-service toe te voegen, kunnen nu *alleen de specifieke sublagen die nodig zijn* worden geselecteerd en toegevoegd. Dit resulteert in overzichtelijkere en meer gerichte Digital Twins.
    * **Slimmere WMS/WMTS/WFS-voorvertoningen:** Wanneer de titel van een WMS-, WMTS- of WFS-resource *exact overeenkomt* met een laagnaam, selecteert Clearly.Hub automatisch *alleen die specifieke laag*. Een dropdownmenu is hierdoor niet meer nodig.
    * **Gestroomlijnde Digital Twin-configuratie:** Deze slimme matching-logica geldt ook bij het toevoegen van resources aan een Digital Twin. Bij exacte overeenkomsten tussen resource-titel en laagnaam wordt de laag automatisch geselecteerd, wat configuratie sneller en intuïtiever maakt.

- **Gebruikersinterface:**
    * **Voorvertoning van GeoJSON-bestanden:** GeoJSON-bestanden kunnen nu *direct in Clearly.Hub* worden bekeken. Voor zeer grote bestanden (boven 10MB) is een waarschuwing toegevoegd om bevriezing van de browser te voorkomen.
    * **Bijgewerkte toestemmings- en nieuwsbriefopties:** Het toestemmingsdialoogvenster is aangepast en een nieuwe optie is toegevoegd om zich *direct in of uit te schrijven voor de nieuwsbrief met ontwikkelingsupdates*. Voorkeuren kunnen te allen tijde in het gebruikersprofiel worden beheerd.

- **Technische updates & fixes:**
    * **Uitgebreide WMS-compatibiliteit:** Een fix is doorgevoerd die de compatibiliteit met een breder scala aan WMS-services aanzienlijk verbetert. Meer services werken nu zoals verwacht op het platform.
    * **Opgeloste configuratieproblemen:** Meerdere problemen met incorrecte Digital Twin-configuraties zijn opgelost, zodat Digital Twins correct laden en functioneren.
    * **Verbeterde stabiliteit:** Kritieke beveiligingsproblemen zijn verholpen en een SOLR-fout die het ophalen van sommige datasets verhinderde is opgelost.

---

## Versie 1.36.0

### Release-opmerkingen:

- **Gebruikersinterface:**
    * **Alfabetische sortering:** Alle lijsten en dropdown-menu's op het platform zijn nu *alfabetisch gesorteerd*, inclusief resource-formaten, hubs en andere belangrijke lijsten, waardoor informatie sneller te vinden is.
    * **Verbeterde visuals:** Kleine maar impactvolle visuele verbeteringen zijn doorgevoerd.
        * Afbeeldingen op de startpagina hebben geen grote rand meer bij selectie.
        * Het label "Navigatiehulpmiddelen" in de viewer is ingekort tot "Navigatie" om overlap in de werkbalk te voorkomen.
        * De lay-out van de Digital Twin-voorvertoning is verbeterd voor betere leesbaarheid en een nettere uitstraling.

- **Technische updates & fixes:**
    * **Verbeterde WMS-ondersteuning:** Ondersteuning voor een breder scala aan WMS-services is uitgebreid, met name voor services die geen `GetFeatureInfo` blootstellen. Deze services worden nu correct verwerkt zonder fouten.

---

## Versie 1.35.0

### Release-opmerkingen:

- **Gebruikersinterface:**
    * **Herzien Digital Twin-overzicht:** De Digital Twin-overzichtspagina is volledig herontworpen voor een overzichtelijker en logischer layout.
    * **Consistente zijbalken:** Alle zijbalken hebben nu een consistente breedte en zijn aanpasbaar, wat zorgt voor een voorspelbare en comfortabele navigatie.
    * **Tooltips & hulpteksten:** Een nieuw hulpsysteem is door het platform toegevoegd. Het vraagtekenicoon rechtsboven kan worden aangeklikt om tooltips te activeren die uitleg geven over knoppen, velden en functionaliteiten.
    * **Intuïtieve hub-navigatie:** Klikken op een "eigenaar hub"-veld leidt direct naar de pagina van die hub.
    * **Slimmer hub-toegang:** Toegang tot data of apps die niet beschikbaar zijn in de huidige actieve hub toont nu een lijst van alle hubs met toegang, zodat een andere hub kan worden geselecteerd.
    * **Verbeterde catalogusfilters:** Het filter "Part of hub" is toegevoegd aan de Digital Twins- en Apps-catalogi, consistent met de Datacatalogus en vergemakkelijkt het vinden van gewenste items.

- **Integratie:**
    * **Verbeterde data- en app-discovery:** Het vinden van compatibele apps voor data en compatibele data voor apps is eenvoudiger gemaakt. Nieuwe filters en tabs helpen relevante combinaties te ontdekken.
    * **Directe Market Master-acties:** Market Master-acties kunnen nu worden gelogd en gecontroleerd voor betere traceerbaarheid, zelfs als de actie niet gebaseerd is op een gebruikersmelding.
    * **App als hub-eigenaar:** Applicaties kunnen nu worden geconfigureerd als Hub-eigenaar, waardoor een hub via de API beheerd kan worden.

- **Technische updates & fixes:**
    * **Verbeterde DCAT-exportbeveiliging:** Toegangsrechten worden nu gecontroleerd voor DCAT-exporten, waardoor ongeautoriseerde exports worden voorkomen.
    * **WFS-resource-fix:** Betaalde WFS-resources zijn correct uitgeschakeld en grijs weergegeven voor gebruikers zonder abonnement.
    * **Email-validatie:** De email-validatie accepteert nu een breder scala aan geldige emailadressen.
    * **Kleine bugfixes:** Diverse kleinere issues zijn opgelost, waaronder het hernoemen van de "Link dataset"-knop in het app-creatiedialoogvenster.
