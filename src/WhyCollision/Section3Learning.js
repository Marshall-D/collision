import speakers from "../images/Speakers-1.png";
import update from "../images/Update.png";
import share from "../images/Share-experties.png";

const Section3Learning = () => {
  return (
    <section style={{ paddingTop: "2em", paddingBottom: "2em" }}>
      <div style={{ paddingLeft: "1em", paddingRight: "1em" }}>
        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={speakers} />
          </div>
          <span>
            <h3>INCREDIBLE SPEAKERS</h3>
            <div>
            Collision features top names in tech, but it also hears from leaders across every sector from marketing to social media to sustainability. The result is a well-balanced and enticing line-up of what Inc. Magazine has called "the world's best speakers". 
            </div>
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
         
          <span>
            <h3>UPDATE AND UPSKILL</h3>
            <div>
            Thinking about your next step? Hear about the success stories and challenges faced by industry leaders. 
As summarized by Entrepreneur Magazine, "every visitor is guaranteed to learn something both new and exciting".
            </div>
          </span>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={update} />
          </div>
        </div>
        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={share} />
          </div>
          <span>
            <h3>SHARE EXPERTISE</h3>
            <div>
            Connect with peers, grow your professional network, and get expert insights at our masterclasses and small-group roundtables. As noted in HuffPost, "the event is a global gathering of provocative ideas, brilliance, and investment dollars".
            </div>
          </span>
        </div>
     
      </div>
    </section>
  );
};
export default Section3Learning;
