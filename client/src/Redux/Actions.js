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
//import { loadingAction } from ".";

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
              type: GET_PRODUCT_DETAIL,
              payload: productDetail.data
          });
      } catch(e){
          console.log(e)
      }
    }
  }


  // export function getLineProducts(line){
  //   return async function(dispatch){
  //       try {
  //       const lowercaseLine = line;
  //       let json = await axios.get(`http://localhost:3001/products/${lowercaseLine}`)
  //        dispatch({
  //           type: GET_LINE_PRODUCTS,
  //           payload: json.data
  //       })
  //       dispatch({
  //         type: SET_LINE,
  //       });
  //   } catch (error) {
  //       console.error(error);
  //   }
  //   }
//}

export function getLineProducts(line) {
  return async function (dispatch) {
    try {
      const lowercaseLine = line;
      let json = await axios.get(`http://localhost:3001/products/line/${lowercaseLine}`);

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
            const response = await axios.get(`http://localhost:3001/products?name=${name}`);
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
      
      //// USER /////
      export function createUser(payload) {
        return async function (dispatch) {
          try {
            
            let response = await axios.post("http://localhost:3001/users", payload);
            dispatch({
              type: CREATE_USER,
              payload: response.data,
            });
      
          } catch (error) {
            console.log("ERROR", error);
          }
        };
      }
      

      export function getUserInfo() {
        return async function (dispatch) {
          try {
          let user = await axios.get("http://localhost:3001/users");

            dispatch({
              type: GET_USER_INFO,
              payload: user.data,
            });
          } catch (error) {
            console.log("ERROR", error);
          }
        };
      }