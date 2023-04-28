class Vente
{
    product;
    quantity;

    constructor(product, quantity) 
    {
        this.product    =   product;     
        this.quantity   =   quantity;   
    }

    getSellingprice()
    {
        return this.product.sellingPrice * this.quantity;
    }
}