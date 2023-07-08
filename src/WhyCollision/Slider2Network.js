import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState, useEffect } from "react";
import "../styles/home/Slider.css";
import magic from '../images/home/magic-leap.avif'
import vogue from '../images/home/vogue-white-logo.png'
import uber from '../images/home/uber-1.svg'
import slack from '../images/home/slack-logo-white-2020.png'
import siemens from '../images/home/siemens-logo-white.png'
import shopify from '../images/home/shopify-logo-white.png'
import sherpa from '../images/home/Sherpa-logo-white.png'
import rogers from '../images/home/rogers-logo-white.png'
import mercedes from '../images/home/Mercedes-benz-white-logo-resized.svg'

const Slider2Network = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(6);
  useEffect(() => {
    if (currentSlide === totalSlides - 1) {
      setTimeout(() => setCurrentSlide(0), 3000);
    }
  }, [currentSlide, totalSlides]);
  return (
    <div style={{backgroundColor:"blue"}} >
      <h2 style={{margin: "1em",color:"black"}}> NETWORKING AT COLLISION  </h2>

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
      <img  style={{ width: "200px" }}src={magic}/>
      
      </div>
      <div>
      <img  style={{ width: "200px" }}src={vogue}/>
      
      </div>
      <div>
      <img  style={{ width: "200px" }}src={uber}/>
      
      </div>
      <div>
      <img  style={{ width: "200px" }}src={slack}/>
      
      </div>
      <div>
      <img  style={{ width: "200px" }} src={siemens}/>
      
      </div>
      <div>
      <img  style={{ width: "200px" }}src={shopify}/>
      
      </div>
      <div>
      <img  style={{ width: "200px" }}src={sherpa}/>
      
      </div>
      <div>
      <img  style={{ width: "200px" }}src={rogers}/>
      
      </div>
<div>
        <img  style={{ width: "200px" }}src={mercedes}/>
      
      </div>
     
    </Carousel>
    </div>

  );
};

export default Slider2Network;
