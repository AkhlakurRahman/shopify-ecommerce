import React from 'react';
import { FaCheck } from 'react-icons/fa';
import styled from 'styled-components';

const Checkbox = ({ checked }) => {
  return (
    <CheckboxStyles checked={checked}>
      <FaCheck className="fa-check" />
    </CheckboxStyles>
  );
};

const CheckboxStyles = styled.div`
  height: 20px;
  width: 20px;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  background: ${props => (props.checked ? 'black' : 'none')};

  > svg {
    color: white;
    line-height: 1;
    margin: auto;
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;

export default Checkbox;
