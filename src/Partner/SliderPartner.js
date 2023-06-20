import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState, useEffect } from "react";
import "../styles/home/Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(6);
  useEffect(() => {
    if (currentSlide === totalSlides - 1) {
      setTimeout(() => setCurrentSlide(0), 3000);
    }
  }, [currentSlide, totalSlides]);
  return (
    <div style={{backgroundColor:"red"}}>

    <Carousel
      className="slider"
      autoPlay={true}
      interval={3000}
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      onChange={(index) => setCurrentSlide(index)}
      selectedItem={currentSlide}
      onClickItem={(index) => setCurrentSlide(index)}
      onInit={() => setTotalSlides(6)}
    >
      <div>
        <h2 className="slider-h2">950+</h2>
        <p className="slider-p">investors</p>
      </div>
      <div>
        <h2 className='slider-h2'>40,000+</h2>
        <p className="slider-p">attendees</p>
      </div>
      <div>
        <h2 className='slider-h2'>140+</h2>
        <p className="slider-p">countries</p>
      </div>
      <div>
        <h2 className='slider-h2'>1,250+</h2>
        <p className="slider-p">journalists</p>
      </div>
      <div>
        <h2 className='slider-h2'>2,000+</h2>
        <p className="slider-p">startups</p>
      </div>
      <div>
        <h2 className='slider-h2'>250+</h2>
        <p className="slider-p">partners</p>
      </div>
    </Carousel>
    </div>

  );
};

export default Slider;
