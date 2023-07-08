import { Link } from "react-router-dom";
import TopHeader from "../Home/TopHeader";
import "../styles/Mobile.css";
// import "../styles/animation.css";

function Mobile() {
  const reload = () => {
    window.location.reload(false);
  };
  return (
    <div  >
      <div className="content2">
        {/* <div 
      className="phone"
      > */}
        <nav role="navigation">
          <div id="menuToggle" 
          >
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>

            <ul
              id="menu"
              
              //  onClick={reload}
            >
              <li>
                <Link  to="/bookings" className="hero-btn-red " rel="" target="">
                  Book tickets
                </Link>
              </li>
              <li>
                <Link to="/partners" className="hero-btn-black">
                  Partner with us
                </Link>
              </li>
               <li>
                <Link  style={{fontSize:"1.1em"}} to="/">Home</Link>
              </li>
              <li>
                <div class="dropdown">
                  <p style={{fontSize:"1em"}}>Attendees...</p>
                  <div class="dropdown-content">
                    <Link style={{fontSize:"1em"}} to="/attendees">Featured Attendees</Link>
                    <Link  style={{fontSize:"1em"}} to="/convinceyourboss">Convince your Boss</Link>
                    <Link style={{fontSize:"1em"}} to="/jobs">Jobs</Link>
                  </div>
                </div>
                {/* <Link to="/">Home</Link> */}
              </li>
              <li>
                <Link  style={{fontSize:"1.1em"}} to="/speakers">Speakers</Link>
              </li>
              <li>
                <div class="dropdown">
                  <p>Partners...</p>
                  <div class="dropdown-content">
                    <Link style={{fontSize:"1em"}} to="/partners">Partners</Link>
                    <Link style={{fontSize:"1em"}} to="/meetpartners">Meet our Partners</Link>
                  </div>
                </div>
              </li>{" "}
              <li>
                <Link style={{fontSize:"1.1em"}} to="/investors">Investors</Link>
              </li>
              <li>
                <div class="dropdown">
                  <p style={{marginBottom:"0.5em"}}>Why Collision...</p>
                  <div class="dropdown-content">
                    <Link style={{fontSize:"1em"}} to="/reasons">Reasons</Link>
                    <Link style={{fontSize:"1em"}} to="/networking">Networking</Link>
                    <Link style={{fontSize:"1em"}} to="/learning">Learning</Link>
                    <Link style={{fontSize:"1em"}} to="/lead">Lead</Link>
                    <Link  style={{fontSize:"1em"}} to="/teambuilding">Team Building</Link>
                  </div>
                </div>
              </li>
              <li>
                <div class="dropdown">
                  <p >Media...</p>
                  <div class="dropdown-content">
                    <Link style={{fontSize:"1em"}} to="/media">Media</Link>
                    <Link style={{fontSize:"1em"}} to="/mediapartner">Media Partner</Link>
                    <Link style={{fontSize:"1em"}} to="/whatmedia">What media</Link>
                  </div>
                </div>
              </li>
              
              <li>
                <Link style={{fontSize:"1.1em"}} to="/schedule">Schedule</Link>
              </li>
              <li>
                <div class="dropdown">
                  <p >Content...</p>
                  <div class="dropdown-content">
                    <Link to="/explore">Explore Content</Link>
                    <Link to="/qanda"> Q and A</Link>
                    <Link to="/roundtables">Round Table</Link>
                    <Link  to="/masterclass">MasterClass</Link>
                  </div>
                </div>
              </li>
              <li>
                <Link style={{fontSize:"1.1em"}} to="/essentials">Essentials</Link>
              </li>

              <li>
                <div class="dropdown">
                  <p >Discover Toronto...</p>
                  <div class="dropdown-content">
                    <Link style={{fontSize:"1em"}} to="/cityguide">City Guide</Link>
                    <Link style={{fontSize:"1em"}} to="/sight">Sight</Link>
                    <Link style={{fontSize:"1em"}} to="/restaurant">Restaurant</Link>
                    <Link style={{fontSize:"1em"}} to="/shopping">Shopping</Link>
                    <Link style={{fontSize:"1em"}} to="/around">Around</Link>
                  </div>
                </div>
              </li>
              <li>
                <Link style={{fontSize:"1.1em"}} to="/womenintech">Women in Tech</Link>
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
