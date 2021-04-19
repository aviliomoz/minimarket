import { types } from '../types';

const initialState = {
  lateralBoxIsOpen: false,
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

    default:
      return state;
  }
};
