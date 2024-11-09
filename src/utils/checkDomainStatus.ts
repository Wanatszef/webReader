import findCart from "./findCart";
import findAds from "./findAds";
import {Domain} from "./Domain";
import advanceCheckDomainStatus from "./advancedCheckDomainStatus";

async function checkDomainStatus(url: string): Promise<Domain> {
    try {
        let domain = new Domain(url);

        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36'
            }
        });
        
        const status: number = response.status;
        const pageSource: string = await response.text();


        // Sprawdzamy, czy status pozwala na analizę treści
        switch(status) {
            case 200: // OK
            case 301: // Przekierowanie stałe
            case 302: // Przekierowanie tymczasowe
            case 304: // Nie modyfikowano
                domain.setStatus(status);
                domain.setCart(findCart(pageSource));
                domain.setAdvertisement(findAds(pageSource));
                break;

            case 403:
            case 401:
            case 429:
            case 409:
                domain.setStatus(status);
                //cledomain = await advanceCheckDomainStatus(url,status);
                break;
            case 400: // Błędne zapytanie
            case 404: // Nie znaleziono
            case 500: // Błąd wewnętrzny serwera
            case 502: // Zła brama
            case 503: // Niedostępny serwis
            case 504: // Brak odpowiedzi od bramy
                domain.setStatus(status);
                break;

            default:
                if (status > 308) { 
                    domain.setStatus(status);
                } else {
                    domain.setCart(findCart(await response.text()));
                }
                break;
        }
        
        return domain;

    } catch (error) {
        console.error('Błąd podczas pobierania strony:', error);
        return new Domain(url);
    }
}

export default checkDomainStatus;