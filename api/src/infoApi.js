const axios = require('axios');
const { Line } = require("./db")


const api = async () => {
  try {
    const allLine = await axios.get('https://64504b8dba9f39c6ab7711e4.mockapi.io/api/line')

     const Lines = allLine.data.map((e) => {
    //   return {
    //     id: e.id,
    //     name: e.name
    //   }
    // })

    // for (const line of lines) {
    //   await Line.findOrCreate({
    //     where: {
    //       id: line.id
    //     },
    //     defaults: {
    //       name: line.name
    //     }
    //   })
    // }
    return {
        id: e.id,
        name: e.name
      };
    });
    Lines.forEach(async (e) => {
      await Line.findOrCreate({
        where: {
          name: e.name,
          id: e.id,
        },
      });
    });

    console.log('Database loaded successfully')
  } catch (error) {
    console.log(error)
  }
}
  
  

module.exports = { api }