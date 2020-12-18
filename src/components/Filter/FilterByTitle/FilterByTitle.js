import React from 'react';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

import styled from 'styled-components';
import Checkbox from '../../Checkbox/Checkbox';

const FilterByTitle = ({ title, shopifyId }) => {
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const collectionIds = qs.c?.split(',').filter(c => !!c) || [];
  const checked = collectionIds?.find(cId => cId === shopifyId);

  const onFilterTileHandler = () => {
    const navigateTo = '/all-products';

    let newIds = [];

    if (checked) {
      newIds = collectionIds
        .filter(cId => cId !== shopifyId)
        .map(cId => encodeURIComponent(cId));
    } else {
      collectionIds.push(shopifyId);
      newIds = collectionIds.map(cId => encodeURIComponent(cId));
    }

    if (newIds.length) {
      navigate(`${navigateTo}?c=${newIds.join(',')}`);
    } else {
      navigate(`${navigateTo}`);
    }
  };

  return (
    <FilterTitleStyles onClick={onFilterTileHandler}>
      <Checkbox checked={checked} />
      <div>{title}</div>
    </FilterTitleStyles>
  );
};

const FilterTitleStyles = styled.div`
  display: flex;
  margin-top: 10px;
  cursor: pointer;

  > div:last-child {
    padding-left: 8px;
  }
`;

export default FilterByTitle;
