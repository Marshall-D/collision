// import network from "../../images/home/Landing_Amplify.jpg";
import "../styles/qanda.css";
const Section3Women = () => {
  return (
    <section  className="textSize" style={{ paddingTop: "2em", paddingBottom: "2em" }}>
      <div style={{ paddingLeft: "1em", paddingRight: "1em" }}>
        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "6em" }}>
            <span
              className="blockline"
            ></span>
          </div>
          <span>
            <h3>TALKS</h3>
            <div>
            Explore new markets, conduct due diligence, and arrange meetings via our filterable startup database. Our app facilitates sourcing, screening, and scheduling with promising new tech startups.
            </div>
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
          <span>
            <h3>NETWORKING </h3>
            <div>
            Our team of analysts will plan your agenda for you, scheduling pre-arranged meetings for you with the startups most relevant to you or your firm. 
            </div>
          </span>
          <div style={{ marginTop: "6em" }}>
            <span
              className="blocklineblue"
            ></span>
          </div>
        </div>
        <div style={{ display: "inline-flex" }}>
        <div style={{ marginTop: "6em" }}>
            <span
              className="blocklineyellow"
            ></span>
          </div>
          <span>
            <h3>TICKET DISCOUNTS</h3>
            <div>
              {" "}
              The world’s leading pension funds, endowment funds and family offices attend Collision. Connect online with LPs through pre-arranged meetings and roundtables.            </div>
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
          <span>
            <h3>DEDICATED LOUNGE</h3>
            <div>
              {" "}
              Keep up with new VC trends and tech with our dedicated investor content. Participate in curated roundtable discussions, and engage with the people driving change in investment.
            </div>
          </span>
          <div style={{ marginTop: "6em" }}>
            <span
              className="blocklinegreen"
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section3Women;
