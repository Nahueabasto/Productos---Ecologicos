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
        return dispatch({
            type: ADD_TO_CART,
            payload: item
        })
      }
    }

    export function removeFromCart(productId) {  
      return async function (dispatch) { 
          return dispatch({
            type: REMOVE_FROM_CART,
            payload: productId
        })     
      }
  }

  export function removeAll(productId) {
    return async function (dispatch, getState) { 
      const state = getState();
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

