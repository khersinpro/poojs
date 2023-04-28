class Boulangerie
{
    name;
    employees;

    constructor(name)
    {
        this.name       =   name;
        this.employees  =   [];
        console.log(`${this.name} est une boulangerie`);
    }

    embaucher(employee)
    {
        this.employees.push(employee);
        console.log(`${this.name} embauche ${employee.name}`);
    }

    bilan()
    {
        console.log('BILAN');
        this.displayManufacturersBilan();
        this.displaySellersBilan();
        this.displayPricingBilan()
    }

    displayManufacturersBilan()
    {
        let manufacturers           =   this.employees.filter(employe => employe instanceof Boulanger);
        for (const manufacturer of manufacturers)
        {
            console.log(`Fabrications de ${manufacturer.name}`);
            for (const production of manufacturer.productions)
            {
                console.log(` ${production.quantity} ${production.product.name} x ${production.product.productionPrice.toFixed(2)} = ${ production.getProductionPrice().toFixed(2) }`);
            }
            console.log(` Total = ${manufacturer.getTotalProductionPrice()}`);
        }
    }

    displaySellersBilan()
    {
        let sellers                 =   this.employees.filter(employe => employe instanceof Vendeuse);
        for (const seller of sellers)
        {
            console.log(`Ventes de ${seller.name}`);
            for (const sale of seller.sales)
            {
                console.log(` ${sale.quantity} ${sale.product.name} x ${sale.product.sellingPrice.toFixed(2)} = ${ sale.getSellingprice().toFixed(2) }`);
            }
            console.log(` Total = ${seller.getTotalSellingPrice().toFixed(2)}`);
        }
    }

    displayPricingBilan()
    {
        console.log('Totaux');
        console.log(` Fabrications = ${this.getBilanProductionPrice().toFixed(2)}`);
        console.log(` Ventes = ${this.getBilanSellingPrice().toFixed(2)}`);
        console.log(` Résultat = ${this.getNetTotalPrice().toFixed(2)}`);
    }

    getBilanProductionPrice()
    {
        let totalProductionPrice    =   0;
        let manufacturers           =   this.employees.filter(employe => employe instanceof Boulanger);
        manufacturers.forEach(manufacturer => totalProductionPrice += manufacturer.getTotalProductionPrice());
        return totalProductionPrice;

    }

    getBilanSellingPrice()
    {
        let totalSellingPrice       =   0;
        let sellers                 =   this.employees.filter(employe => employe instanceof Vendeuse);
        sellers.forEach(saller => totalSellingPrice += saller.getTotalSellingPrice());
        return totalSellingPrice;
    }

    getNetTotalPrice()
    {
        return this.getBilanSellingPrice() - this.getBilanProductionPrice();
    }
}