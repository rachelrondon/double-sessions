import React, { useState } from 'react';

const Card = ({className, category, classCount, image, imageTxt, key}) => {

  return (
      <section className="card-container">
        <div className="card" key={key}>
          <img className="card-image" src={image} alt={imageTxt} />
          <p className="card-text">{category}</p>
        </div>
        <div className="card-content">
          <p>This is the count: {classCount}</p>
          <p>This is the category: {category}</p>
          <p>This is the name of the class: {className}</p>
        </div>
      </section>
    )
}

export default Card;
