import Hero from '../Home/Hero';
import Section2 from './Section2';
import Slider from './Slider';
import Speaker2 from './Speaker2';
import DownloadSection from '../Home/DownloadSection';
import Slider2 from './Slider2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Footer from './Footer';
import Header from './Header';

function Home() {
    return (
      <div>
      <div style={{ width: "100%" }}>
      <Header />
    </div>
    <Hero/>
    <Section2/>
    <Slider/>
    <Speaker2/>
    <DownloadSection/>
    <Slider2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Footer />

    </div>    );
  }
  
  export default Home;