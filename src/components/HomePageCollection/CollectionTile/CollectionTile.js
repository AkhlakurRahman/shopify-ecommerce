import React from 'react';

const CollectionTile = ({ title, description, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default CollectionTile;
