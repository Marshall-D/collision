import screen from "../images/screenmeet.png";
import trello from "../images/trello.png";
import zoom from "../images/zoom-ai.png";
import inc from "../images/Media/Inc-logo.png";
import cna from "../images/Media/cna-logo.png";
import globe from "../images/Media/the-globe-and-mail_katka.png";
import wsj from "../images/Media/the-wall-street-journal.png";
import dt from "../images/Media/digital-trends-logo.jpeg";
import recode from "../images/Media/recode.png";
const Section3Network2 = () => {
  return (
    <section style={{ paddingTop: "2em", paddingBottom: "2em" }}>
      <div style={{ paddingLeft: "1em", paddingRight: "1em" }}>
      <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em",marginRight:"1em" }}>
            <img style={{ width: "100px", height: "100px" }} src={trello} />
          </div>
          <span>
            <h3>
            ‘‘Bringing our startup to Collision has been one of the best decisions we've made as an early-stage company. An unbelievable atmosphere, all geared towards making unbelievable connections!’’
            </h3>
          </span>
        </div>
        <div style={{marginTop:"3em", display: "inline-flex" }}>
          <span>
            <h3>"The stunning future of tech conferences." </h3>
          </span>
          <div style={{ marginLeft: "1em" }}>
            <img style={{ width: "100px", height: "100px" }} src={screen} />
          </div>
        </div>
        <div style={{ marginTop:"2em",display: "inline-flex" }}>
          <div style={{ marginTop: "1em",marginRight:"2em" }}>
            <img style={{ width: "100px", height: "100px" }} src={zoom} />
          </div>
          <span>
            <h3>
            ‘‘The connections you make are unparalleled. We met users from all over the world.’’
            </h3>
          </span>
        </div>
        <div style={{marginBottom:"2em",marginTop:"2em", display: "inline-flex" }}>
          <span>
            <h3>"One of the best shows shows for up-and-coming startups"</h3>
            <div>
            ‘‘The significant investor face time made this one of the most strategic experiences for our company.’’
            </div>
            <br />
            <br />
            <div>
              "I like to go to this show just to talk to young entrepreneurs
              from all over the world who come to pitch their startups and get
              noticed."
            </div>
          </span>
          <div style={{ marginTop: "7em" }}>
            <img style={{ width: "100px", height: "100px" }} src={recode} />
          </div>
        </div>
       
      </div>
    </section>
  );
};
export default Section3Network2;
