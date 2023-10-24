# Konzept #2 - Online-Turnierplan

## Eine kurze Beschreibung vom Projekt

Dies war meine erste Projektidee. \
Ein Online-Format in dem man z.B. für Fußball-Kleinfeldturniere Ergebnisse und Tabellen darstellen kann.

## Wer ist meine Zielgruppe?

Turnierveranstalter die abseits von einer Excel-Tabellen ein Kleinfußballfeld-Turnier zu leiten und zu dokumentieren

## Welches Problem löst mein Projekt?

Alternative zu Excel-Tabellen

## Was ist einzigartig, welche Besonderheit(en) gibt es? USP ... unique selling point

## Beispiel:

-   Man kann beispielsweise 10 Mannschaften eintragen.
-   Durch Zufall werden diese dann in Gruppen aufgeteilt und der Spielplan erstellt, wo die Mannschaften in einer Gruppe gegeneinander antreten.
-   Nach jedem Spiel werden dann die Ergebnisse eingetragen und somit die
    Gruppentabelle mit Punkten aktualisiert. (_Bei einem Sieg gibt es 3 Punkte, bei Unentschieden 1 Punkt und bei Niederlage 0 Punkte_)
-   Gruppenerster und Gruppenzweiter steigen dann in die Endrunde auf
-   Nach der Gruppenphase geht es in die (_je nach Anzahl der Mannschaften_) ins Achtel-, Viertel-, Halbfinale und Finale.
-   Hier werden wiederrum die Mannschaften zufällig der gegnerischen Mannschaft zugeordnet.

## ToDo:

Backend:

-   Login
-   Erstellung eines Turniers

    -   **Properties:**
        -   Name des Turniers
        -   Ort und Datum
        -   1 Aufeinandertreffen oder Hin- und Rückspiel
    -   **Mannschaften:**
        -   Name der Mannschaft

-   Bewertung von **Sieg** (_3 Punkte_) / **Remis** (_1 Punkte_) / **Niederlage** (_0 Punkte_)
-   Addierung von Punkten
-   Tordifferenz

Je nach Anzahl der Mannschaften → Erstellung von Gruppen mit 4 bis max 5 (_bei ungerader Anzahl_) Mannschaften pro Gruppe

Gruppenerster und Gruppenzweiter steigen in die KO-Phase auf

Frontend:

-   Gruppentabellen bzw. Begegnungen (_in KO-Phase_) darstellen
-   Export in PDF

## Verwendete Technologien:

**Backend:** C#/.NET Core \
**Frontend:** JavaScript/React \
**Datenbank:** MongoDB (_NoSQL_)
