import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { LinkStyle } from '../../LinkStyle/LinkStyle';

const CollectionTile = ({ title, description, image, sale, destination }) => {
  return (
    <CollectionTileStyles>
      <BackgroundImage fluid={image} />
      <CollectionTileContentStyle>
        <div>
          <Title sale={sale}>{title}</Title>
          <Description sale={sale}>{description}</Description>
          <LinkStyle to={destination}>Shop now</LinkStyle>
        </div>
      </CollectionTileContentStyle>
    </CollectionTileStyles>
  );
};

const CollectionTileStyles = styled.div`
  height: 300px;
  max-height: 100vh;
  display: flex;
  position: relative;
  margin-bottom: 5px;

  > div {
    flex-grow: 1;
  }
`;

const CollectionTileContentStyle = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;

  > div {
    padding: 20px;

    ${LinkStyle} {
      padding: 10px;
      background: white;
      border: 1px solid black;
      font-weight: bold;
      font-size: 16px;
      text-transform: uppercase;
      text-decoration: none;
      display: inline-block;
      color: black;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: white;
        background: black;
      }
    }
  }
`;

const Title = styled.div`
  padding: 5px 10px;
  margin-bottom: 5px;
  text-transform: uppercase;
  display: inline-block;
  font-size: 40px;
  font-weight: bold;
  border-radius: 10px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.75);
  background: ${props => (props.sale ? 'red' : 'none')};
`;

const Description = styled.div`
  font-size: 20px;
  margin: 10px;
  border-radius: 10px;
  background: ${props => (props.sale ? 'red' : 'none')};
  padding: 5px 10px;
`;

export default CollectionTile;
