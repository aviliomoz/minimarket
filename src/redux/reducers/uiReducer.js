import { types } from '../types';

const initialState = {
  lateralBoxIsOpen: false,
  categoriesBoxIsOpen: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenLateralBox:
      return {
        ...state,
        lateralBoxIsOpen: true,
      };
    case types.uiCloseLateralBox:
      return {
        ...state,
        lateralBoxIsOpen: false,
      };
    case types.uiOpenCategoriesBox:
      return {
        ...state,
        categoriesBoxIsOpen: true,
      };
    case types.uiCloseCategoriesBox:
      return {
        ...state,
        categoriesBoxIsOpen: false,
      };

    default:
      return state;
  }
};
