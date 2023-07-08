import "../styles/home/Home.css";
import { Link } from "react-router-dom";

const HeroBoss = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <h1 className="full ">Convince your boss </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="col-md-6-p">
                Collision gathers global tech leaders, high-potential startups
                and top journalists. Secure your pass to "the Olympics of tech"
                and join us in Toronto this October.
                <br />
                <br />
                Need some help pitching the idea at work? Download our overview
                and convince your boss.{" "}
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
                  />
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
                  />
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
                Download Information Pack{" "}
              </Link>
            </div>
          </div>
        </div>
        <span class="hero-bottom-text"></span>
      </section>
    </div>
  );
};
export default HeroBoss;
