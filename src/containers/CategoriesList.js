import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory } from '../redux/actions/productsActions';
import { closeCategoriesBox } from '../redux/actions/uiActions';

export const CategoriesList = () => {
  const dispatch = useDispatch();

  const categoriesBox = useRef();

  const { categories, activeCategory } = useSelector((state) => state.products);
  const { categoriesBoxIsOpen } = useSelector((state) => state.ui);

  useEffect(() => {
    if (categoriesBoxIsOpen) {
      categoriesBox.current.classList.add('active');
    } else {
      categoriesBox.current.classList.remove('active');
    }
  }, [categoriesBoxIsOpen]);

  const capitalize = (text) => {
    const capitalLetter = text.split('')[0].toUpperCase();
    return text.replace(text.split('')[0], capitalLetter);
  };

  const handleActiveCategoryClassName = (category) => {
    if (category === activeCategory) {
      return 'active-category';
    }
  };

  const handleSetActiveCategory = (category) => {
    dispatch(setActiveCategory(category));
    dispatch(closeCategoriesBox());
  };

  return (
    <div ref={categoriesBox} className="categories-list">
      <h1>Categorías</h1>
      <hr />
      <span
        onClick={() => handleSetActiveCategory('all')}
        className={handleActiveCategoryClassName('all')}
      >
        Todas
      </span>
      {categories.map((category) => {
        return (
          <span
            onClick={() => handleSetActiveCategory(category.name)}
            className={handleActiveCategoryClassName(category.name)}
            key={category.name}
          >
            {capitalize(category.name)}
          </span>
        );
      })}
    </div>
  );
};
