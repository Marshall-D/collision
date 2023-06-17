import Trusted from "../Bookings/Trusted";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import Hero from "../Home/Hero";
import Section3 from "../Home/Section3";
import Section6 from "../Home/Section6";
import Slider2 from "../Home/Slider2";
import Speaker2 from "../Home/Speaker2";


function Investor() {
    return (
      <div>
      <div style={{ width: "100%" }}>
      <Header/>
    </div>
    <Hero/>
    <Section3/>
    <Trusted/>
    <Speaker2/>
    

    {/* <Section6/> 
    <Slider2/>
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
  
  export default Investor;