import React, { useState } from 'react'; 

import Masonry from 'react-masonry-css';
import DeleteConfirmation from './DeleteConfirmation';

const breakpointColumnsObj = {
  default: 3, 
  1100: 2,
  700: 1,
};

const MasonryGrid = ({ photos, onDeletePhoto }) => {
  console.log('Current photos:', photos);

  const [selectedPhotoId, setSelectedPhotoId] = useState(null);

  const openDeleteConfirmation = (photoId) => {
    setSelectedPhotoId(photoId);
  };

  const closeDeleteConfirmation = () => {
    setSelectedPhotoId(null);
  };

  const handleDeleteConfirmation = () => {
    onDeletePhoto(selectedPhotoId);
    closeDeleteConfirmation();
  };

  return (
    <div> 
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photos.map((photo) => (
          <div key={photo.id} className="my-masonry-grid_item">
            <img src={photo.url} alt={photo.id} rel="noreferrer" />
            <button className="delete-button" onClick={() => openDeleteConfirmation(photo.id)} >
              Delete
            </button>
          </div>
        ))}
      </Masonry>
      {selectedPhotoId !== null && (
        <DeleteConfirmation
          isOpen={true}
          onClose={closeDeleteConfirmation}
          onConfirmDelete={handleDeleteConfirmation}
        />
      )}
    </div>
  );
};

export default MasonryGrid;
