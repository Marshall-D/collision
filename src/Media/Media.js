import Trusted from "../Bookings/Trusted";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import Hero from "../Home/Hero";
import Section2 from "../Home/Section2";
import Section3 from "../Home/Section3";
import Section4 from "../Home/Section4";
import Section6 from "../Home/Section6";
import Slider2 from "../Home/Slider2";
import Speaker2 from "../Home/Speaker2";


function Media() {
    return (
      <div>
      <div style={{ width: "100%" }}>
      <Header/>
    </div>
    <Hero/>
    <Section2/>
    <p>collision media goes here</p>
    <Speaker2/>
    <Slider2/>
    <Section4/>


    {/* <Section3/>
    <Trusted/>
    <Speaker2/> */}
    

    {/* <Section6/> 
     <Section3/>
    <Slider2/>

    <Hero/>
    <Section6/>  */}



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
  
  export default Media;