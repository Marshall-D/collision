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


function WhatMedia() {
    return (
      <div>
      <div style={{ width: "100%" }}>
      <Header/>
    </div>
    <Hero/>
    <Slider2/>
    <Section3/> 
    <Speaker2/>
    <DownloadSection/>

    {/* <Section2/>
    <p>collision media goes here</p>
    <Section4/> */}


    {/* <Section3/>
    <Trusted/>
    <Speaker2/> */}
    

    {/* <Section6/> 
     <Section3/>
    <Slider2/>

    <Hero/>
   */}



    {/* <Section2/>
    <Slider/>
    <DownloadSection/>
    <Section3></Section3>
    <Section4/>
    <Section5/>
    */}
    <Footer />

    </div>    );
  }
  
  export default WhatMedia;