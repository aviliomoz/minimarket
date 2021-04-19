import React from 'react';
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { cleanActiveProduct } from '../redux/actions/productsActions';

export const Modal = ({ children }) => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(cleanActiveProduct());
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <i onClick={handleCloseModal}>
          <MdClose />
        </i>
        {children}
      </div>
    </div>
  );
};
