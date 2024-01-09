import React, { useEffect, useState } from 'react';
import './ImageSlider.css';
import image1 from "../../assets/Mewing1s.jpg";
import image2 from "../../assets/Mewing2s.jpg";
import image3 from "../../assets/Mewing3s.jpg";

const images = [image1, image2, image3];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage % 3) + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`image-slider image-${currentImage}`}>
      <img src={images[currentImage - 1]} alt={`Image ${currentImage}`} />
    </div>
  );
};

export default ImageSlider;
