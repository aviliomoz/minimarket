import { types } from '../types';

export const closeLateralBox = () => {
  return {
    type: types.uiCloseLateralBox,
  };
};

export const openLateralBox = () => {
  return {
    type: types.uiOpenLateralBox,
  };
};

export const openCategoriesBox = () => {
  return {
    type: types.uiOpenCategoriesBox,
  };
};

export const closeCategoriesBox = () => {
  return {
    type: types.uiCloseCategoriesBox,
  };
};
