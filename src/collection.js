import React from 'react';
import CardCollection from './card-collection.js';

class Collection extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="collection-container">
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
    )
  }
}

export default Collection;
