import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState, useEffect } from "react";
import "../styles/home/Slider.css";
import vogue from '../images/home/vogue-white-logo.png'
import cnbc from '../images/home/cnbc.png'
import bloomberg from '../images/Media/bloomberg.png'
import businessInsider from '../images/Media/business_insider.png'
import bbc from '../images/Media/media_bbc-1.png'
import forbes from '../images/Media/media_forbes-1.png'
import guardian from '../images/Media/media_guardian-1.png'
import lemonade from '../images/Media/media_lemonde.png'
import monocle from '../images/Media/media_monocle.png'


const Slider2Media = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(6);
  useEffect(() => {
    if (currentSlide === totalSlides - 1) {
      setTimeout(() => setCurrentSlide(0), 3000);
    }
  }, [currentSlide, totalSlides]);
  return (
    <div style={{backgroundColor:"black"}} >
      <h2 style={{paddingTop:"2em", margin: "1em",color:"white"}}>THE WORLD'S LARGEST MEDIA COMPANIES ATTEND OUR EVENTS  </h2>

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
      <img  src={cnbc}/>
      
      </div>
      <div>
      <img style={{ width: "200px" }}   src={vogue}/>
      
      </div>
      <div>
      <img style={{ width: "200px" }}  src={bloomberg}/>
      
      </div>
      <div>
      <img style={{ width: "200px" }}  src={businessInsider}/>
      
      </div>
      <div>
      <img style={{ width: "200px" }}  src={bbc}/>
      
      </div>
      <div>
      <img  style={{ width: "200px" }} src={forbes}/>
      
      </div>
      <div>
      <img style={{ width: "200px" }}  src={guardian}/>
      
      </div>
      <div>
      <img style={{ width: "200px" }}  src={lemonade}/>
      
      </div>
<div>
        <img style={{ width: "200px" }}   src={monocle}/>
      
      </div>
     
    </Carousel>
    </div>

  );
};

export default Slider2Media;
