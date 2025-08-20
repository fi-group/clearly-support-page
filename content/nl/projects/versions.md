## Versie 20.41.0 (Meest recent)

### Release Notes:

- **Integratie:**
    * **Soepelere bulkbewerkingen:** We hebben verschillende problemen met de functie voor bulkbewerkingen opgelost. De waarschuwing "u heeft niet-opgeslagen wijzigingen" verschijnt niet langer onterecht nadat u wijzigingen heeft toegepast, en de pop-up "Wijzigingen toepassen" geeft nu nauwkeuriger aan wanneer alle updates zijn voltooid, waardoor onbedoelde deselecties worden voorkomen.

- **UI:**
    * **Verbeterde projectrelaties:** Wanneer u een item kopieert dat relaties heeft gedefinieerd in de metadata, worden die relaties niet langer overgenomen als de optie "relaties van bronitem overnemen" niet is geselecteerd. Dit geeft u meer controle over uw gekopieerde items.
    * **Kleine tekstupdates:** De zin "sinds gisteravond" is gewijzigd in "sinds gistermorgen" voor betere nauwkeurigheid.

- **Technische Updates & Oplossingen:**
    * **Vereenvoudigde configuratie van beveiligde lagen:** De configuratie voor beveiligde Esri-lagen wordt nu opgeslagen in de database in plaats van in een moeilijk te bewerken bestand. Dit maakt de configuratie eenvoudiger en elimineert de noodzaak om de applicatie opnieuw te laden na het aanbrengen van wijzigingen.
    * **Correcte gebruikersverwijdering:** Wanneer u een gebruiker uit een project verwijdert, wordt deze nu correct verwijderd uit alle gerelateerde processen, wat voorkomt dat ze nieuwe taken krijgen toegewezen.
    * **Ophalen van Bouwapp-projecten:** Het systeem haalt nu zowel gepubliceerde als ongepubliceerde Bouwapp-projecten op, zodat u projecten kunt voorbereiden en koppelen voordat ze live gaan.

---

## Versie 20.40.0

### Release Notes:

- **UI:**
    * **Hernoemde straalmeting:** De beschrijving voor de cirkelmeetfunctie is gewijzigd van "Meet oppervlakte" naar "Meet radius" voor de duidelijkheid.

---

## Versie 20.39.0

### Release Notes:

- **Integratie:**
    * **Verbeterde statuscontrole:** De statuscontrole van het platform verifieert nu de databaseverbinding, wat een betrouwbaardere indicator is van of de applicatie volledig operationeel is.
    * **Verbeterde alleen-lezen toegang:** We hebben de mogelijkheid voor gebruikers met alleen-lezen toegang om acties zoals het verwijderen van items uit te voeren, verwijderd, wat onbedoelde wijzigingen voorkomt en de beveiliging verbetert.

- **Technische Updates & Oplossingen:**
    * **Oplossing voor Esri-laagtransparantie:** We hebben een probleem opgelost waarbij de transparantie van Esri-lagen verloren ging na het sluiten van het identificatievenster van een item. Uw transparantie-instellingen worden nu correct behouden.