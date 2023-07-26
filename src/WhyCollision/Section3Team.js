import connect from "../images/team/CC21_connect.jpg";
import grow from "../images/team/CC21_grow.jpg";
import learn from "../images/team/CC21_learn.jpg";
import share from "../images/team/CC21_share.jpg";


const Section3Team = () => {
  return (
    <section className="textSize" style={{ paddingTop: "2em", paddingBottom: "2em" }}>
      <div style={{ paddingLeft: "1em", paddingRight: "1em" }}>
        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em" }}>
            <img className="image-size" 
            
             src={connect} />
          </div>
          <span>
            <h3>CONNECT</h3>
            <div>
            Re-energise your team with valuable new connections. Our software makes it easy to find the people you should meet.

            </div>
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
         
          <span>
            <h3>LEARN</h3>
            <div>Gain some new perspectives from the biggest players in your industry, and share your insights at your next team meeting.</div>
          </span>
          <div style={{ marginTop: "5em" }}>
          <img className="image-size" 
            src={learn} />
          </div>
        </div>
        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em" }}>
          <img className="image-size" 
             src={share} />
          </div>
          <span>
            <h3>SHARE</h3>
            <div>It’s easy for a team to drift apart right now. Give your team a shared experience and spark some fresh ideas within your company.</div>
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
         
          <span>
            <h3>GROW</h3>
            <div>Now is the perfect time to reward your team for their hard work over the last year. Collision offers countless opportunities for professional development.</div>
          </span>
          <div style={{ marginTop: "5em" }}>
          <img className="image-size" 
            
            src={grow} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section3Team;
