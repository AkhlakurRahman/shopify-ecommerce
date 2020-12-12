import React, { useEffect, useState } from 'react';
import Image from 'gatsby-image';

import ImageGalleryWrapper from './ImageGalleryStyles';
import ImageThumbnail from './ImageThumbnail/ImageThumbnail';

const ImageGallery = ({ images, selectedVariantImageId }) => {
  const [activeImageThumbnail, setActiveImageThumbnail] = useState(
    images.find(image => image.id === selectedVariantImageId) || images[0]
  );

  useEffect(() => {
    setActiveImageThumbnail(
      images.find(image => image.id === selectedVariantImageId) || images[0]
    );
  }, [images, selectedVariantImageId, setActiveImageThumbnail]);

  const handleClick = image => {
    setActiveImageThumbnail(image);
  };

  return (
    <ImageGalleryWrapper>
      <div>
        <Image fluid={activeImageThumbnail.localFile.childImageSharp.fluid} />
      </div>

      <div>
        {images.map(image => (
          <ImageThumbnail
            key={image.id}
            image={image}
            isActive={activeImageThumbnail.id === image.id}
            onImageClick={handleClick}
          />
        ))}
      </div>
    </ImageGalleryWrapper>
  );
};

export default ImageGallery;
