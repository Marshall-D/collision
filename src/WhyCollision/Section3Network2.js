import screen from "../images/screenmeet.png";
import trello from "../images/trello.png";
import zoom from "../images/zoom-ai.png";
const Section3Network2 = () => {
  return (
    <section style={{ paddingTop: "2em", paddingBottom: "2em" }}>
      <div style={{ paddingLeft: "1em", paddingRight: "1em" }}>
        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={trello} />
          </div>
          <span>
            <div>
            ‘‘The connections you make are unparalleled. We met users from all over the world.’’                      </div>
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
         
          <span>
            <div>
            ‘‘The significant investor face time made this one of the most strategic experiences for our company.’’             </div>
          </span>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={zoom} />
          </div>
        </div>
        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={screen} />
          </div>
          <span>
            <div>
            ‘‘Bringing our startup to Collision has been one of the best decisions we've made as an early-stage company. An unbelievable atmosphere, all geared towards making unbelievable connections!’’                 </div>
          </span>
        </div>
       
      </div>
    </section>
  );
};
export default Section3Network2;
