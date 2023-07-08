import "../styles/home/Home.css";
import qanda from "../images/qnadasvg.svg";
import { Link } from "react-router-dom";

const HeroWomen = () => {
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
                {" "}
                WOMEN IN TECH IS NOW AT CAPACITY FOR 2023{" "}
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="col-md-6-p">
                Our women in tech program for Collision 2023 is at capacity!
                <br />
                <br />
                Join the women in tech network now to be one of the first to
                find out when women in tech tickets go on sale, giving you
                access to our events at a 90% discount.
              </p>
              <br />
              <br />
              Collision is returning to Toronto this October.
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
                  <br />
                  <br />
                </div>

                <div>
                  <input
                    className="input"
                    type="email"
                    name="email_address"
                    required=""
                    id="field_94293030"
                    placeholder="    First Name"
                    autocomplete="new-password"
                    maxlength="100"
                    data-field-label="Email address"
                    // value=""
                  />
                  {/* <span className="floating-Label">Email address*</span> */}
                </div>
              </div>
              <div style={{ paddingTop: "1em" }}>
                <p className="form-text">
                  <span>
                    By submitting, you agree to receive email communications
                    from Collision, including upcoming promotions and discounted
                    tickets, news, and access to exclusive invite-only events.
                  </span>
                </p>
              </div>

              <div style={{ paddingTop: "1em" }}>
                <span>
                  I allow Collision to customise the messages I'm shown,
                  relevant to my interests, using targeted advertising based on
                  the details submitted.*
                </span>
                <div className="input-container" style={{ paddingTop: "1em" }}>
                  <div style={{ marginRight: "1em" }}>
                    {/* class="radioField"> */}
                    <input
                      type="radio"
                      id="field_94293034---5-0"
                      required=""
                      name="i_allow_collision_to_customise_the_messages_im_shown_relevant_to_my_interests_using_targeted_advertising_based_on_the_details_submitted"
                      value="Yes"
                    />
                    <label for="field_94293034---5-0">Yes</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="field_94293034---5-1"
                      required=""
                      name="i_allow_collision_to_customise_the_messages_im_shown_relevant_to_my_interests_using_targeted_advertising_based_on_the_details_submitted"
                      value="No"
                    />
                    <label for="field_94293034---5-1">No</label>
                  </div>
                </div>
              </div>

              <Link
                style={{ marginTop: "2em", height: "60px" }}
                className="hero-btn-red "
                to="https://form.jotform.com/231143699159262"
                rel=""
                target=""
              >
              JOIN THE WOMEN IN TECH NETWORK
              </Link>
            </div>
          </div>
        </div>
        <span class="hero-bottom-text"></span>
      </section>
    </div>
  );
};
export default HeroWomen;
