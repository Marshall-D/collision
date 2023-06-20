// import network from "../../images/home/Landing_Amplify.jpg";
import "../styles/qanda.css";
const Section3Investor = () => {
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
            <h3>Dealflow</h3>
            <div>
            Explore new markets, conduct due diligence, and arrange meetings via our filterable startup database. Our app facilitates sourcing, screening, and scheduling with promising new tech startups.
            </div>
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
          <span>
            <h3>Investor to Startup Meetings </h3>
            <div>
            Our team of analysts will plan your agenda for you, scheduling pre-arranged meetings for you with the startups most relevant to you or your firm. 
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
            <h3>LP Networking</h3>
            <div>
              {" "}
              The world’s leading pension funds, endowment funds and family offices attend Collision. Connect online with LPs through pre-arranged meetings and roundtables.            </div>
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
          <span>
            <h3>Venture content</h3>
            <div>
              {" "}
              Keep up with new VC trends and tech with our dedicated investor content. Participate in curated roundtable discussions, and engage with the people driving change in investment.
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
export default Section3Investor;
