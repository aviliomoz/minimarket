import React from 'react';
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { closeLateralBox } from '../redux/actions/uiActions';

export const LateralBox = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <div className="lateral-box">
      <button
        className="lateral-box-close"
        onClick={() => dispatch(closeLateralBox())}
      >
        <MdClose />
      </button>
      {children}
    </div>
  );
};
