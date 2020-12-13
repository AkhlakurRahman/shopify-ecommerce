import React from 'react';
import CollectionTile from './CollectionTile/CollectionTile';

const HomePageCollection = ({ collections }) => {
  return (
    <div>
      {collections.map(collection => (
        <CollectionTile
          title={collection.title}
          description={collection.description}
          image={collection.image?.localFile.childImageSharp.image}
          key={collection.shopifyId}
        />
      ))}
    </div>
  );
};

export default HomePageCollection;
