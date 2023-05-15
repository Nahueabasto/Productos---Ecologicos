const axios = require('axios');
const { Line } = require("../../db")


const api = async () => {
  try {
    const allLine = await axios.get('https://64504b8dba9f39c6ab7711e4.mockapi.io/api/line')

    const lines = allLine.data.map((e) => {
      return {
        id: e.id,
        name: e.name
      }
    })

    for (const line of lines) {
      await Line.findOrCreate({
        where: {
          id: line.id
        },
        defaults: {
          name: line.name
        }
      })
    }

    console.log('Database loaded successfully')
  } catch (error) {
    console.log(error)
  }
}
  
  

module.exports = { api }