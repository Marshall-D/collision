import "../styles/home/Home.css";
import qanda from "../images/qnadasvg.svg";
import { Link } from "react-router-dom";

const HeroMedia = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <h1 className="full ">Join Us As Media at collision 2023</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="col-md-6-p">
                Journalists representing the world’s largest media outlets will
                take part in Collision 2023, right at the crossroads of
                international news and tech.
                <br />
                <br />
                Apply for media accreditation and join us in Toronto this
                October.{" "}
              </p>
            </div>
            <div className="col-md-6-center">
              <div className="form_field">
                <div>
                  <input
                    className="input"
                    type="email"
                    name="email_address"
                    required=""
                    id="field_94293030"
                    placeholder="    Email address"
                    autocomplete="new-password"
                    maxlength="100"
                    data-field-label="Email address"
                    // value=""
                  />
                  {/* <span className="floating-Label">Email address*</span> */}
                </div>
              </div>
              <Link
                style={{ marginTop: "2em", height: "60px" }}
                className="hero-btn-redd "
                to="https://form.jotform.com/231143699159262"
                rel=""
                target=""
              >
                Apply for 2023 media accreditation.
              </Link>
            </div>
          </div>
        </div>
        <span class="hero-bottom-text"></span>
      </section>
    </div>
  );
};
export default HeroMedia;
