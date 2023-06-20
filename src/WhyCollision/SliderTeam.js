import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState, useEffect } from "react";
import "../styles/home/Slider.css";

const SliderTeam = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(6);
  useEffect(() => {
    if (currentSlide === totalSlides - 1) {
      setTimeout(() => setCurrentSlide(0), 3000);
    }
  }, [currentSlide, totalSlides]);
  return (
    <div style={{ backgroundColor: "red" }}>
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
          <p className="slider-h2-qa">
            "The community feel was nice – there was a feeling that I was with a
            large group of people who were interested in similar topics."
          </p>
        
          <p className="slider-p-qa">      Sarah Bovagnet
            <br />
            Director, CodeNode</p>
        </div>
        <div>
          <p className="slider-h2-qa">"It allowed us to do things that we might not have had the opportunity to do otherwise."</p>
          <p className="slider-p-qa">Tracy Barber <br/> Partnerships &amp; Development, Fields CQAM</p>
        </div>
        <div>
          <p className="slider-h2-qa">"It's fantastic for me focusing on emerging technologies. Great speakers, great interactions with booths."</p>
          <p className="slider-p-qa">Talioa Watson <br/> Marketing Strategist, Go Professional Group</p>
        </div>
        <div>
          <p className="slider-h2-qa">"Collision had a lot of cross-collaboration between different specializations which is great to see."</p>
          <p className="slider-p-qa">David CHang <br/> Director of Engineering, @toolbx</p>
        </div>
        <div>
          <p className="slider-h2-qa">
          "It’s not just about the technology – it’s about the culture and environment."          </p>
          <p className="slider-p-qa">Thomas Capone <br/> CEO, TAC Holdings</p>
        </div>
      </Carousel>
    </div>
  );
};

export default SliderTeam;
