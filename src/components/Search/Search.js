import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

import { Button } from '../Button/Button';
import Input from '../Input/Input';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { search } = useLocation();
  const c = queryString.parse(search)?.c || '';

  const handleSubmit = e => {
    e.preventDefault();

    if (c) {
      navigate(
        `/all-products?s=${encodeURIComponent(
          searchTerm
        )}&c=${encodeURIComponent(c)}`
      );
    } else {
      navigate(`/all-products?s=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        defaultValue={searchTerm}
        onChange={e => setSearchTerm(e.currentTarget.value)}
        placeholder="Search"
      />

      <Button>
        <FaSearch />
      </Button>
    </SearchForm>
  );
};

const SearchForm = styled.form`
  display: flex;
  margin-left: auto;
`;

export default Search;
