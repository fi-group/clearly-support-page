## Versie ? (Laatste):

### Release-opmerkingen:

- **Integratie:**
    - Je kunt nu slechts een specifieke sublaag van een WMS/WMTS-service toevoegen aan een Digital Twin-configuratie.
    - Wanneer een WMS/WMTS/WFS-bron een titel heeft die overeenkomt met een laagnaam, wordt alleen die specifieke laag weergegeven, waardoor het niet nodig is om uit een dropdown te kiezen.
    - Het toevoegen van WMS/WMTS/WFS-bronnen aan een Digital Twin is nu gestroomlijnder wanneer de brontitel en laagnaam exact overeenkomen.

- **Gebruikersinterface (UI):**
    - Updates van de toestemmings-tekst en een optie om je in of uit te schrijven voor onze nieuwsbrief met ontwikkelingsupdates zijn toegevoegd.
    - GeoJSON-bestanden kunnen nu direct binnen Clearly.Hub worden bekeken.

- **Technisch:**
    - Er is een fix doorgevoerd om betere compatibiliteit met een breder scala aan WMS-services te garanderen.
    - Verschillende problemen met onjuiste Digital Twin-configuraties zijn opgelost.
    - Kritieke NPM-kwetsbaarheden en een SOLR-fout gerelateerd aan het ophalen van datasets zijn verholpen.

--- 
## Versie 1.35.0:

### Release-opmerkingen:

* **Compatibele apps en data:** Je kunt relevante apps/data vinden voor je data/apps.<br>
* **UI:** Overzicht van Digital Twin is vernieuwd.<br>
* **UI:** Zijbalken zijn consistenter gemaakt.<br>
* **UI:** Tooltips & Helpteksten (in te schakelen door op het vraagteken rechtsboven te klikken).<br>
* **UI:** Op (de meeste) plekken waar het veld "eigenaar hub" staat, is dit nu klikbaar zodat je naar de eigenaar hub kunt springen.<br>
* **UI:** Als je toegang wilt tot iets waarvoor je je actieve hub zou moeten wisselen, krijg je nu meer opties (wissel naar eigenaar hub, of (indien mogelijk) een andere hub die toegang heeft).<br>
* **MarketMaster:** Als de Market Master een "directe actie" gebruikt, wordt dit gelogd/audited.<br>
* **Technisch:** Een App kan nu optreden als HUB-eigenaar (als de juiste API is geconfigureerd).<br>
* Enkele bugfixes.<br>
