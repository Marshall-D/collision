import { Outlet } from 'react-router-dom';
import '../App.css';
import ConvinceBoss from '../Attendees/ConvinceBoss';
import Fattendee from '../Attendees/FeaturedAttendee';
import Jobs from '../Attendees/Jobs';
import Bookings from '../Bookings/Bookings';
import ExploreContent from '../Content/ExploreContent';
import MasterClass from '../Content/Masterclass';
// import QandA from '../Content/QandA';

import Home from '../Home/Home';
import Investor from '../Investors/Investor';
import Media from '../Media/Media';
import MediaPartner from '../Media/MediaPartner';
import WhatMedia from '../Media/WhatMedia';
import MeetPartners from '../Partner/MeetPartners';
import Partner from '../Partner/Partner';
import Speaker from '../Speaker/Speaker';
import Lead from '../WhyCollision/Lead';
import Learning from '../WhyCollision/Learning';
import Networking from '../WhyCollision/Networking';
import Reasons from '../WhyCollision/Reasons';
import TeamBuilding from '../WhyCollision/TeamBuilding';
import Essentials from './Essentials';
import Mobile from './Mobile';
import WomenTech from './WomenTech';

// import { Outlet } from 'react-router-dom'




function Formatter() {
  return (

    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Mobile/>
      <Outlet/>
      {/* <Home/> */}
      {/* <Bookings/> */}
      {/* <Partner/> */}
      {/* <Fattendee/> */}
      {/* <ConvinceBoss/> */}
      {/* <Jobs/> */}
      {/* <Speaker/> */}
      {/* <MeetPartners/> */}
      {/* <Investor/> */}
      {/* <Media/> */}
      {/* <WhatMedia/> */}
      {/* <MediaPartner/> */}
      {/* <QandA/> */}
      {/* <MasterClass/> */}
      {/* <Essentials/> */}
      {/* <Reasons/> */}
      {/* <Networking/> */}
      {/* <Learning/> */}
      {/* <Lead/> */}
      {/* <TeamBuilding/> */}
      
    </div>
  );
}

export default Formatter;