class Patissier extends Boulanger
{
    constructor(name)
    {
        super(name);
        console.log(`${this.name} est un pâtissier`);
    }

    fabriquer(product, quantity)
    {
        this.productions.push(new Fabrication(product, quantity));

        if (product instanceof Patisserie) 
        {
            console.log(`En pâtisserie, ${this.name} fabrique ${quantity} ${product.name}`);
        } 
        else if (product instanceof Produit) 
        {
            console.log(`En boulangerie, ${this.name} fabrique ${quantity} ${product.name}`);
        }
    }
}