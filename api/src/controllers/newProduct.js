const { Products, Line, Brand } = require("../db");

const newProduct = async function (name, price, image, stock, details, line, brand) {

  if (!name || !price || !image || !stock || !details || !line || !brand) {
    throw new Error('You must complete all fields')
  }
  const searchProduct = await Products.findOne({
    where: {
      name: name,
    },
  });
  const lineMatch = await Line.findAll({
    where: {
      name: line,
    },
  });

  const statesMatch = await Brand.findAll({
    where: {
      name: brand,
    },
  });
 
 
  // console.log(typesMatch)

  // console.log(regionsMatch)
  
  if (!searchProduct) {
    const newProduct = await Products.create({
      name: name,
      price: price,
      image: image,
      stock: stock,
      details: details,
      line: line,
      brand: brand

     // rating:"",
     // review:""
    });
    
    //await newProduct.setLine(lineMatch);
   // await newProduct.setStates(statesMatch);
    //await newProduct.setRegions(regionsMatch);
    

    return `New box ${name} was created and added successfully`
  } else {
 
    return `${name} box already exists`
  }
}
module.exports = { newProduct };