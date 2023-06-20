import "../styles/home/Home.css";
import qanda from "../images/qnadasvg.svg";

const HeroInvestor = () => {
  return (
    <div>
      <section className="hero">
        {/* <img
          src="https://web-summit-library.imgix.net/collision/2222/06/CCweb_herobg_Lupita_ryan-1.png?auto=compress%2Cformat&amp;ixlib=php-3.3.0&amp;s=c90a40879e96e87b53fcdc04b2ac6b8c"
          alt="ws-hero"
          style={{position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%", objectFit: "cover"}}
        /> */}
        <div className="container">
          <div className="row">
            <div className="col-md">
              <h1 className="full ">Investors at Collision </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="col-md-6-p">
                Collision connects VCs with the world’s leading LPs, early-stage
                founders and fellow top-tier firms through content, one-to-one
                meetings and roundtable discussions. Secure your investor ticket
                today, and unlock unparalleled opportunities at Collision this
                June.
                <br />
                <br />
                Please note: Investor tickets are subject to our investor
                accreditation policy , which is exclusively for those actively
                investing in the tech industry. Applicants must provide proof of
                recent investments and company affiliation.
              </p>
            </div>
            <div className="col-md-6-center">
              <a
                style={{ marginTop: "2em", height: "60px" }}
                className="hero-btn-red "
                href="/tickets/attendees"
                rel=""
                target=""
              >
                book investor tickets{" "}
              </a>
            </div>
          </div>
        </div>
        <span class="hero-bottom-text"></span>
      </section>
    </div>
  );
};
export default HeroInvestor;
