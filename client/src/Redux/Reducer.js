import { GET_PRODUCTS, GET_PRODUCT_DETAIL, GET_NAME_PRODUCTS } from "./Actions";

const initialState = {
    products: [],
    detail: [],
}

function reducer (state = initialState, action) {
switch (action.type) {
    case GET_PRODUCTS:
        return{
            ...state,
            products: action.payload
        };
    case GET_PRODUCT_DETAIL:
        return{
            ...state,
            detail: action.payload,
        }
    case GET_NAME_PRODUCTS:
        return{
            ...state,
            products: action.payload,
        }

    default:
        return state
      }}
      export default reducer;