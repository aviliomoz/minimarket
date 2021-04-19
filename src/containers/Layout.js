import React, { useEffect } from 'react';
import { MdShoppingCart, MdMenu } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from './Modal';
import {
  getCartProducts,
  getCategories,
  getProducts,
} from '../redux/actions/productsActions';
import { LateralBox } from './LateralBox';
import { openCategoriesBox, openLateralBox } from '../redux/actions/uiActions';
import { ProductInfo } from '../components/ProductInfo';

// Images
import Logo from '../assets/logo.svg';
import { Cart } from '../components/Cart';

export const Layout = ({ children }) => {
  const dispatch = useDispatch();

  const { lateralBoxIsOpen } = useSelector((state) => state.ui);
  const { activeProduct, cart } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
    dispatch(getCartProducts());
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="layout">
      {activeProduct && (
        <Modal>
          <ProductInfo product={activeProduct} />
        </Modal>
      )}

      {lateralBoxIsOpen && (
        <LateralBox>
          <Cart />
        </LateralBox>
      )}

      <header className="layout-header">
        <section>
          <img alt="Logo" src={Logo} className="layout-header-logo" />
          <h1 className="layout-header-title">Mini Market</h1>
        </section>
        <section>
          <i
            onClick={() => dispatch(openLateralBox())}
            className="layout-header-cart"
          >
            {cart.length !== 0 && <span>{cart.length}</span>}
            <MdShoppingCart />
          </i>
          <i
            onClick={() => dispatch(openCategoriesBox())}
            className="layout-header-menu"
          >
            <MdMenu />
          </i>
        </section>
      </header>
      <div className="layout-main">{children}</div>
      <footer className="layout-footer">
        <span>2021 - Mini Market</span>
        <span>
          Proyecto e-commerce desarrollado por:{' '}
          <a href="https://www.avilio.dev">www.avilio.dev</a>
        </span>
      </footer>
    </div>
  );
};
