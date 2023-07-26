import amplify from "../images/home/Landing_Amplify.jpg";
import network from "../images/home/Landing_Network.jpg";
import lead from "../images/home/Landing_Lead-generation.jpg";
import learn from "../images/home/Landing_Learn.jpg";

const Section3 = () => {
  return (
    <section style={{ paddingTop: "2em", paddingBottom: "2em" }}>
      <div style={{ paddingLeft: "1em", paddingRight: "1em" }}>
        <div style={{ display: "inline-flex" }}>
          <div  className="image-size" style={{ marginTop: "5em" }}>
            <img className="image-size" style={{ }} src={network} />
          </div>
          <span className="text-size">
            <h3 >NETWORKING</h3>
            <div>
              {" "}
              Make valuable connections, and meet peers and mentors in your
              industry and in all others touched by tech. Inc. said it best:
              “Collision does a superb job of building community through
              networking.”
            </div>
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
         
          <span className="text-size">
            <h3>LEARNING</h3>
            <div>
              {" "}
              We live in uncertain times for tech and business. We're welcoming
              the people who are tackling the big challenges facing industry
              today. Our content covers topics ranging from data science and
              content to autotech and environmental sustainability.
            </div>
          </span>
          <div style={{ marginTop: "5em" }}>
            <img className="image-size"
             src={learn} />
          </div>
        </div>
        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em" }}>
            <img className="image-size" src={lead} />
          </div>
          <span className="text-size">
            <h3>LEAD GENERATION </h3>
            <div>
              {" "}
              Find the people and businesses relevant to you, and generate the
              leads that will bring value to your organisation. HuffPost said:
              “The event is a global gathering of provocative ideas, brilliance,
              and investment dollars.”
            </div>
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
         
          <span className="text-size">
            <h3>EXPOSURE</h3>
            <div>
              {" "}
              Collision gathers the most prestigious names in international
              media, attracting more than 1,200 journalists from publications
              including Bloomberg, Financial Times, Forbes, CNN Business, CNBC,
              and the Wall Street Journal.
            </div>
          </span>
          <div style={{ marginTop: "5em" }}>
            <img  className="image-size" src={amplify} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section3;
