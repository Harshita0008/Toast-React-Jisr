// src/index.tsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Toast from './components/Toast';
import './index.css';

const App: React.FC = () => {
  const [showToast, setShowToast] = useState(false);

  const handleConfirm = () => {
    console.log('Confirmed!');
    setShowToast(false);
  };

  const handleCancel = () => {
    console.log('Cancelled!');
    setShowToast(false);
  };

  return (
    <div className="app">
      <h1>Toast</h1>
      <p>Notification message or a piece of information displayed above the page content.</p>
      <div className="button-container">
        <button onClick={() => setShowToast(true)}>Click me</button>
      </div>
      {showToast && (
        <div className="toast-container">
          <Toast
            title="Toast title"
            message="Long details go here after the title, long details go here after the title"
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
        </div>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
