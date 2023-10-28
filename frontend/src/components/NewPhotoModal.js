import React, { useState } from 'react';
import axios from 'axios';

const NewPhotoModal = ({ isOpen, onClose, onAddPhoto }) => {
  const [label, setLabel] = useState('');
  const [url, setUrl] = useState('');

  const handleAddPhoto = async () => {
    try {
      const encodedImageUrl = encodeURIComponent(url);
      const fetchUrl = `http://localhost:3001/fetch-external-photos?url=${encodedImageUrl}`;

      const response = await axios.get(fetchUrl, {
        responseType: 'arraybuffer',
      });
      const blobUrl = URL.createObjectURL(new Blob([response.data]));
      const newPhoto = { label, url: blobUrl };
      onAddPhoto(newPhoto);
      setLabel('');
      setUrl('');
      onClose();
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <>
    {isOpen && <div className="overlay"></div>}
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <h2>Add a new photo</h2>
      <div className="modal-content">        
        <label>
          Label: <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} placeholder='Suspendisse elit massa' />
        </label>
        <br />
        <label>
          Photo URL: <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder='https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r...'/>
        </label>
        <div className="button-container">
          <button className="cancel" onClick={onClose}>Cancel</button>
          <button className="submit" onClick={handleAddPhoto}>Submit</button>          
        </div>        
      </div>
    </div>
    </>    
  );
};

export default NewPhotoModal;