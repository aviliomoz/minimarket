import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteProductInCart } from '../redux/actions/productsActions';

export const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-product">
      <i
        onClick={() => dispatch(deleteProductInCart(product))}
        className="cart-product-delete"
      >
        <MdDelete />
      </i>
      <section className="cart-product-image">
        <img src={product.image} alt={product.name} />
      </section>
      <section className="cart-product-info">
        <h2>{product.name}</h2>
        <strong>
          S/{product.price} x {product.um}
        </strong>
        <div className="cart-product-info-total">
          <span>Cantidad: {product.quantity}</span>
          <strong>S/{(product.price * product.quantity).toFixed(2)}</strong>
        </div>
      </section>
    </div>
  );
};
