class Fabrication
{
    product;
    quantity;

    constructor(product, quantity) 
    {
        this.product    =   product;     
        this.quantity   =   quantity;   
    }

    getProductionPrice()
    {
        return this.product.productionPrice * this.quantity;
    }
}