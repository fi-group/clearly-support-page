## Versie 20.41.0 (Laatste)

### Release-opmerkingen:

- **Integratie:**
    * **Verbeterde Bulk-bewerkingen:** Verschillende problemen met de bulkbewerkingsfunctie zijn opgelost. De waarschuwing "niet-opgeslagen wijzigingen" verschijnt niet langer onterecht na het toepassen van wijzigingen, en de pop-up "Wijzigingen toepassen" geeft nu nauwkeuriger weer wanneer alle updates zijn voltooid, waardoor per ongeluk deselecteren wordt voorkomen.

- **Gebruikersinterface:**
    * **Verbeterde projectrelaties:** Bij het kopiëren van een item met gedefinieerde relaties in de metadata, worden deze relaties niet langer overgenomen als de optie "relaties van bronitem overnemen" niet is geselecteerd. Dit biedt meer controle over gekopieerde items.
    * **Kleine tekstupdates:** De zin "sinds gisterenavond" is aangepast naar "sinds gisterenmorgen" voor meer nauwkeurigheid.

- **Technische updates & fixes:**
    * **Vereenvoudigde configuratie van beschermde lagen:** Configuratie voor beschermde Esri-lagen wordt nu in de database opgeslagen in plaats van in een moeilijk te bewerken bestand. Dit vergemakkelijkt configuratie en elimineert de noodzaak om de applicatie opnieuw te laden na wijzigingen.
    * **Correcte gebruikersverwijdering:** Verwijderde gebruikers worden nu correct uit alle gekoppelde processen verwijderd, waardoor zij geen nieuwe taken toegewezen krijgen.
    * **Bouwapp-projecten ophalen:** Het systeem haalt nu zowel gepubliceerde als niet-gepubliceerde Bouwapp-projecten op, zodat projecten kunnen worden voorbereid en gekoppeld voordat ze live gaan.

---

## Versie 20.40.0

### Release-opmerkingen:

- **Gebruikersinterface:**
    * **Heraanpassing radiusmeting:** De beschrijving van de cirkelmeettool is gewijzigd van "Oppervlakte meten" naar "Radius meten" voor meer duidelijkheid.

---

## Versie 20.39.0

### Release-opmerkingen:

- **Integratie:**
    * **Verbeterde statuscontrole:** De statuscontrole van het platform verifieert nu de databaseverbinding, wat een betrouwbaarder indicatie geeft of de applicatie volledig operationeel is.
    * **Verbeterde alleen-lezen toegang:** Gebruikers met alleen-lezen toegang kunnen nu geen acties uitvoeren zoals items verwijderen, waardoor onbedoelde wijzigingen worden voorkomen en de beveiliging wordt verbeterd.

- **Technische updates & fixes:**
    * **Fix transparantie Esri-lagen:** Een probleem waarbij transparantie van Esri-lagen verloren ging na het sluiten van het identificatievenster is opgelost. Transparantie-instellingen worden nu correct behouden.
