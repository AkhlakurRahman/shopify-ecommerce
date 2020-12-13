import React, { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styled from 'styled-components';

import CartContext from '../../context/CartContext';

const DeleteIconButton = ({ lineItemId }) => {
  const { removeLineItem } = useContext(CartContext);

  const handleClick = () => {
    removeLineItem(lineItemId);
  };

  return (
    <Icon>
      <FaTrashAlt onClick={handleClick} />
    </Icon>
  );
};

const Icon = styled.div`
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

export default DeleteIconButton;
