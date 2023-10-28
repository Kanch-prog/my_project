import React from 'react';
import '../styles.css';

const Header = ({ onAddPhotoClick }) => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="/images/my_unsplash_logo.svg" alt="Unsplash Logo" />
      </div>
      <div className="header-search">
        
        <i className="fas fa-search"></i>
        <input type="text" placeholder="search by name" />
        
      </div>
      <button className="header-add-photo"  onClick={onAddPhotoClick}>Add a Photo</button>
    </header>
  );
};

export default Header;