const axios = require('axios');
const { Line } = require("../../db")


const api = async () => {
  try {
    const allLine = await axios.get('https://6449bfc1a8370fb3213d256e.mockapi.io/api/products')

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