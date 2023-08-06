import { GET_PRODUCTS, GET_PRODUCT_DETAIL, GET_LINE_PRODUCTS, SET_LINE, FOOTER, SEARCH_SUCCESS, SET_SEARCH, CREATE_USER, GET_USER_INFO } from "./Actions";


const initialState = {
    products: [],
    filtered: [],
    detail: [],
    selectedCategory: "",
    userInfo: [],
    footer: false,
    isSearch: false,
    // searchResults: [], 
    // searchError: null,
    isLine: false,
}

function reducer (state = initialState, action) {
switch (action.type) {
    case GET_PRODUCTS:
        return{
            ...state,
            products: action.payload,
            filtered: action.payload,
        };
    case GET_PRODUCT_DETAIL:
        return{
            ...state,
            detail: action.payload,
        }

        case GET_LINE_PRODUCTS:
          return{
              ...state,
              filtered: action.payload[0]?.lines[0]?.name || "",
              products: action.payload,
          }
        

      case SET_LINE:
        return {
        ...state,
        isLine: true,
      };

        case FOOTER:
      return {
        ...state,
        footer: !state.footer,
      };

      ////
      case SEARCH_SUCCESS:
        return {
            ...state,
            products: action.payload,
        };
      
      case SET_SEARCH:
      return {
        ...state,
        isSearch: true,
      };

      case CREATE_USER:
        if (action.payload.id) {
          return {
            ...state,
            userInfo: action.payload,
          };
        }
        case GET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };

     

    default:
        return state
      }}
      export default reducer;