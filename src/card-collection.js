import React, { useState } from 'react';

const CardCollection = ({id, category, collectionTitle, title, image, imageTxt}) => {
  return (
      <section className="collection-card-container">
        <div className="collection-card" key={id}>
          <img className="collection-image" src={image} alt={imageTxt}/>
          <p className="collection-title">{collectionTitle}</p>
          <p className="collection-text">{title}</p>
        </div>
      </section>
    )
}

export default CardCollection;
