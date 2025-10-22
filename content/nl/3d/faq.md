# Support FAQ Clearly.3D-City
Veelgestelde vragen voor de support van Clearly.3D-City en hoe ze opgelost kunnen worden.

---

### 1. Waarom 'draped' (valt) mijn 2D-laag over 3D-gebouwen heen?

Als een 2D-laag zowel over het terrein als over uw 3D-gebouwen heen valt, moet u een instelling in die 2D-laag aanpassen.

Zoek naar de instelling **‘handling in map’** (of vergelijkbaar) binnen de eigenschappen van de laag en pas de waarde ervan aan (stel deze bijvoorbeeld in om alleen over het terrein te 'drapen').

---

### 2. Waarom is de kwaliteit van de luchtfoto beter in 3D dan in 2D?

Dit kan gebeuren als de instelling **"High resolution"** (Hoge resolutie) is ingeschakeld, aangezien dit vaak alleen de 3D-weergave beïnvloedt. De 2D-weergave kan dan standaard terugvallen op een lager resolutieniveau (bijv. level 18).

Om dit op te lossen, probeer de optie **"High resolution" uit te vinken**. Definieer vervolgens handmatig het hoogst beschikbare resolutieniveau (bijv. level 21) voor de 2D-weergave.

---

### 3. Kan ik filteren op meerdere attributen in een laag?

Ja. Vanaf versie 5.2.12 en later bevatten de **geavanceerde filterinstellingen** een **"OR"** (OF) operator.

* Deze instelling is globaal. Als u attributen A, B en C opvraagt en "OR" selecteert, wordt het filter `A OR B OR C`. Als u "AND" selecteert, wordt het `A AND B AND C`.
* Voor complexere queries (bijv. `A AND (B OR C)`), moet u de filterexpressie handmatig schrijven in de **3DCityDB XML-filtertaal**. U kunt dan de configuratie van de x3dm-converter aanpassen en de expressie daarin plakken.
* De 3DCityDB-filtertaal is hier gedocumenteerd: [3DCityDB Documentatie](https://3dcitydb-docs.readthedocs.io/en/latest/impexp/xml-query/index.html)

---

### 4. Mijn 2D-lagen verschijnen wel in 3D-modus, maar niet in 2D-modus. Wat is er mis?

Dit probleem kan meerdere oorzaken hebben, zelfs als 'feature info' correct wordt weergegeven wanneer u op de locatie klikt.

Een veelvoorkomende oplossing is het controleren van de **configuratie van de laag**. In een bekend geval (gezien op [3drotterdam.nl](https://www.3drotterdam.nl/#/)) werd het probleem opgelost door een specifiek **selectievakje in de laagconfiguratie-instellingen** aan te vinken dat de 2D-zichtbaarheid regelde. Controleer alle instellingen voor zichtbaarheid en modi voor die laag.

---

### 5. Ik krijg een "blocked by CORS policy" foutmelding. Hoe los ik dit op?

Een **"Cross-Origin Resource Sharing" (CORS)** fout treedt op wanneer een webapplicatie (bijv. `https://hub.clearly.app`) gegevens probeert op te vragen van een server op een ander domein (bijv. `https://www.gis.rotterdam.nl/gisweb2/wms`). De server blokkeert dit standaard uit veiligheidsoverwegingen.

Om dit op te lossen, moet de **server** (die de gegevens host) zo worden geconfigureerd dat deze expliciet verzoeken van de 'origin' (oorsprong) van de applicatie toestaat. Dit wordt gedaan door een `Access-Control-Allow-Origin` header toe te voegen aan het antwoord van de server, met daarin de toegestane domeinen.

De server `www.gis.rotterdam.nl` moet bijvoorbeeld worden bijgewerkt om 'origins' zoals `https://hub.clearly.app` en `https://www.3drotterdam.nl/` toe te staan.

U kunt hier meer lezen over de technische details: [Cross-Origin Resource Sharing (Wikipedia)](https://en.m.wikipedia.org/wiki/Cross-origin_resource_sharing)

---

### 6. Waarom is de "objectselectie" grijs (uitgeschakeld) in de export-tool?

Dit gebeurt meestal omdat de lagen zelf niet zijn geconfigureerd om exporteerbaar te zijn. Er zijn twee belangrijke stappen om dit te configureren:

1.  **Moduleconfiguratie:** Zorg ervoor dat de export-plugin (tool) in dezelfde module is geplaatst als de datalagen die u wilt exporteren.
2.  **Laag JSON-bewerking:** U moet de JSON-configuratie voor elke laag die u exporteerbaar wilt maken handmatig bewerken. Voeg de eigenschap `"exportWorkbench"` toe aan de JSON-definitie van de laag, verwijzend naar de FME-downloadservice-URL.