
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, {useState,useEffect} from 'react';


const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(6);
    useEffect(() => {
      if (currentSlide === totalSlides - 1) {
        setTimeout(() => setCurrentSlide(0), 3000);
      }
    }, [currentSlide, totalSlides]);
return (
<Carousel
    autoPlay={true}
    interval={3000}
    showArrows={true}
    showStatus={true}
    showThumbs={true}
    showIndicators={true}
    onChange={(index) => setCurrentSlide(index)}
    selectedItem={currentSlide}
    onClickItem={(index) => setCurrentSlide(index)}
    onInit={() => setTotalSlides(6)}
  >
    <div><h2>950+</h2><p>investors</p></div>
    <div><h2>40,000+</h2><p>attendees</p></div>
    <div><h2>140+</h2><p>countries</p></div>
    <div><h2>1,250+</h2><p>journalists</p></div>
    <div><h2>2,000+</h2><p>startups</p></div>
    <div><h2>250+</h2><p>partners</p></div>
   
  </Carousel>)
}

export default Slider