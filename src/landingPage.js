import React from 'react';
import Card from './card.js';

const LandingPage = ({data}) => {
  return (
    <div className="container">
      {data.map((item) => {
        return (
          <Card
            className={item.className}
            category={item.category}
            classCount={item.classCount}
            image={item.image}
            imageTxt={item.imageTxt}
          />
        )
      })}
    </div>
  )
}

export default LandingPage;
