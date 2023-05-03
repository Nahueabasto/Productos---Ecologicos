const axios = require('axios');
const { Line } = require("../../db")

// const api = async() => {
//     const allLine = await axios.get('https://64504b8dba9f39c6ab7711e4.mockapi.io/api/line')
//     const line = allLine.data.map((e) => {
//         return {
//             id: e.id,
//             name: e.name
//         }
//     })
//     line.forEach(async (e) => {
//         await Line.findOrCreate({
//             where: {
//                 name: e.name,
//                 id: e.id,
//             }
//         })
//     })
// }

const api = async() => {
    try {
      const allLine = await axios.get('https://64504b8dba9f39c6ab7711e4.mockapi.io/api/line')
      const line = allLine.data.map((e) => {
        return {
          id: e.id,
          name: e.name
        }
      })
  
      for (const e of line) {
        await Line.findOrCreate({
          where: {
            name: e.name,
            id: e.id,
          }
        })
      }
  
      console.log('Datos guardados exitosamente en la base de datos')
  
    } catch (error) {
      console.error(error)
    }
  }
  
  

module.exports = { api }