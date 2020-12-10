import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';

const ImageThumbnailWrapper = styled.div`
  cursor: pointer;
  border: 2px solid ${props => (props.isActive ? '#c7ac85' : '#eee')};
`;

const ImageThumbnail = ({ isActive, onImageClick, image }) => {
  const handleImageClick = () => {
    onImageClick(image);
  };

  return (
    <ImageThumbnailWrapper onClick={handleImageClick} isActive={isActive}>
      <Image fluid={image.localFile.childImageSharp.fluid} />
    </ImageThumbnailWrapper>
  );
};

export default ImageThumbnail;
