import React, { useEffect, useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { CartProduct } from './CartProduct';

export const Cart = () => {
  const { cart } = useSelector((state) => state.products);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const sumList = cart.map((product) => {
      return product.price * product.quantity;
    });

    let sum = 0;

    sumList.map((e) => (sum = sum + e));

    setTotal(sum);
  }, [cart]);

  return (
    <div className="cart">
      <section className="cart-header">
        <h1>Carrito</h1>
      </section>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <MdShoppingCart />
          <span>Vacío</span>
        </div>
      ) : (
        <React.Fragment>
          <section className="cart-products">
            {cart.map((product) => {
              return <CartProduct key={product.id} product={product} />;
            })}
          </section>
          <section className="cart-options">
            <div className="cart-options-total">
              <span>Total: </span>
              <strong>S/{total.toFixed(2)}</strong>
            </div>
            <div className="cart-options-pay">
              <button>Pagar</button>
            </div>
          </section>
        </React.Fragment>
      )}
    </div>
  );
};
