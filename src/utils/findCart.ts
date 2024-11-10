const findCart = (domainSourceCode: string): boolean => 
    {
        const cartPatterns = [
            /id=["']cart["']/i,          // Identyfikator koszyka: id="cart"
            /class=["'][^"']*cart[^"']*["']/i,  // Klasa CSS: class="cart", "shopping-cart" itp.
            /id=["']basket["']/i,         // Inna popularna nazwa id koszyka
            /class=["'][^"']*basket[^"']*["']/i,  // Klasa CSS: basket
            /href=["'][^"']*cart[^"']*["']/i, // Linki zawierające "cart" w URL
            /href=["'][^"']*basket[^"']*["']/i // Linki zawierające "basket" w URL
        ];
    
        return cartPatterns.some(pattern => pattern.test(domainSourceCode));
    };
export default findCart;