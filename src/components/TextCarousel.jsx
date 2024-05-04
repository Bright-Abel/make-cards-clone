import { useState, useEffect } from 'react';

const TextCarousel = ({ textArray, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(interval, textArray);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [textArray.length, interval]);

  return (
    <>
      {textArray.map((text, index) => (
        <span
          key={index}
          className={`absolute  transition-opacity duration-500 ease-in-out ${
            index === currentIndex ? 'opacity-1' : ''
          }`}
        >
          {text}
        </span>
      ))}
    </>
  );
};

export default TextCarousel;
