import network from "../images/home/Landing_Amplify.jpg";

const Section3Team = () => {
  return (
    <section style={{ paddingTop: "2em", paddingBottom: "2em" }}>
      <div style={{ paddingLeft: "1em", paddingRight: "1em" }}>
        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={network} />
          </div>
          <span>
            <h3>CONNECT</h3>
            <div>
            Re-energise your team with valuable <a href="/why-collision/networking" target="_blank">new connections</a> . Our software makes it easy to find the people you should meet.

            </div>
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
         
          <span>
            <h3>LEARN</h3>
            <div>Gain some <a href="/why-collision/learning-and-development" target="_blank">new perspectives</a> from the biggest players in your industry, and share your insights at your next team meeting.</div>
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
            <h3>SHARE</h3>
            <div>It’s easy for a team to drift apart right now. Give your team a shared experience and spark some fresh ideas within your company.</div>
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
         
          <span>
            <h3>GROW</h3>
            <div>Now is the perfect time to <a href="/convince-your-boss" target="_blank">reward your team</a> for their hard work over the last year. Collision offers countless opportunities for professional development.</div>
          </span>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={network} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section3Team;
