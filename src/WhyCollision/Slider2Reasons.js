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

const Slider2Reasons = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(6);
  useEffect(() => {
    if (currentSlide === totalSlides - 1) {
      setTimeout(() => setCurrentSlide(0), 3000);
    }
  }, [currentSlide, totalSlides]);
  return (
    <div style={{backgroundColor:"blue"}} >
      <h2 style={{margin: "1em",color:"white", backgroundColor:"blue"}}> THE WORLD'S LEADING COMPANIES AND   MEDIA ATTEND  OUR EVENTS </h2>

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
      <div style={{marginLeft: "4em",marginBottom: "2em" ,width:"150px", height:"50px"}}>
      <img  src={magic}/>
      
      </div>
      <div style={{marginLeft: "4em", marginBottom: "2em" ,width:"150px", height:"50px"}}>
      <img  src={vogue}/>
      
      </div>
      <div style={{marginLeft: "4em", marginBottom: "2em" ,width:"150px", height:"50px"}}>
      <img  src={uber}/>
      
      </div>
      <div style={{marginLeft: "4em", marginBottom: "2em" ,width:"150px", height:"50px"}}>
      <img  src={slack}/>
      
      </div>
      <div style={{marginLeft: "4em", marginBottom: "2em" ,width:"150px", height:"50px"}}>
      <img  src={siemens}/>
      
      </div>
      <div style={{marginLeft: "4em", marginBottom: "2em" ,width:"150px", height:"50px"}}>
      <img  src={shopify}/>
      
      </div>
      <div style={{marginLeft: "4em", marginBottom: "2em" ,width:"150px", height:"50px"}}>
      <img  src={sherpa}/>
      
      </div>
      <div style={{marginLeft: "4em", marginBottom: "2em" ,width:"150px", height:"50px"}}>
      <img  src={rogers}/>
      
      </div>
      <div style={{marginLeft: "4em", marginBottom: "2em" ,width:"150px", height:"50px"}}>
      <img  src={mercedes}/>
      
      </div>
     
    </Carousel>
    </div>

  );
};

export default Slider2Reasons;
