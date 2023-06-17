import { Link } from "react-router-dom";
import TopHeader from "../Home/TopHeader";
import "../styles/Mobile.css";
// import "../styles/animation.css";

function Mobile() {
  const reload = () => {
    window.location.reload(false);
  };
  return (
    <div>
      <div className="content2">
        {/* <div 
      className="phone"
      > */}
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>

            <ul id="menu" onClick={reload}>
              <li>
                <Link to="/bookings" className="hero-btn-red " rel="" target="">
                  Book tickets
                </Link>
              </li>
              <li>
                <Link
                  to="/partners"
                  className="hero-btn-black "
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Partner with us
                </Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/qanda">Q and A</Link>
              </li>
              <li>
                <Link to="/explore">Explore Content</Link>
              </li>
              <li>
                <Link to="/roundtables">Round Table</Link>
              </li>
              <li>
                <Link to="/media">Media</Link>
              </li>
              <li>
                <Link to="/mediapartner">Media Partner</Link>
              </li>
              <li>
                <Link to="/attendees">Featured Attendees</Link>
              </li>{" "}
              <li>
                <Link to="/convinceyourboss">Convince your Boss</Link>
              </li>{" "}
              <li>
                <Link to="/jobs">Jobs</Link>
              </li>
              <li>
                <Link to="/speakers">Speakers</Link>
              </li>{" "}
              <li>
                <Link to="/meetpartners">Meet our Partners</Link>
              </li>
              <li>
                <Link to="/partners">Partners</Link>
              </li>
              <li>
                <Link to="/investors">Investors</Link>
              </li>
              <li>
                <Link to="/whatmedia">What media</Link>
              </li>
              <li>
                <Link to="/schedule">Schedule</Link>
              </li>
              <li>
                <Link to="/masterclass">MasterClass</Link>
              </li>
              <li>
                <Link to="/essentials">Essentials</Link>
              </li>
              <li>
                <Link to="/around">Around</Link>
              </li>
              <li>
                <Link to="/cityguide">City Guide</Link>
              </li>
              <li>
                <Link to="/restaurant">Restaurant</Link>
              </li>
              <li>
                <Link to="/shopping">Shopping</Link>
              </li>
              <li>
                <Link to="/sight">Sight</Link>
              </li>
              <li>
                <Link to="/lead">Lead</Link>
              </li>
              <li>
                <Link to="/learning">Learning</Link>
              </li>
              <li>
                <Link to="/networking">Networking</Link>
              </li>
              <li>
                <Link to="/reasons">Reasons</Link>
              </li>
              <li>
                <Link to="/teambuilding">Team Building</Link>
              </li>
              <li>
                <Link to="/wpmenintech">Women in Tech</Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* </div> */}
        <div>
          <TopHeader />
        </div>
      </div>
    </div>
  );
}
export default Mobile;
