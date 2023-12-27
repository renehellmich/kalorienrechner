# kalorienrechner

### In diesem Mini-Projekt geht es um die Programmierung eines BMR Rechners mittels HTML, SCSS / CSS und JS.


## Documentation

In dem Programm gibt man als erstes folgende Daten ein:
    - Gewicht in [kg]
    - Körpergröße in [cm]
    - Alter in [Jahre]

Im Zweiten Schritt wird das Geschlecht ausgewählt. Daraus berechnet sich die BMR ( Basal Metabolic Rate )

    - Männlich: BMR = 66 + (13.7 * Gewicht) + (5 * Größe) - (6.8 * Alter)
    - Weiblich: BMR = 655 + (9.6 * Gewicht) + (1.8 * Höhe) - (4.7 * Alter)

Anschließend wird ein Aktivitätslevel ausgewählt. An Aktivitätsleveln gibt es 

    - Sitzend –wenig oder keine Bewegung (BMR x 1,2)

    - Leicht aktiv –leichte körperliche Aktivität/Sport 1-3 Tage/Woche (BMR x 1,375)

     - Mäßig aktiv – moderate körperliche Aktivität/Sport an 3-5 Tagen/Woche (BMR x 1,55)

     - Sehr aktiv – starke körperliche Aktivität/Sport an 6-7 Tagen/Woche (BMR x 1,725)

    - Sehr stark aktiv – sehr starke tägliche körperliche Aktivität/Sport oder 2X tägliches Training (BMR x 1,9)

Aus allen diesen Angaben ermittelt sich der durchschnittliche Kcal Bedarf pro Tag.

Als kleines Extra, schaut das Programm, ob alle Felder eingegeben wurden. Ist dies nicht der Fall, verschiebt sich der Button nach links oder rechts.




## Authors

- [@renehellmich](https://github.com/renehellmich)


## Demo

https://renehellmich.github.io/kalorienrechner/




