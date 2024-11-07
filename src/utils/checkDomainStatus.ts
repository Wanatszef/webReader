
async function checkDomainStatus(url: string): Promise<void> {
    try {
        const response = await fetch(url);
        
        const status = response.status;
        console.log(`Status strony: ${status}`);
        
        const html = await response.text();
        console.log(`Kod źródłowy strony:\n${html}`);
    
    } catch (error) {
        console.error('Błąd podczas pobierania strony:', error);
    }
}

export default checkDomainStatus;