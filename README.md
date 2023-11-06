# Fridge Management App

Aufgabe dieses Projektes war die Erstellung einer `Web-App mit React zur Verwaltung eines Kühlschranks` und folgenden Funktionen:

- Das Anzeigen von eingelagerten Produkten in einer übersichtlichen, aber kompakten Weise.
- Das Sortieren aller Produkte nach Ablaufdatum in aufsteigender Reihenfolge (ältestes Datum zuerst).
- Das Hinzufügen neuer Produkte per Formular.
- Das Entfernen einzelner bereits eingelagerter Produkte per Knopfdruck.
- Das Entfernen aller bereits abgelaufenen Produkte per Knopfdruck (`clean`).
- Das Entfernen ALLER eingelagerten Produkte per Knopfdruck (`defrost`).

Die Datenstruktur wurde bereitgestellt.
<br>
<br>

## Vorgehensweise

<br>

Um das Projekt optisch interessanter zu gestalten, habe ich als potentiellen Kunden den Küchengerätehersteller `SMEG` gewählt, bekannt für seine Produkt-Designs im Retro-Look und einer großen Farbpalette der Geräte. Es wurde eine grafische Oberfläche designed, die übersichtlich die Funktionalitäten aufteilt und dem User zudem die Möglichkeit gibt, die Farbe seines Kühlschranks über einen `Color Picker` selbst einzustellen.<br>
Die Farbauswahl wird anschließend im Local Storage gespeichert.
<br>
<br>

![Fridge Management App Screenshot](readme_assets/fridge_management.png)
<br>
<br>

Der Smarte Kühlschrank verfügt über eine kleine, zentrale Datenbank, die für diese Aufgabe bereits bereitgestellt wurde. Die Datenstruktur wurde vom beiliegenden Server gefetcht und die GUI-Elemente mit Funktionen zum Manipulieren dieser Datenstruktur verbunden.

TIPP: Der Befehl `npm run start-backend-with-seeding` startet den Server und stellt sechs Testprodukte bereit.

<br>
Die Datensätze einzelner Produkte werden als Kacheln angezeigt und als eigene Komponente ausgelagert. Dabei wurde eine Funktion eingebaut, die abgelaufene Produkte identifiziert und in der User-Ansicht farblich markiert aufblinken läßt. Eine weitere Funktion sortiert die Produkte nach Ablaufdatum, wobei die ältesten Produkte zuerst angezeigt werden.<br>
<br>
Eine weitere Komponente beinhaltet ein Formular zum hinzufügen neuer Produkte zur Datenbank mittels POST-Methode.<br>
<br>
Mittels DELETE-Methode und Remove-Funktion lassen sich Produkte nach ihrer ID aus der Datenbank entfernen.<br>
<br>

(Design & Development by Susann Gailus)
