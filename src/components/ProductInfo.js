import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductToCart,
  cleanActiveProduct,
  updateProductInCart,
} from '../redux/actions/productsActions';
import { ProductCounter } from './ProductCounter';

export const ProductInfo = ({ product }) => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.products);

  const [counter, setCounter] = useState(1);

  const handleAddToCart = () => {
    const cartIds = cart.map((product) => {
      return product.id;
    });

    if (cartIds.includes(product.id)) {
      dispatch(
        updateProductInCart({
          ...product,
          quantity: counter,
          total: counter * product.price,
        }),
      );
    } else {
      dispatch(
        addProductToCart({
          ...product,
          quantity: counter,
          total: counter * product.price,
        }),
      );
    }

    dispatch(cleanActiveProduct());
  };

  return (
    <div className="product-info">
      <section className="product-info-image">
        <img src={product.image} alt={product.name} />
      </section>
      <section className="product-info-data">
        <h1>{product.name}</h1>
        <h3>
          <strong>S/{product.price}</strong> x {product.um}
        </h3>
        <div className="product-info-data-counter">
          <span>Cantidad:</span>
          <ProductCounter counter={counter} setCounter={setCounter} />
          <span>{product.um}</span>
        </div>
        <button onClick={handleAddToCart} className="product-info-data-button">
          Agregar al carrito
        </button>
      </section>
    </div>
  );
};
