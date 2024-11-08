import findCart from "./findCart";

async function checkDomainStatus(url: string): Promise<Domain> {
    try {

        let domain = new Domain(url);

        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36'
            }
        });
        
        const status: number = response.status;
        console.log(`Status strony: ${status}`);
        if(status > 308)
        {
            domain.setStatus(status);
            return domain;
        }
        else
        {
           domain.setCart(findCart(await response.text()));
           return domain;
        }
    
    } catch (error) {
        console.error('Błąd podczas pobierania strony:', error);
        return new Domain(url);
    }
}

export default checkDomainStatus;