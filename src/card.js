import React, { useState } from 'react';

const Card = ({className, category, classCount, image, imageTxt, key, instructor}) => {

  return (
      <section className="card-container">
        <div className="card" key={key}>
          <img className="card-image" src={image} alt={imageTxt} />
          <p className="card-text">{category}</p>
        </div>
        <div className="card-content">
          <p>{className}</p>
          <p className="card-content-instructor">{instructor} &#8226; {category}</p>
        </div>
      </section>
    )
}

export default Card;
