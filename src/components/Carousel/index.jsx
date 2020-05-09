import React from "react";
/*
    images url - https://picsum.photos/v2/list?limit=10
    https://picsum.photos/id/${id}/1440/600
    add previous/next/autoplay
    persist previous/next/autoplay using custom hook
*/
const Carousel = () => {
  return (
    <div class="carousel slide">
      <button className="carousel-control-prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <div class="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://picsum.photos/id/200/1440/600"
            className={`d-block w-100 active`}
            alt="Lorem Ipsum"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://picsum.photos/id/200/1440/600"
            className={`d-block w-100`}
            alt="Lorem Ipsum"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://picsum.photos/id/200/1440/600"
            className={`d-block w-100`}
            alt="Lorem Ipsum"
          />
        </div>
      </div>
      <ol class="carousel-indicators">
        <li className="active"></li>
        <li className=""></li>
        <li className=""></li>
      </ol>
      <button className="carousel-control-next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
