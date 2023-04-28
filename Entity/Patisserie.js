class Patisserie extends Produit
{
    butter;

    constructor(name, productionPrice, SellingPrice, butter = false)
    {
        super(name, productionPrice, SellingPrice);
        this.butter = butter;
        console.log(`${this.name} est précisément une pâtisserie ${butter && 'au beurre'}`);
    }
}