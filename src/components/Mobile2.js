import "../styles/Mobile2.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Mobile2 = () => {
  const reload = () => {
    window.location.reload(true);
  };
  const [showSide, setShowSide] = useState(false);
  const toggleSide = () => {
    setShowSide(!showSide);
  };
  const [showPartner, setShowPartner] = useState(false);
  const togglePartner = () => {
    setShowPartner(!showPartner);
  };
  const [showMedia, setShowMedia] = useState(false);
  const toggleMedia = () => {
    setShowMedia(!showMedia);
  };
  const [showContent, setShowContent] = useState(false);
  const toggleContent = () => {
    setShowContent(!showContent);
  };
  const [showWhy, setShowWhy] = useState(false);
  const toggleWhy = () => {
    setShowWhy(!showWhy);
  };
  const [showWhy2, setShowWhy2] = useState(false);
  const toggleWhy2 = () => {
    setShowWhy2(!showWhy2);
  };
  return (
    // <div style={{ marginBottom: "10em" }}>
      <div>
      <div>
        {/* <div className="navigation"> */}
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />

        <label for="navi-toggle" className="navigation__button">
          <span className="navigation__icon"></span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list" style={{ paddingBottom: "12em",paddingTop:"-5em" }}>
            <li onClick={reload} className="navigation__item">
              <Link
                to="https://form.jotform.com/231143699159262"
                className="hero-btn-red "
                rel=""
                target=""
              >
                Book tickets
              </Link>
            </li>
            <li onClick={reload} className="navigation__item">
              <Link
                to="/partners"
                // className="navigation__link"
                className="hero-btn-black"
              >
                Partner with us
              </Link>{" "}
            </li>
            <li onClick={reload} className="navigation__item">
              <Link
                style={{ color: "white", fontSize: "1.5em" }}
                className="navigation__link"
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="navigation__item">
              <div style={{ marginBottom: "-2em" }}>
                <p
                  onClick={toggleSide}
                  className="navigation__link"
                  style={{ color: "white", fontSize: "1.5em" }}
                >
                  Attendees &#8675;
                </p>
                {showSide ? (
                  <div style={{marginBottom:"2em"}} className="dropdown">
                    <p onClick={reload}>
                      <Link className="navigation__link" to="/attendees">
                        Featured Attendees
                      </Link>
                    </p>
                    <p onClick={reload}>
                      <Link
                        onClick={reload}
                        className="navigation__link"
                        to="/convinceyourboss"
                      >
                        Convince your Boss
                      </Link>
                    </p>
                    {/* <p onClick={reload}>
                      <Link className="navigation__link" to="/jobs">
                        Jobs
                      </Link>
                    </p> */}
                  </div>
                ) : null}
                ;
              </div>
            </li>
            <li onClick={reload} className="navigation__item">
              <Link  style={{fontSize: "1.5em" } } className="navigation__link" to="/speakers">
                Speakers
              </Link>
            </li> <li onClick={reload} className="navigation__item">
              <Link  style={{fontSize: "1.5em" } } className="navigation__link" to="/partners">
                Partners
              </Link>
            </li>
            {/* <li className="navigation__item">
              <div>
                <p
                  onClick={togglePartner}
                  className="navigation__link"
                  style={{ color: "white", fontSize: "1.5em" }}
                >
                  Partners &#8675;
                </p>
                {showPartner ? (
                  <div className="dropdown">
                    <p onClick={reload}>
                      <Link className="navigation__link" to="/partners">
                        Partners
                      </Link>
                    </p>
                    <p onClick={reload}>
                      <Link className="navigation__link" to="/meetpartners">
                        Meet our Partners
                      </Link>
                    </p>
                  </div>
                ) : null}
              </div>
            </li> */}
            <li onClick={reload} className="navigation__item">
              <Link  style={{fontSize: "1.5em" } } className="navigation__link" to="/investors">
                Investors
              </Link>
            </li>

            <li className="navigation__item">
              <div>
                <p
                  onClick={toggleMedia}
                  className="navigation__link"
                  style={{ color: "white", fontSize: "1.5em" }}
                >
                  Media &#8675;
                </p>
                {showMedia ? (
                  <div className="dropdown">
                    <p onClick={reload}>
                      <Link className="navigation__link" to="/media">
                        Media
                      </Link>
                    </p>
                    {/* <p onClick={reload}>
                      <Link className="navigation__link" to="/mediapartner">
                        Media Partner
                      </Link>
                    </p> */}
                    <p onClick={reload}>
                      <Link className="navigation__link" to="/whatmedia">
                        What the media say
                      </Link>
                    </p>
                  </div>
                ) : null}
              </div>
            </li>

            {/* <li onClick={reload} className="navigation__item">
              <Link
                style={{fontSize: "1.5em" } }
                className="navigation__link"
                to="/schedule"
              >
                Schedule
              </Link>
            </li> */}
            {/* <li className="navigation__item">
              <div>
                <p
                  onClick={toggleContent}
                  className="navigation__link"
                  style={{ color: "white", fontSize: "1.5em" }}
                >
                  Content &#8675;
                </p>
                {showContent ? (
                  <div className="dropdown">
                    <p onClick={reload}>
                      <Link className="navigation__link" to="/explore">
                        Explore Content
                      </Link>
                    </p>

                    <p onClick={reload}>
                      <Link className="navigation__link" to="/qanda">
                        {" "}
                        Q and A
                      </Link>
                    </p>

                    <p onClick={reload}>
                      <Link className="navigation__link" to="/roundtables">
                        Round Table
                      </Link>
                    </p>

                    <p onClick={reload}>
                      <Link className="navigation__link" to="/masterclass">
                        MasterClass
                      </Link>
                    </p>
                  </div>
                ) : null}
              </div>
            </li> */}
            {/* <li onClick={reload} className="navigation__item">
              <Link  style={{fontSize: "1.5em" } }className="navigation__link" to="/essentials">
                Essentials
              </Link>
            </li>   */}
            <li onClick={reload} className="navigation__item">
              <Link  style={{fontSize: "1.5em" } }className="navigation__link" to="/qanda">
                Q and A
              </Link>
            </li>
            {/* <li className="navigation__item">
              <div>
                <p
                  onClick={toggleWhy}
                  className="navigation__link"
                  style={{ color: "white", fontSize: "1.5em" }}
                >
                  Discover Toronto &#8675;
                </p>
                {showWhy ? (
                  <div className="dropdown">
                    <p onClick={reload}>
                      <Link className="navigation__link" to="/cityguide">
                        City Guide
                      </Link>
                    </p>

                    <p onClick={reload}>
                      <Link className="navigation__link" to="/sight">
                        Sight
                      </Link>
                    </p>

                    <p onClick={reload}>
                      <Link className="navigation__link" to="/restaurant">
                        Restaurant
                      </Link>
                    </p>

                    <p onClick={reload}>
                      <Link className="navigation__link" to="/shopping">
                        Shopping
                      </Link>
                    </p>

                    <p onClick={reload}>
                      <Link className="navigation__link" to="/around">
                        Around
                      </Link>
                    </p>
                  </div>
                ) : null}
              </div>
            </li> */}

            <li className="navigation__item">
              <div>
                <p
                  onClick={toggleWhy2}
                  className="navigation__link"
                  style={{ color: "white", fontSize: "1.5em" }}
                >
                  Why Collision &#8675;
                </p>
                {showWhy2 ? (
                  <div className="dropdown">
                    <p onClick={reload}>
                      <Link className="navigation__link" to="/reasons">Reasons</Link>
                    </p>

                    <p onClick={reload}>
                      <Link className="navigation__link" to="/networking">
                        Networking
                      </Link>
                    </p>

                    <p onClick={reload}>
                      <Link className="navigation__link" to="/learning">
                        Learning and Development
                      </Link>
                    </p>

                    <p onClick={reload}>
                      <Link className="navigation__link" to="/lead">
                        Lead Generation
                      </Link>
                    </p>

                    <p onClick={reload}>
                      <Link className="navigation__link" to="/teambuilding">
                        Team Building
                      </Link>
                    </p>
                  </div>
                ) : null}
              </div>
            </li>
            <li onClick={reload} className="navigation__item">
              <Link style={{fontSize: "1.5em" }} className="navigation__link" to="/womenintech">
                Women in Tech
              </Link>
            </li> 
             <li onClick={reload} className="navigation__item">
              <Link style={{fontSize: "1.5em" }} className="navigation__link" to="/contact">
Contact us              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Mobile2;
