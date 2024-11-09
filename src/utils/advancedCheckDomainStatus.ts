import findCart from "./findCart";
import {Domain} from "./Domain";
import { Builder, By, until } from 'selenium-webdriver';
import findAds from "./findAds";


async function advanceCheckDomainStatus(url: string, statusCode: number): Promise<Domain>
{
    let driver = await new Builder().forBrowser('chrome').build();
    const domain = new Domain(url);
    domain.setStatus(statusCode);
    
    try {
        await driver.get(url);

        await driver.wait(until.elementLocated(By.css('body')), 10000); 

        const pageSource = await driver.getPageSource();

        console.log(pageSource);

 
        if(findCart(pageSource))
        {
            domain.setCart(true);
            domain.setStatus(200);
        }
        if(findAds(pageSource))
        {
            domain.setAdvertisement(true);
        }
        
        return domain;

    } catch (error) {
        console.error('Błąd podczas używania Selenium:', error);
        return domain;
    } finally {
        await driver.quit(); 
    }
}

export default advanceCheckDomainStatus;