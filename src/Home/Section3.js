import network from "../images/home/Landing_Amplify.jpg";

const Section3 = () => {
  return (
    <section style={{ paddingTop: "2em", paddingBottom: "2em" }}>
      <div style={{ paddingLeft: "1em", paddingRight: "1em" }}>
        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={network} />
          </div>
          <span>
            <h3>Networking</h3>
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
         
          <span>
            <h3>Learning</h3>
            <div>
              {" "}
              We live in uncertain times for tech and business. We're welcoming
              the people who are tackling the big challenges facing industry
              today. Our content covers topics ranging from data science and
              content to autotech and environmental sustainability.
            </div>
          </span>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={network} />
          </div>
        </div>
        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={network} />
          </div>
          <span>
            <h3>Lead Generation</h3>
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
         
          <span>
            <h3>Exposure</h3>
            <div>
              {" "}
              Collision gathers the most prestigious names in international
              media, attracting more than 1,200 journalists from publications
              including Bloomberg, Financial Times, Forbes, CNN Business, CNBC,
              and the Wall Street Journal.
            </div>
          </span>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={network} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section3;
