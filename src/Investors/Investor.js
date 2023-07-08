import Trusted from "../Bookings/Trusted";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import Hero from "../Home/Hero";
import Section3 from "../Home/Section3";
import Section6 from "../Home/Section6";
import Slider2 from "../Home/Slider2";
import Speaker2 from "../Home/Speaker2";
import HeroInvestor from "./HeroInvestor";
import Section2Investor from "./Section2Investor";
import Section3Investor from "./Section3Investor";
import Speaker2Investor from "./Speaker2Investor";
import TrustedInvestor from "./TrustedInvestor";


function Investor() {
    return (
      <div>
      <div style={{ width: "100%" }}>
      <Header/>
    </div>
    <HeroInvestor/>
    <Section2Investor/>
    <Section3Investor/>
    <h2 style={{ marginLeft :"1em", color: "blue" }}>THE WORLD'S MOST PROMINENT FIRMS JOIN US</h2>

    <TrustedInvestor/>
    <Speaker2Investor/>
    

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