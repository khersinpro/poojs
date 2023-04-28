class Vendeuse
{
    name;
    sales;

    constructor(name) 
    {
        this.name       =       name;
        this.sales      =       [];
        console.log(`${this.name} est une vendeuse`);
    }

    vendre(product, quantity)
    {
        this.sales.push(new Vente(product, quantity));
        console.log(`${this.name} vend ${quantity} ${product.name}`);
    }

    getTotalSellingPrice()
    {
        let totalprice = 0;
        this.sales.map(sale => totalprice += sale.getSellingprice());
        return totalprice;
    }
}