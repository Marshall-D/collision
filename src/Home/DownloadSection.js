import "../styles/home/DownloadSection.css";
import { Link } from "react-router-dom";

const DownloadSection = () => {
  return (
    <section className="formSection">
      <div className="container">
        <h2 className="textSize">DOWNLOAD THE COLLISION 2023 OVERVIEW </h2>
        <div class="notHero">
          <form class="form two-cols" novalidate="">
            <div className="form_field">
              <div>
                <input
                  className="input"
                  type="email"
                  name="email_address"
                  required=""
                  id="field_94293030"
                  placeholder="email address"
                  autocomplete="new-password"
                  maxlength="100"
                  data-field-label="Email address"
                  // value=""
                />
                {/* <span className="floating-Label">Email address*</span> */}
              </div>
            </div>

            <div class="form__field text floatingLabel page-1 active">
              <div className="form_field">
                <input
                  className="input"
                  type="text"
                  name="first_name"
                  required=""
                  id="field_94293031"
                  placeholder="First name"
                  autocomplete="new-password"
                  maxlength="100"
                  data-field-label="First name"
                  // value=""
                />
                {/* <span class/</div>="floatingLabel__label">First name*</span> */}
              </div>
            </div>

            <div style={{ paddingTop: "1em" }}>
              <p className="form-text">
                <span>
                  By submitting, you agree to receive email communications from
                  Collision, including upcoming promotions and discounted
                  tickets, news, and access to exclusive invite-only events.
                </span>
              </p>
            </div>

            <div style={{ paddingTop: "1em" }}>
              <span className="textSize_2">
                I allow Collision to customise the messages I'm shown, relevant
                to my interests, using targeted advertising based on the details
                submitted.*
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
                  <label className="textSize_2" for="field_94293034---5-0">
                    Yes
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="field_94293034---5-1"
                    required=""
                    name="i_allow_collision_to_customise_the_messages_im_shown_relevant_to_my_interests_using_targeted_advertising_based_on_the_details_submitted"
                    value="No"
                  />
                  <label className="textSize_2" for="field_94293034---5-1">
                    No
                  </label>
                </div>
              </div>
            </div>

            <Link
              className="hero-btn-redd "
              to="https://form.jotform.com/231143699159262"
              rel=""
              target=""
            >
              Download overview{" "}
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};
export default DownloadSection;
