
import { GET_PRODUCTS, GET_PRODUCT_DETAIL, GET_LINE_PRODUCTS, FOOTER, SEARCH_SUCCESS, SEARCH_FAILURE, SET_SEARCH} from "./Actions";



const initialState = {
    products: [],
    detail: [],
    selectedCategory: "",
    footer: false,
    isSearch: false,
    searchResults: [], 
  searchError: null,
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

    case GET_LINE_PRODUCTS:
        return{
            ...state,
            selectedCategory: action.payload[0]?.lines[0]?.name || "",
            products: action.payload,
        }
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
     
      case SEARCH_FAILURE:
        return {
          ...state,
          searchResults: [],
          searchError: action.payload,
        };
////

    default:
        return state
      }}
      export default reducer;