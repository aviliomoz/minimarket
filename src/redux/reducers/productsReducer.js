import { types } from '../types';

const initialState = {
  products: [],
  categories: [],
  cart: [],
  activeCategory: 'all',
  activeFilter: 'Relevancia',
  activeProduct: null,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.productsSetActiveCategory:
      return {
        ...state,
        activeCategory: action.payload,
      };
    case types.productsSetActiveFilter:
      return {
        ...state,
        activeFilter: action.payload,
      };
    case types.productsSetActiveProduct:
      return {
        ...state,
        activeProduct: action.payload,
      };

    case types.productsCleanActiveProduct:
      return {
        ...state,
        activeProduct: null,
      };

    case types.productsAddProductToCart:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case types.productsUpdateProductInCart:
      return {
        ...state,
        cart: state.cart.map((product) => {
          return product.id === action.payload.id
            ? {
                ...product,
                quantity: product.quantity + action.payload.quantity,
              }
            : product;
        }),
      };

    case types.productsGetCartProducts:
      return {
        ...state,
        cart: action.payload,
      };

    case types.productsGetProducts:
      return {
        ...state,
        products: action.payload,
      };

    case types.productsGetCategories:
      return {
        ...state,
        categories: action.payload,
      };

    case types.productsDeleteProductInCart:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };

    default:
      return state;
  }
};
