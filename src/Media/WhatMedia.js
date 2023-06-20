import SliderBoss from "../Attendees/SliderBoss";
import Trusted from "../Bookings/Trusted";
import DownloadSection from "../Home/DownloadSection";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import Hero from "../Home/Hero";
import Section2 from "../Home/Section2";
import Section3 from "../Home/Section3";
import Section4 from "../Home/Section4";
import Section5 from "../Home/Section5";
import Section6 from "../Home/Section6";
import Slider2 from "../Home/Slider2";
import Speaker2 from "../Home/Speaker2";
import HeroMediaWhat from "./HeroMediaWhat";
import MediaSpeaker from "./MediaSpeaker";
import Section3WhatMedia from "./Section3WhatMedia";
import SliderWhatMedia from "./SliderWhatMedia";


function WhatMedia() {
    return (
      <div>
      <div style={{ width: "100%" }}>
      <Header/>
    </div>
    <HeroMediaWhat/>
    <SliderWhatMedia/>

    <Section3WhatMedia/> 
<MediaSpeaker/>
    <DownloadSection/>


  
    <Footer />

    </div>    );
  }
  
  export default WhatMedia;