import React, { useState } from 'react';
import Header from './components/Header';
import MasonryGrid from './components/MasonryGrid'; 
import NewPhotoModal from './components/NewPhotoModal';

function App() {
  const initialPhotos = [
    {
      id: 1,
      url: '/images/pic1.jpg',
      label: 'Photo 1',
    },
    {
      id: 2,
      url: '/images/pic2.jpg',
      label: 'Photo 2',
    },
    {
      id: 3,
      url: '/images/pic3.jpg',
      label: 'Photo 3',
    },
    {
      id: 4,
      url: '/images/pic4.jpg',
      label: 'Photo 4',
    },
    {
      id: 5,
      url: '/images/pic5.jpg',
      label: 'Photo 5',
    },
    {
      id: 6,
      url: '/images/pic6.jpg',
      label: 'Photo 6',
    },
    {
      id: 7,
      url: '/images/pic7.jpg',
      label: 'Photo 7',
    },
    {
      id: 8,
      url: '/images/pic8.jpg',
      label: 'Photo 8',
    },
    {
      id: 9,
      url: '/images/pic9.jpg',
      label: 'Photo 9',
    },
  ];

  const [photos, setPhotos] = useState(initialPhotos);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const addPhoto = (newPhoto) => {
    setPhotos([newPhoto, ...photos]);
  };

  const deletePhoto = (photoId) => {
    // Filter out the photo with the specified id and update the state.
    setPhotos(photos.filter((photo) => photo.id !== photoId));
  };

  
  return (
    <div className="App">
      <Header onAddPhotoClick={openModal} />
      <NewPhotoModal isOpen={isModalOpen} onClose={closeModal} onAddPhoto={addPhoto} />
      <MasonryGrid photos={photos} onDeletePhoto={deletePhoto} />
    </div>
  );
}

export default App;
