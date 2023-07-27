import { GET_PRODUCTS, GET_PRODUCT_DETAIL, GET_LINE_PRODUCTS, SET_LINE, FOOTER, SEARCH_SUCCESS, SET_SEARCH, ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY, UPDATE_CART_COUNT } from "./Actions";


const initialState = {
    products: [],
    filtered: [],
    detail: [],
    selectedCategory: "",
    footer: false,
    isSearch: false,
    // searchResults: [], 
    // searchError: null,
    isLine: false,
    shoppingCart: [],
    cartCount: 0,
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
      console.log("State GET_LINE_PRODUCTS:", state);
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
      
      case ADD_TO_CART:
        const currentItem = state.shoppingCart.find((item) => item.id === action.payload.id);
        if(currentItem) {
          console.log("Updating quantity for item with ID:", action.payload.id);
          return {
          ...state,
          shoppingCart: state.shoppingCart.map((item) =>
          item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1} //si existe el item, actualizá la cantidad y agregale 1
          : item
          ),
        };
        } else {
          console.log("Adding new item to the cart:", action.payload);
          return {
            ...state,
            shoppingCart: [...state.shoppingCart, {...action.payload, quantity: 1 }],
          }; //si no existe, agregalo y agregá una quantity con 1
        };
      
        case REMOVE_FROM_CART:
        return {
          ...state,
          shoppingCart: state.shoppingCart.filter((item) => item.id !== action.payload),
        };

        case UPDATE_QUANTITY:
        return {
        ...state,
        shoppingCart: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

        case UPDATE_CART_COUNT:
          return {
            ...state,
            cartCount: state.cartCount + 1
          }

    default:
        return state
      }}
      export default reducer;