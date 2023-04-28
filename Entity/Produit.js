class Produit
{
    name;
    productionPrice;
    sellingPrice;

    constructor(name, productionPrice, sellingPrice)
    {
        this.name               =   name;
        this.productionPrice    =   productionPrice;
        this.sellingPrice       =   sellingPrice;
        console.log(`${this.name} est un produit (${this.productionPrice.toFixed(2)}/${this.sellingPrice.toFixed(2)})`);
    }
}