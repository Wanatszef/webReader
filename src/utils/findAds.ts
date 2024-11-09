const findAds = (domainSourceCode: string): boolean => 
    {
        const adPatterns = [
            /google_ads/,                   
            /google_ads_iframe/,             
            /adsbygoogle\.js/,               
            /google-ads\.com/,
            /adsense/,
            /ad-container/,
            /adsystem/,
            /aaxads\.com/,
            /mnetads\.com/,
            /media\.net/,
            /popup/,
            /popunder/
        ];

        return adPatterns.some(pattern => pattern.test(domainSourceCode));
    };
export default findAds;