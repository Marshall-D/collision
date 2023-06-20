import network from "../../images/home/Landing_Amplify.jpg";
import "../../styles/qanda.css";
const Section3qa = () => {
  return (
    <section style={{ paddingTop: "2em", paddingBottom: "2em" }}>
      <div style={{ paddingLeft: "1em", paddingRight: "1em" }}>
        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "6em" }}>
            <span
              className="blockline"
              style={{ width: "50px", height: "10px" }}
            ></span>
          </div>
          <span>
            <h3>Questions.Answers.Insight</h3>
            <div>
              {" "}
              Over three days at Collision, we’ll be hosting tell-all Q&amp;As
              with some of the leading figures in tech, sport and entertainment.
              That burning question you’ve always wanted to ask? This is where
              it gets answered.
            </div>
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
          <span>
            <h3>An Eclectic lineup </h3>
            <div>
              {" "}
              We live in uncertain times for tech and business. We're welcoming
              the people who are tackling the big challenges facing industry
              today. Our content covers topics ranging from data science and
              content to autotech and environmental sustainability.
            </div>
          </span>
          <div style={{ marginTop: "6em" }}>
            <span
              className="blocklineblue"
              style={{ width: "50px", height: "10px" }}
            ></span>
          </div>
        </div>
        <div style={{ display: "inline-flex" }}>
        <div style={{ marginTop: "6em" }}>
            <span
              className="blocklineyellow"
              style={{ width: "50px", height: "10px" }}
            ></span>
          </div>
          <span>
            <h3>No Filter</h3>
            <div>
              {" "}
              Our speakers will answer questions from the audience as they come in. This is the most open and honest stage in tech.
            </div>
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
          <span>
            <h3>Stars Showcasing skills</h3>
            <div>
              {" "}
              Whether the skill set is soccer, skincare, music or mixology, our experts show you – literally – how to do it like a pro.
            </div>
          </span>
          <div style={{ marginTop: "6em" }}>
            <span
              className="blocklinegreen"
              style={{ width: "50px", height: "10px" }}
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section3qa;
