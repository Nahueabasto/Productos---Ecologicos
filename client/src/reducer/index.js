import { GET_PRODUCTS } from "../actions/index"

const initialState = {
    products: [],
}

function reducer (state = initialState, action) {
switch (action.type) {
    case GET_PRODUCTS:
        return{
            ...state,
            products: action.payload
        }

    default:
        return state
      }}
      export default reducer;
