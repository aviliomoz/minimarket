import { types } from '../types';

export const setActiveCategory = (category) => {
  return {
    type: types.productsSetActiveCategory,
    payload: category,
  };
};

export const setActiveFilter = (filter) => {
  return {
    type: types.productsSetActiveFilter,
    payload: filter,
  };
};

export const setActiveProduct = (product) => {
  return {
    type: types.productsSetActiveProduct,
    payload: product,
  };
};

export const cleanActiveProduct = () => {
  return {
    type: types.productsCleanActiveProduct,
  };
};

export const addProductToCart = (product) => {
  return {
    type: types.productsAddProductToCart,
    payload: product,
  };
};

export const updateProductInCart = (product) => {
  return {
    type: types.productsUpdateProductInCart,
    payload: product,
  };
};

export const getCartProducts = () => {
  return (dispatch) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    dispatch({
      type: types.productsGetCartProducts,
      payload: cart,
    });
  };
};

export const deleteProductInCart = (product) => {
  return {
    type: types.productsDeleteProductInCart,
    payload: product,
  };
};

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const res = await fetch('/data/products.json');
      const data = await res.json();

      if (data.ok) {
        dispatch({
          type: types.productsGetProducts,
          payload: data.products,
        });
      }
    } catch (error) {
      console.log(error);
      console.log('Error al obtener los productos');
    }
  };
};

export const getCategories = () => {
  return async (dispatch) => {
    try {
      const res = await fetch('/data/categories.json');
      const data = await res.json();

      if (data.ok) {
        dispatch({
          type: types.productsGetCategories,
          payload: data.categories,
        });
      }
    } catch (error) {
      console.log(error);
      console.log('Error al obtener las categorias');
    }
  };
};
