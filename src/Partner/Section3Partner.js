import network from "../images/CC21_Networking-1.jpg";
import lead from "../images/Lead-generation-50.jpg";
import thought from "../images/Thought-leadership-50.jpg";
import brand from "../images/Brand-awareness-50.jpg";


const Section3Partner = () => {
  return (
    <section style={{ paddingTop: "2em", paddingBottom: "2em" }}>
      <div style={{ paddingLeft: "1em", paddingRight: "1em" }}>
        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={brand} />
          </div>
          <span>
            <h3>BRAND AWARENESS</h3>
            <div>
            Collision’s incredible global reach is down to the journalists joining us from leading media outlets worldwide. Our in-house media team will create a personalized package to help your company share its story with the world.
            </div>
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
         
          <span>
            <h3>THOUGHT LEADERSHIP</h3>
            <div>
            You’ve got the expertise, let people know. Place your company at the forefront of your industry by hosting roundtables and masterclasses. Our team can cater to your specific goals so that you’re not just a part of the conversation, you’re leading it.
            </div>
          </span>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={thought} />
          </div>
        </div>
        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={network} />
          </div>
          <span>
            <h3>NETWORKING</h3>
            <div>
            Whatever your industry, we’ve got a track for it at Collision. Whether you want to recruit, meet influential figures in your sector, or learn about your competition, Collision gives you the tools – wherever you are in the world.
            </div>
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
         
          <span>
            <h3>LEAD GENERATION</h3>
            <div>
            We welcomed over 35,000 people to Collision in 2022. Our attendees are experts in their respective industries and are ready to find the next big thing. We think you should meet them.
            </div>
          </span>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={lead} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section3Partner;
