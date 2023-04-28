class Produit
{
    name;
    productionPrice;
    SellingPrice;

    constructor(name, productionPrice, SellingPrice)
    {
        this.name               =   name;
        this.productionPrice    =   productionPrice;
        this.SellingPrice       =   SellingPrice;
        console.log(`${this.name} est un produit (${this.productionPrice.toFixed(2)}/${this.SellingPrice.toFixed(2)})`);
    }
}