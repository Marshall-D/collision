import "../styles/home/Home.css";
import qanda from "../images/qnadasvg.svg";

const HeroPartner = () => {
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
              <h1 className="full ">
                Meet The World- Leading Companies joining us at Coliison 2023{" "}
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="col-md-6-p">
                Whether it's RBC, AWS, City of Toronto or Destination Toronto,
                something about Collision works for our global partners.
                <br />
                <br />
                Exhibition space at Collision 2023 is sold out. Get in touch
                with our specialist team today to{" "}
                <a
                 href="/" target="_blank">
                  secure your partnership for 2024
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
        <span class="hero-bottom-text"></span>
      </section>
    </div>
  );
};
export default HeroPartner;
