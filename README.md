# **Applicatie I'm Hangry**

![Screenshot 2023-11-19 155145.png](src%2Fassets%2FScreenshot%202023-11-19%20155145.png)

## **Inleiding:**

De link naar de git hub repository: https://github.com/estherpunter/imhangry

Het doel van de applicatie is om de dagelijkse moeite van het bedenken van een lekker recept weg te nemen. Men is bewust van het belang van het eten van een gevarieerd dieet, maar in het dagelijks leven kan dit soms nogal wat stress meebrengen. I’m Hangry helpt gebruikers om een keuze te maken en hierbij rekening te houden met hun humeur, tijd en andere behoeften.

Zo kan je direct op de homepagina een paar grappige vragen beantwoorden over hoe je je voelt, hoeveel tijd je hebt, en hoeveel zin je hebt om te komen. De applicatie laat je vervolgens passende recepten zien. Daarnaast kunnen gebruikers de applicatie ook gebruiken om door een grote database van recepten te browsen als ze al een idee hebben over wat ze willen koken. Verder kunnen gebruikers door middel van de zoekfunctie ook op zoek naar gerechten met specifieke ingrediënten, en bestaat er de optie om op specifieke ingrediënten te filteren (voor als je die bijna-rotte tomaat uit je koelkast nog heel graag wil gebruiken in een recept). Ten slotte is het voor gebruikers mogelijk om zich te registreren en inloggen en hun favoriete recepten te bekijken op hun profielpagina.


## **Benodigdheden:**

Om de recepten op te halen gebruik je de Edamam API (https://developer.edamam.com/edamam-docs-recipe-api). Het is belangrijk dat je een account aanmaakt zodat je je eigen App Id en App key kunt gebruiken.
Om gebruikers in te loggen en te registeren kan je gebruik maken van de NOVI backend (https://github.com/hogeschoolnovi/novi-educational-backend-documentation/blob/main/README.md#0-test).

Lees van zowel de Edamam API en de NOVI backend de documentatie goed door.

## **Stappenplan:**

1. Maak eerst voor alle pagina's een aparte map met daarin een .jsx en .css bestand. Je kunt alvast de functie en return statements in de bestanden zetten en de .css importeren in het bijbehorende .jsx bestand.
2. Maak componenten voor de navigatiebalk, buttons en de recept kaarten
3. Importeer de Router van react-router-dom en zet deze om het App-component in de main.jsx
4. In App.jsx maak je gebruik van de Router en zorg ervoor dat je straks alle beschikbare pagina's kunt bereiken door de uri aan te passen
5. Vervolgens ga je verder met de navigatiebalk, deze bevat links naar alle pagina's behalve de profiel- en log in pagina
6. De applicatie maakt gebruikt van authenticatie dus maak ook een context map met daarin een AuthContext-component
7. Zorg ervoor dat je de AuthContext Provider ook om je App-component in de main.jsx komt te staan

#### **Sign up pagina**

1. Op de sign up pagina maak je de invoervelden voor de gegevens die je van de gebruiker wilt ontvangen
2. Vervolgens maak je de state aan
3. Vergeet niet ook de error en loading state aan te maken
4. Vervolgens schrijf je een asynchrone functie met een POST request om de gegevens van de gebruiker naar de NOVI backend te sturen
5. Zorg ervoor dat bij het invullen van de invoervelden en het versturen van het formulier, de state verandert
6. Na het registreren wordt de gebruiker direct doorverwezen naar de inlogpagina (zorg ook dat de gebruiker via deze pagina naar de inlogpagina kan als deze al een account heeft)

#### **Sign in pagina**

1. Op de sign in pagina maak je de invoervelden voor de gegevens die de gebruiker nodig heeft om in te loggen (check hiervoor de documentatie van de NOVI backend)
2. Ook hier maak je de state aan voor de gegevens die ingevuld worden (inclusief de error en loading)
3. Bij het inloggen ontvang je een token, deze is nodig om de gebruiker te authenticeren
4. Zorg ervoor dat bij het invullen van de invoervelden en het versturen van het formulier, de state verandert
6. Na het inloggen wordt de gebruiker direct doorverwezen naar de profiel pagina

#### **Empty the fridge**

1. Maak in het Empty the fridge bestand state aan voor de recepten en een zoekopdracht
2. Maak een invoerveld waar de gebruiker een ingredient in kan typen en zorg ervoor dat de state verandert
3. Met behulp van een asynchrone functie haal je de recepten op die het ingredient uit de zoekopdracht bevatten
4. Toon de recepten op de pagina na het klikken op de button

#### **All recipes**

1. Op de All recipes pagina zie je direct alle beschikbare recepten, maak een asynchrone functie met een GET request naar de Edamam API
2. Zorg ervoor dat ze mooi op de pagina worden weergegeven (met behulp van het recept kaart component)
3. Ook hier is het van belang om een stukje state aan te maken
4. Zet ook hier weer een error en loading state zodat de gebruiker kan zien als er iets mis gaat met het ophalen van de data


#### **Homepage**

1. De Homepagina bevat een aantal vragen over de stemming, de tijd en de motivatie om te koken. Maak deze invoervelden aan.
2. Met een GET-request zorg je ervoor dat de applicatie recepten op haalt met de door de gebruiker ingevoerde waardes
3. De vraag over humeur is gelinkt aan de 'tag' van de Edamam API
4. De vraag over de tijd is gelinkt aan de 'time'
5. En de vraag over de motivatie is gelinkt aan het aantal ingrediënten van de recepten
6. Als de gebruiker invoert dat hij/zij 'Hangry' is, weinig tijd heeft en weinig motivatie, krijgt hij/zij recepten te zien met de 'comfort'-tag, die minder dan 20 minuten duren en niet meer dan 5 ingrediënten bevatten. Als de gebruiker invoert zich goed te voelen, veel tijd en motivatie te hbben, dan worden er recepten getoond met de tag 'healthy', een bereidingstijd van langer dan 20 minuten en met meer dan 5 ingrediënten.
7. Zorg dat de passende recepten op de pagina getoond worden


#### **Profile**

1. Hier komen de gegevens van de gebruiker te staan
2. En alle recepten die de gebruiker als favoriet heeft gemarkeerd
3. Maar zover ben ik niet gekomen


## **Beschikbare inloggegevens:**

Er bestaan al gebruikers met de volgende inloggegevens:

* Username: gerrit
* Wachtwoord: gerrit

* Username: piet
* Wachtwoord: 123456




