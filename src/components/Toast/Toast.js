import React from 'react';
import PropTypes from 'prop-types';
import s from './Toast.module.css';
import { createPortal } from 'react-dom';

function Toast({ message }) {
  return createPortal(
    <div className={s.container}>
      <p className={s.message}>{message}</p>
    </div>,
    document.querySelector('#toast'),
  );
}

Toast.propTypes = {
  message: PropTypes.string,
};

export default Toast;
