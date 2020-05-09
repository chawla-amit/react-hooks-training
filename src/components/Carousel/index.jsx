import React, { useState, useEffect } from "react";
import usePersistentState from "../../hooks/use-persistent-state";

const Carousel = ({ autoplay = 0, images = [] }) => {
  const [activeSlide, setActiveSlide] = usePersistentState(0, "activeSlide");

  const calculateNextIndex = (currentIndex, slidesLength, option = 1) => {
    if (option === -1) {
      return currentIndex <= 0 ? slidesLength - 1 : currentIndex - 1;
    } else {
      return currentIndex >= images.length - 1 ? 0 : currentIndex + 1;
    }
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setActiveSlide(activeState => {
          return calculateNextIndex(activeState, images.length, autoplay);
        });
      }, 1500);

      return () => {
        clearInterval(interval);
      };
    }
  }, [images, autoplay]);

  const moveToPreviousSlide = () => {
    const previousSlide = calculateNextIndex(activeSlide, images.length, -1);
    setActiveSlide(previousSlide);
  };

  const moveToNextSlide = () => {
    const nextSlide = calculateNextIndex(activeSlide, images.length, 1);
    setActiveSlide(nextSlide);
  };

  return images.length ? (
    <div class="carousel slide">
      <button className="carousel-control-prev" onClick={moveToPreviousSlide}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <div class="carousel-inner">
        {images.map(({ id, author, download_url }, index) => {
          const activeClass = activeSlide === index ? "active" : "";
          return (
            <div key={id} className={`carousel-item ${activeClass}`}>
              <img
                src={`https://picsum.photos/id/${id}/1440/600`}
                className={`d-block w-100 ${activeClass}`}
                alt={author}
              />
            </div>
          );
        })}
      </div>
      <ol class="carousel-indicators">
        {images.map(({ id }, index) => (
          <li key={id} className={activeSlide === index ? "active" : ""}></li>
        ))}
      </ol>
      <button className="carousel-control-next" onClick={moveToNextSlide}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  ) : null;
};

export default Carousel;
