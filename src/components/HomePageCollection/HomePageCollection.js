import React from 'react';
import styled from 'styled-components';
import CollectionTile from './CollectionTile/CollectionTile';

const HomePageCollection = ({ collections }) => {
  const saleCollection = collections.find(
    collection => collection.title === 'SALE'
  );

  const remainingCollection = collections.filter(
    collection => collection.title !== 'SALE'
  );

  return (
    <div>
      {!!saleCollection && (
        <CollectionTile
          sale
          destination={`/all-products?c=${encodeURIComponent(
            saleCollection.shopifyId
          )}`}
          title={saleCollection.title}
          description={saleCollection.description}
          image={saleCollection.image?.localFile.childImageSharp.fluid}
        />
      )}

      <RemainingCollectionStyle>
        {remainingCollection.map(collection => (
          <CollectionTile
            title={collection.title}
            destination={`/all-products?c=${encodeURIComponent(
              collection.shopifyId
            )}`}
            description={collection.description}
            image={collection.image?.localFile.childImageSharp.fluid}
            key={collection.shopifyId}
          />
        ))}
      </RemainingCollectionStyle>
    </div>
  );
};

const RemainingCollectionStyle = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    flex-grow: 1;
    min-width: 100%;

    @media (min-width: 768px) {
      min-width: 50%;
    }

    @media (min-width: 1024px) {
      min-width: 33%;
    }
  }
`;

export default HomePageCollection;
