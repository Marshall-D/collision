import logo from "./logo.svg";
import "./App.css";
import Formatter from "./components/Formatter";
import QandA from "./Content/QandA";
import ExploreContent from "./Content/ExploreContent";
import Roundtables from "./Content/Roundtables";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Media from "./Media/Media";
import MediaPartner from "./Media/MediaPartner";
import Home from "./Home/Home";
import Bookings from "./Bookings/Bookings";
import Partner from "./Partner/Partner";
import FeaturedAttendee from "./Attendees/FeaturedAttendee";
import ConvinceBoss from "./Attendees/ConvinceBoss";
import Jobs from "./Attendees/Jobs";
import Speaker from "./Speaker/Speaker";
import MeetPartners from "./Partner/MeetPartners";
import Investor from "./Investors/Investor";
import WhatMedia from "./Media/WhatMedia";
import MasterClass from "./Content/Masterclass";
import Schedule from "./Schedule/Schedule";
import Around from "./DiscoverTorontoi/Around";
import CityGuide from "./DiscoverTorontoi/CityGuide";
import Restaurant from "./DiscoverTorontoi/Restaurant";
import Shopping from "./DiscoverTorontoi/Shopping";
import Sight from "./DiscoverTorontoi/Sight";
import Essentials from "./components/Essentials";
import Lead from "./WhyCollision/Lead";
import Learning from "./WhyCollision/Learning";
import Networking from "./WhyCollision/Networking";
import Reasons from "./WhyCollision/Reasons";
import TeamBuilding from "./WhyCollision/TeamBuilding";
import WomenTech from "./components/WomenTech";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Formatter />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bookings",
        element: <Bookings />,
      },
      {
        path: "/partners",
        element: <Partner />,
      },
      {
        path: "/qanda",
        element: <QandA />,
      },
      {
        path: "/explore",
        element: <ExploreContent />,
      },
      {
        path: "/roundtables",
        element: <Roundtables />,
      },

      {
        path: "/mediaparnter",
        element: <MediaPartner />,
      },
      {
        path: "/media",
        element: <Media />,
      },
      {
        path: "/attendees",
        element: <FeaturedAttendee />,
      },
      {
        path: "/convinceyourboss",
        element: <ConvinceBoss />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/speakers",
        element: <Speaker />,
      },
      {
        path: "/meetpartners",
        element: <MeetPartners />,
      },
      {
        path: "/partners",
        element: <Partner/>,
      },
      {
        path: "/investors",
        element: <Investor/>,
      },
      {
        path: "/whatmedia",
        element: <WhatMedia/>,
      },
      {
        path: "/schedule",
        element: <Schedule/>,
      },
      {
        path: "/masterclass",
        element: <MasterClass/>,
      },
      {
        path: "/essentials",
        element: <Essentials/>,
      },
      {
        path: "/around",
        element: <Around/>,
      },
      {
        path: "/cityguide",
        element: <CityGuide/>,
      },
      {
        path: "/restaurant",
        element: <Restaurant/>,
      },
      {
        path: "/shopping",
        element: <Shopping/>,
      },
      {
        path: "/sight",
        element: <Sight/>,
      },
      {
        path: "/lead",
        element: <Lead/>,
      },
      {
        path: "/learning",
        element: <Learning/>,
      },
      {
        path: "/networking",
        element: <Networking/>,
      },
      {
        path: "/reasons",
        element: <Reasons/>,
      },
      {
        path: "/teambuilding",
        element: <TeamBuilding/>,
      },
      {
        path: "/womenintech",
        element: <WomenTech/>,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
