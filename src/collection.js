import React from 'react';
import CardCollection from './card-collection.js';

class Collection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="collection-container">
      <h2>View All Collections</h2>
      <div className="collection-cards">
        {this.props.collection.map((item) => {
          return (
            <CardCollection
              key={item.id}
              category={item.category}
              collectionTitle={item.collectionTitle}
              title={item.title}
              image={item.image}
              imageTxt={item.imageTxt}
            />
          )
        })}
        </div>
      </div>
    )
  }
}

export default Collection;
