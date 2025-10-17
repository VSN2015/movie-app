import React, { useEffect, useState } from 'react';

const ImageComponent = ({ src, width, height, className, alt }) => {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=Loading`
  );

  useEffect(() => {
    const image = new Image();
    image.src = src
    image.onload = () => {
      setCurrentSrc(src)
    };

    return () => {
      image.onload = null;
    }
  }, [src]);

  return (
    <img
      className={currentSrc === src ? className : `${className} blur-xs`}
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default ImageComponent;
