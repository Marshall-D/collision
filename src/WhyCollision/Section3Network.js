import inc from "../images/Media/Inc-logo.png";
import cna from "../images/Media/cna-logo.png";
import globe from "../images/Media/the-globe-and-mail_katka.png";
import wsj from "../images/Media/the-wall-street-journal.png";


const Section3Network = () => {
  return (
    <section  className="textSize" style={{ paddingTop: "2em", paddingBottom: "2em" }}>
      <div style={{ paddingLeft: "1em", paddingRight: "1em" }}>
       
      <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em",marginRight:"1em" }}>
          <img className="image-size"            src={wsj} />
          </div>
          <span>
            <h3>
              “Collision is a frenetic stream of 20-minute sessions on a wide
              range of topics, from technology and digital media to music,
              politics and culture.”
            </h3>
          </span>
        </div>
        <div style={{marginTop:"3em", display: "inline-flex" }}>
          <span>
            <h3>"The stunning future of tech conferences." </h3>
          </span>
          <div style={{ marginLeft: "1em" }}>
          <img className="image-size"             src={cna} />
          </div>
        </div>
        <div style={{ marginTop:"2em",display: "inline-flex" }}>
          <div style={{ marginTop: "1em",marginRight:"2em" }}>
          <img className="image-size"            src={inc} />
          </div>
          <span>
            <h3>
              "Collision continues to be the most frequent answer when I ask
              others about the conference they most want to attend this year."
            </h3>
          </span>
        </div>
        <div style={{marginBottom:"2em",marginTop:"2em", display: "inline-flex" }}>
          <span>
            <h3>"One of the best shows shows for up-and-coming startups"</h3>
            <div>
              "Collision has become one of the best shows for up-and-coming
              startups, with a conference program that caters to them and a
              broader industry audience wanting to keep up with what’s new in
              tech.
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
          <img className="image-size"             src={globe} />
          </div>
        </div>
       
      </div>
    </section>
  );
};
export default Section3Network;
