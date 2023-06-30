import axios from "axios";
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
export const GET_NAME_PRODUCTS = 'GET_NAME_PRODUCTS';

export function getProducts(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/products",{
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

          let productDetail = await axios.get(`http://localhost:3001/products/${id}`)
          console.log(productDetail.data);
          
          return dispatch({
              type: 'GET_PRODUCT_DETAIL',
              payload: productDetail.data
          });
      } catch(e){
          console.log(e)
      }
    }
  }

  export function getNameProduct(payload){
    return async function (dispatch){
        var json = await axios.get(`http://localhost:3001/products?name=${payload}`);
        return dispatch({
            type: GET_NAME_PRODUCTS,
            payload: json.data,
        })
    }
}