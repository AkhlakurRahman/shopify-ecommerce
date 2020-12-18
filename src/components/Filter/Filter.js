import React from 'react';
import styled from 'styled-components';
import FilterByTitle from './FilterByTitle/FilterByTitle';

const Filter = ({ collections }) => {
  return (
    <FilterStyles>
      <strong>Categories</strong>

      {collections.map(collection => (
        <FilterByTitle
          key={collection.shopifyId}
          shopifyId={collection.shopifyId}
          title={collection.title}
        />
      ))}
    </FilterStyles>
  );
};

const FilterStyles = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
`;

export default Filter;
