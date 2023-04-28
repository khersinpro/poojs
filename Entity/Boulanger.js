class Boulanger
{
    name;
    productions;

    constructor(name)
    {
        this.name           =   name;
        this.productions    =   [];
        console.log(`${this.name} est un boulanger`);
    }

    fabriquer(product, quantity)
    {
        this.productions.push(new Fabrication(product, quantity));
        console.log(`${this.name} fabrique ${quantity} ${product.name}`);
    }

    getTotalProductionPrice()
    {
        let totalprice = 0;
        this.productions.map(production => totalprice += production.getProductionPrice());
        return totalprice;
    }
}