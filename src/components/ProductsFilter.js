import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveFilter } from '../redux/actions/productsActions';

export const ProductsFilter = () => {
  const dispatch = useDispatch();

  const { activeFilter } = useSelector((state) => state.products);

  const filter = useRef();
  const filterOptions = useRef();

  const filterEventListener = (e) => {
    if (!e.target.classList.value.includes('filter-valid-click')) {
      closeFilterOptions();
    }
  };

  const showFilterOptions = () => {
    filterOptions.current.classList.toggle('active');
    document.addEventListener('click', filterEventListener);
  };

  const closeFilterOptions = () => {
    filterOptions.current.classList.remove('active');
    document.removeEventListener('click', filterEventListener);
  };

  const handleSetActiveFilter = (e) => {
    dispatch(setActiveFilter(e.target.innerHTML));
  };

  return (
    <div className="products-filter">
      <strong>Ordenar por:</strong>
      <div
        ref={filter}
        onClick={showFilterOptions}
        className="products-filter-box filter-valid-click"
      >
        <span className="filter-valid-click">{activeFilter}</span>
        <div ref={filterOptions} className="products-filter-box-options">
          <span onClick={handleSetActiveFilter} className="filter-valid-click">
            Relevancia
          </span>
          <span onClick={handleSetActiveFilter} className="filter-valid-click">
            Precio más bajo
          </span>
          <span onClick={handleSetActiveFilter} className="filter-valid-click">
            Precio más alto
          </span>
        </div>
      </div>
    </div>
  );
};
