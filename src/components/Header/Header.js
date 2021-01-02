import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Search from '../Search/Search';
import Cart from './Cart/Cart';
import Logo from '../Logo/Logo';

const HeaderWrapper = styled.header`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <Search />
      <Cart />
    </HeaderWrapper>
  );
};

export default Header;
