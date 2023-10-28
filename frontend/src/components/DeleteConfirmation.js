import React, { useState } from 'react';

const DeleteConfirmation = ({ isOpen, onClose, onConfirmDelete, photoId }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleConfirmDelete = () => {
    if (password === '123') {
      onConfirmDelete(photoId);
      onClose();
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    isOpen ? (
      <>
        <div className="overlay"></div>
        <div className={`delete-confirmation-modal ${isOpen ? 'open' : ''}`}>
          <h2>Are you sure you?</h2>
          <div className="modal-content">
            <label>
              Password: <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            </label>
            {error && <p className="error-message">{error}</p>}
            <div className="button-container">
              <button className="cancel" onClick={onClose}>Cancel</button>
              <button className="confirm" onClick={handleConfirmDelete}>Confirm</button>
            </div>
          </div>
        </div>
      </>
    ) : null
  );
};

export default DeleteConfirmation;
