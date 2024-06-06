// src/Toast.tsx
import React, { useState } from 'react';
import './Toast.css';

interface ToastProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Toast: React.FC<ToastProps> = ({ title, message, onConfirm, onCancel }) => {
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  const handleConfirmClick = () => {
    setClickedButton('confirm');
    onConfirm();
  };

  const handleCancelClick = () => {
    setClickedButton('cancel');
    onCancel();
  };

  return (
    <div className="toast">
      <div className="toast-header">
        <span className="toast-icon">⚡</span>
        <strong className="toast-title">{title}</strong>
      </div>
      <div className="toast-body">
        <p className="message">{message}</p>
        <div className="toast-buttons">
          <button
            className={clickedButton === 'confirm' ? 'button-clicked' : 'button-unclicked'}
            onClick={handleConfirmClick}
          >
            Confirm
          </button>
          <button
            className={clickedButton === 'cancel' ? 'button-clicked' : 'button-unclicked'}
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
