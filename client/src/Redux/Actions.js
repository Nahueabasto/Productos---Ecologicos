import axios from "axios";
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
export const GET_NAME_PRODUCTS = 'GET_NAME_PRODUCTS';
export const GET_LINE_PRODUCTS = 'GET_LINE_PRODUCTS';
export const SET_LINE = "SET_LINE";
export const FOOTER = "FOOTER";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SET_SEARCH = "SET_SEARCH";
export const setSearch = "setSearch";
export const setLine = "setLine";
export const CREATE_USER = 'CREATE_USER';
export const GET_USER_INFO = 'GET_USER_INFO';
//import { loadingAction } from ".";export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const UPDATE_CART_COUNT = "UPDATE_CART_COUNT";
export const REMOVE_ALL = "REMOVE_ALL";
export const TOTAL_CART = "TOTAL_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const REFRESH_CART = "REFRESH_CART";
export const POST_REVIEW = "POST_REVIEW";
export const GET_REVIEWS = "GET_REVIEWS";
export const CALCULATE_AVERAGE_RATING = "CALCULATE_AVERAGE_RATING";
export const SORT_PRODUCTS_BY_RATING = "SORT_PRODUCTS_BY_RATING";

export function getProducts(){
    return async function(dispatch){
        var json = await axios.get("/products",{
        })
        return dispatch({
            type: GET_PRODUCTS,
            payload: json.data
        })
    }
}

export function getDetail(id){
    return async function(dispatch){
      try {

          let productDetail = await axios.get(`/products/${id}`)
          console.log(productDetail.data);
          
          return dispatch({
              type: GET_PRODUCT_DETAIL,
              payload: productDetail.data
          });
      } catch(error){
          console.error("Error fetching product data", error)
      }
    }
  }


export function getLineProducts(line) {
  return async function (dispatch) {
    try {
      const lowercaseLine = line;
      let json = await axios.get(`/products/line/${lowercaseLine}`);

      console.log("Action: GET_LINE_PRODUCTS");
      console.log("Payload:", json.data);

      dispatch({
        type: GET_LINE_PRODUCTS,
        payload: json.data,
      });

      dispatch({
        type: SET_LINE,
      });
    } catch (error) {
      console.error(error);
    }
  };
}


    ////
    export function getNameProduct(name) {
        return async function (dispatch) {
          try {
            const response = await axios.get(`/products?name=${name}`);
            dispatch({
              type: SEARCH_SUCCESS,
              payload: response.data,
            });
            dispatch({
              type: SET_SEARCH,
            });
          // } catch (error) {
          //   dispatch({
          //     type: SEARCH_FAILURE,
          //     payload: error.message,
          //   });
          // }
        } catch (error) {
          console.error(error);
      }
        };
      }

    export function addToCart(item) {
      
      return async function (dispatch) { 
        const { name, price, img, userId, id, quantity} = item
        console.log("Item in addToCart action:", userId, id, quantity);
        try {
        await axios.post('http://localhost:3001/api/cart/add', { userId: userId, productId: id, quantity });

        dispatch({
            type: ADD_TO_CART,
            payload: item,
        })

        dispatch(refreshCart(userId));

      } catch (error) {
        console.error('Error while trying to add product to the cart', error)
      } 
    }
    }

    export function removeFromCart(item) {  
      return async function (dispatch) { 
        const { productId, userId } = item;
        console.log(productId, userId);
        try {
          await axios.delete(`http://localhost:3001/cart/delete`, { data: { productId, userId } });
    
          return dispatch({
            type: REMOVE_FROM_CART,
            payload: productId
          });
        } catch (error) {
          console.error('Error removing item from cart:', error);
        } 
      }
  }

  export function removeAll(item) {
    return async function (dispatch, getState) { 
      const { productId, userId } = item;
      const state = getState();
      await axios.delete(`http://localhost:3001/cart/deleteall`, { data: { productId, userId } });
      const itemToRemove = state.shoppingCart.find((item) => item.id === productId);
      
      if (itemToRemove) {
        const quantityToRemove = itemToRemove.quantity
    dispatch({
        type: REMOVE_ALL,
        payload: {productId, quantityToRemove}
    },
  );
}
  };
}

export function updateCartCount(increment) {
  return async function (dispatch) {

    return dispatch({
      type: UPDATE_CART_COUNT,
      payload: increment,
    })
  }
}  /////
      export function createUser(payload) {
        return async function (dispatch) {
          try {
            
            let response = await axios.post("/users", payload);
            dispatch({
              type: CREATE_USER,
              payload: response.data,
            });

          } catch (error) {
            console.log("ERROR", error);
          }
        };
      }
export function updateQuantity(itemId) {
  return async function (dispatch, getState) {  
    const state = getState();
    const itemToUpdate = state.shoppingCart.find((item) => item.id === itemId);
    if(itemToUpdate) {
      const updatedItem = {...itemToUpdate, quantity: itemToUpdate.quantity + 1}
    return dispatch({
      type: UPDATE_QUANTITY,
      payload: updatedItem
  })
}
return dispatch({
  type: UPDATE_QUANTITY,
  payload: null, //por si el producto no está.
})
}
}


      export function getUserInfo() {
        return async function (dispatch) {
          try {
          let user = await axios.get("/users");

            dispatch({
              type: GET_USER_INFO,
              payload: user.data,
            });
          } catch (error) {
            console.log("ERROR", error);
          }
        };
      }

      
export function totalCart(){
  return async function (dispatch) {
    return dispatch({
      type: TOTAL_CART,
    })
  }
}

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


export function postReview(id, payload) {
  return async function (dispatch) {
    try {
      let info = await axios.post(`/products/${id}/review`, payload);
      return dispatch({
        type: POST_REVIEW,
        payload: info.data,
      });
    } catch (error) {
      console.log("ERROR", error);
    }
  };
}

export function getReview(id) {
  return async function (dispatch) {
    try {
      //console.log(id);
      const response = await axios.get(`/products/${id}/review`); 
      dispatch({
        type: GET_REVIEWS,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error al obtener la revisión:', error);
    }
  };
}

export function calculateAverageRating(productId) {
  return async function (dispatch) {
    try {
      console.log(productId);
      const response = await axios.get(`/products/${productId}/average-rating`); 
      dispatch({
        type: CALCULATE_AVERAGE_RATING,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error al obtener la revisión:', error);
    }
  };
}


export const sortProductsByRating = () => ({
  type: SORT_PRODUCTS_BY_RATING,
});

