# Online-Turnierplan

## Eine kurze Beschreibung vom Projekt

Ein Online-Format bei dem man z.B. für Fußball-Kleinfeldturniere Ergebnisse und Tabellen darstellen kann.

## Beispiel:

-   Man kann beispielsweise 16 Mannschaften eintragen.
-   Diese werden dann in 4 Gruppen aufgeteilt und der Spielplan erstellt, wo die Mannschaften in einer Gruppe gegeneinander antreten.
-   Nach jedem Spiel werden dann die Ergebnisse eingetragen und somit die
    Gruppentabelle mit Punkten aktualisiert. (_Bei einem Sieg gibt es 3 Punkte, bei Unentschieden 1 Punkt und bei Niederlage 0 Punkte_)
-   Gruppenerster und Gruppenzweiter steigen dann in die Endrunde auf
-   Nach der Gruppenphase geht es in die (_je nach Anzahl der Mannschaften_) ins Achtel-, Viertel-, Halbfinale und Finale.
-   Hier werden wiederrum die Mannschaften zufällig der gegnerischen Mannschaft zugeordnet.

## ToDo:

Backend:

-   Erstellung eines Turniers
-   Datenbankanbindung

-   Bewertung von **Sieg** (_3 Punkte_) / **Remis** (_1 Punkte_) / **Niederlage** (_0 Punkte_)
-   Addierung von Punkten
-   Tordifferenz

Frontend:

-   Kommunikation mit Backend (_via REST-API_)
-   Gruppentabellen
-   Matches (_in Gruppen- und KO-Phase_) darstellen
-   Erstellung von Gruppen mit 4 Mannschaften pro Gruppe
-   Sortierung nach Punkten
-   Gruppenerster und Gruppenzweiter steigen in die KO-Phase auf

## Verwendete Technologien:

**Backend:** C#/.NET Core \
**Frontend:** JavaScript/React \
**Datenbank:** MongoDB (_NoSQL_)
