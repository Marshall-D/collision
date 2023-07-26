
import DownloadSection from "../Home/DownloadSection";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import HeroMediaWhat from "./HeroMediaWhat";
import MediaSpeaker from "./MediaSpeaker";
import Section3WhatMedia from "./Section3WhatMedia";
import SliderWhatMedia from "./SliderWhatMedia";

function WhatMedia() {
  return (
    <div>
      <div style={{ width: "100%" }}>
        <Header />
      </div>
      <HeroMediaWhat />
      <SliderWhatMedia />

      <Section3WhatMedia />
      <MediaSpeaker />
      <DownloadSection />

      <Footer />
    </div>
  );
}

export default WhatMedia;
