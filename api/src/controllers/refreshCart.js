const axios = require("axios");
const { Products, User, Cart } = require("../db");


export function refreshCart(userId) {  
    return async function (dispatch) { 
      try {
        const response = await axios.get(`http://localhost:3001/cart/${userId}`);
        const updatedCart = response.data; // Assuming the response contains the updated cart
  
        return dispatch({
          type: REFRESH_CART,
          payload: updatedCart
        });
      } catch (error) {
        console.error('Error refreshing cart:', error);
      } 
    }
  }