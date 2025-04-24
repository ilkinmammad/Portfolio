import React, { useEffect } from 'react';
import style from './toast.module.css'; 

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); 
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [message, onClose]);

  return (
    <div className={style.toast}>
      {message}
    </div>
  );
};

export default Toast;
