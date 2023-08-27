import { GET_PRODUCTS, GET_PRODUCT_DETAIL, GET_LINE_PRODUCTS, SET_LINE, FOOTER, SEARCH_SUCCESS, SET_SEARCH, ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY, UPDATE_CART_COUNT, REMOVE_ALL, TOTAL_CART , CREATE_USER, GET_USER_INFO, POST_REVIEW } from "./Actions";


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
    //Shopping Cart states:
    shoppingCart: [],
    cartCount: 0,
    totalCart: 0,
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
      
      case ADD_TO_CART:
        const currentItem = state.shoppingCart.find((item) => item.id === action.payload.id); // buscar si existe el item primero en el carrito
        if(currentItem) {
          console.log("Updating quantity for item with ID:", action.payload.id);
          return { //si existe, agregarle 1 a la cantidad
          ...state,
          shoppingCart: state.shoppingCart.map((item) =>
          item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1} //si existe el item, actualizá la cantidad y agregale 1
          : item
          ),
          cartCount: state.cartCount + 1
        };
        } else {
          console.log("Adding new item to the cart:", action.payload);
          return {
            ...state,
            shoppingCart: [...state.shoppingCart, {...action.payload, quantity: 1 }],
            cartCount: state.cartCount + 1,
          }; //si no existe, agregalo y agregá una quantity con 1
        };
      
        case REMOVE_FROM_CART:
          const currenItem = state.shoppingCart.find((item) => item.id === action.payload); //primero buscar el item
          if (currenItem) { //si existe el item, evaluar si es mayor que 1 su cantidad
            if (currenItem.quantity > 1) {
              return {
                ...state,
                shoppingCart: state.shoppingCart.map((item) =>
                  item.id === action.payload
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                ), // si es mayor que 1, bajar la cantidad en uno
                cartCount: state.cartCount - 1, // El cartcount también baja en 1
              };
            } else {
              // Si es 1 la cantidad, borrarlo directamente
              return {
                ...state,
                shoppingCart: state.shoppingCart.filter((item) => item.id !== action.payload),
                cartCount: state.cartCount - 1,
              };
            }
          }
          return state; // retornar el estado actual si no se encuentran el item

          case REMOVE_ALL:
            const { productId, quantityToRemove } = action.payload;
          return{
          ...state,
          shoppingCart: state.shoppingCart.filter((item) => item.id !== productId),
          cartCount: state.cartCount - quantityToRemove,
      };

        case UPDATE_QUANTITY:
          const updatedItem = action.payload
          if(!updatedItem) {
            return state; //si no está el item retornar el estado como está
          }
        return {
        ...state,
        shoppingCart: state.shoppingCart.map((item) =>
          item.id === updatedItem.id ? updatedItem : item //Buscá el item. Si está, devolvé el item updateado. Sino, devolvé el item así
        ),
        cartCount: state.cartCount + 1
      };

        case UPDATE_CART_COUNT:
          const increment = action.payload; //si increment viene en true viene en el payload
          return {
            ...state,
            cartCount: increment ? state.cartCount + 1 : state.cartCount - 1,
          } // si increment está en true, sumale uno a la cuenta. Sino, restale 1.

        case TOTAL_CART:
          const allPrices = state.shoppingCart.map((product) => product.price * product.quantity);
          const total = allPrices.reduce((acc, obj) => acc + obj, 0);
          return {
            ...state,
            totalCart: total,
          }

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
      case POST_REVIEW:
      return {
        ...state,
      };

    default:
        return state
      }}
      export default reducer;