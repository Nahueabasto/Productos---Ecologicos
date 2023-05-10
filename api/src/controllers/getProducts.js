const { Products, Line, Brand } = require("../db");

const getProducts = async function (name) {

    const productsAll = await Products.findAll({ include:[{model: Line},{ model: Brand}] });
    if (!name) {  
        return productsAll;
    } else {
        let searchProduct = await productsAll.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
        if (searchProduct.length === 0) {
            throw new Error(`Product with name ${name} not found `)
        } else {
            return searchProduct;
        }

    }
}

module.exports = { getProducts }