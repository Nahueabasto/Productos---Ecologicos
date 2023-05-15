// const { Products, Line, Brand } = require("../db");

// const newProduct = async function (name, price, image, stock, details, line, brand) {
//     if (!id) {
//         throw new Error('You must enter an id value')
//     }
//     const searchProduct = await Products.findOne({
//         where: {
//             id: id,
//         },
//     });

//     if (!searchProduct) {
//         throw new Error(`Cannot find product ${id} to update`)
//     } else{
//         await Products.update(
//             {
//                 name: name,
//       price: price,
//       image: image,
//       stock: stock,
//       details: details,
//       line: line,
//       brand: brand
//             }, {
//             where: {
//                 id: id,
//             }
//         }
//         )
//         await newProduct.setLine(lineMatch);
       
//         // return ActivityAdd;
//         return `Product ${name} updated successfully`
//     } 
// }
// module.exports = { updateProduct };