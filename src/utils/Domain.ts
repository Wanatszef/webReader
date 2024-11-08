class Domain
{
    private domain: string;    
    private status: number;
    private cart: boolean;
    private advertisement: boolean;


    constructor(domain: string)
    {
        this.advertisement = false;
        this.cart = false;
        this.domain = domain;
        this.status = 0;
    }

    public setStatus(status: number)
    {
        this.status = status;
    }
    public setCart(cart: boolean)
    {
        this.cart = cart;
    }
    public setAdvertisement(advertisement: boolean)
    {
        this.advertisement = advertisement;
    }

    public getCart(): boolean
    {
        return this.cart;
    }

    public getAdvertisement(): boolean
    {
        return this.advertisement;
    }

    public getDomain(): string
    {
        return this.domain;
    }

    public getStatus(): number
    {
        return this.status;
    }

    public toString(): string
    {
     return "{Domain: " + this.domain + ", Status: " + this.status + ", Cart: " + this.cart + ", Advertisement: " + this.advertisement +" }";
    }

}