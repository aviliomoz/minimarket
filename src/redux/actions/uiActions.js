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
