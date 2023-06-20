import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState, useEffect } from "react";
import "../styles/home/Slider.css";

const Slider2Boss = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(6);
  useEffect(() => {
    if (currentSlide === totalSlides - 1) {
      setTimeout(() => setCurrentSlide(0), 3000);
    }
  }, [currentSlide, totalSlides]);
  return (
    <div style={{backgroundColor:"black"}}>

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

      <div   
>
        <p className="slider-h2-qa">“The stunning future of tech conferences.”</p>
        <p className="slider-p-qa">Digital trends</p>
      </div>
      <div>
        <p className='slider-h2-qa'>“The world’s best speakers.”
</p>
        <p className="slider-p-qa">Inc. Magazine</p>
      </div>
      <div>
        <p className='slider-h2-qa'>"Coachelaa for geeks"</p>
        <p className="slider-p-qa">BlogTO</p>
      </div>
      <div>
        <p className='slider-h2-qa'>"Everyone is at collision"</p>
        <p className="slider-p-qa">Fininancial Post</p>
      </div>
      <div>
        <p className='slider-h2-qa'>""It may be the  world’s most millenial meetup</p>
        <p className="slider-p-qa">Wall Street Journal</p>
      </div>
    

    </Carousel>
    </div>

  );
};

export default Slider2Boss;
