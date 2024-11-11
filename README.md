WebRader

Aplikacja napisana w TypeScript i JavaScript, która analizuje określone domeny, sprawdza ich status oraz obecność funkcji takich jak koszyk i reklamy. Projekt realizuje zadanie automatycznego sprawdzania domen, zwracając informacje o ich dostępności i zawartości.
Spis treści

    Opis projektu
    Funkcjonalności
    Wzór CSV

Opis projektu

Domain Checker to narzędzie, które pozwala analizować domeny na podstawie pliku CSV. Aplikacja wczytuje listę domen, a następnie sprawdza:

    status HTTP każdej domeny,
    czy na stronie znajduje się koszyk,
    czy na stronie występują reklamy.

Funkcjonalności

    Analiza domen: Sprawdzenie, czy domena jest aktywna, oraz uzyskanie jej kodu statusu.
    Sprawdzanie koszyka: Wykrycie obecności koszyka na stronie przez analizę zawartości.
    Sprawdzanie reklam: Analiza kodu strony w poszukiwaniu fraz wskazujących na reklamy (np. adsense, google-ads.com).
    Obsługa pliku CSV: Wczytywanie listy domen z pliku CSV do analizy.

Przykład pliku.csv

Domain  
https://www.example.com  
https://www.przyklad.pl  
https://www.poczta.pl
