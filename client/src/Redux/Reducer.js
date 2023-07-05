import { GET_PRODUCTS, GET_PRODUCT_DETAIL, GET_NAME_PRODUCTS, GET_LINE_PRODUCTS, FOOTER } from "./Actions";

const initialState = {
    products: [],
    detail: [],
    selectedCategory: "",
    footer: false,
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
    case GET_LINE_PRODUCTS:
        return{
            ...state,
            selectedCategory: action.payload,
        }
        case FOOTER:
      return {
        ...state,
        footer: !state.footer,
      };

    default:
        return state
      }}
      export default reducer;