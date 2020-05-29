import React, { useEffect } from "react";
import usePersistentState from "../../hooks/use-persistent-state";
/*
    images url - https://picsum.photos/v2/list?limit=10
    https://picsum.photos/id/${id}/1440/600
    add previous/next/autoplay
    persist previous/next/autoplay using custom hook
*/
const Carousel = ({ images, autoplay }) => {
  const [activeSlide, setActiveSlide] = usePersistentState(0, "activeSlide");

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoplay) {
        setActiveSlide(active => {
          if (autoplay === 1) {
            const nextSlide = active >= images.length - 1 ? 0 : active + 1;
            return nextSlide;
          } else {
            const prevSlide = active <= 0 ? images.length - 1 : active - 1;
            return prevSlide;
          }
        });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [autoplay]);

  const onHandlePreviousClick = () => {
    const prevSlide = activeSlide <= 0 ? images.length - 1 : activeSlide - 1;
    setActiveSlide(prevSlide);
  };

  const onHandleNextClick = () => {
    const nextSlide = activeSlide >= images.length - 1 ? 0 : activeSlide + 1;
    setActiveSlide(nextSlide);
  };

  return (
    <div class="carousel slide">
      <button className="carousel-control-prev" onClick={onHandlePreviousClick}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <div class="carousel-inner">
        {images &&
          images.map((image, index) => {
            const activeClassName = activeSlide === index ? "active" : "";
            return (
              <div className={`carousel-item ${activeClassName}`}>
                <img
                  src={`https://picsum.photos/id/${image.id}/1440/600`}
                  className={`d-block w-100 ${activeClassName}`}
                  alt="Lorem Ipsum"
                />
              </div>
            );
          })}
      </div>
      <ol class="carousel-indicators">
        {images &&
          images.map((image, index) => {
            const activeClassName = activeSlide === index ? "active" : "";
            return <li className={activeClassName}></li>;
          })}
      </ol>
      <button className="carousel-control-next" onClick={onHandleNextClick}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
