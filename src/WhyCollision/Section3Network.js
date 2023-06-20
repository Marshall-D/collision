import inc from "../images/Media/Inc-logo.png";
import cna from "../images/Media/cna-logo.png";
import globe from "../images/Media/the-globe-and-mail_katka.png";

const Section3Network = () => {
  return (
    <section style={{ paddingTop: "2em", paddingBottom: "2em" }}>
      <div style={{ paddingLeft: "1em", paddingRight: "1em" }}>
        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={inc} />
          </div>
          <span>
            <div>
            ‘‘You'll likely leave feeling inspired, educated and connected to a great community.’’            </div>
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
         
          <span>
            <div>
            ‘‘Collision redefines the way in which people and companies from the global technology industry gather.’’            </div>
          </span>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={cna} />
          </div>
        </div>
        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={globe} />
          </div>
          <span>
            <div>
            ‘‘Collision’s app includes chat capabilities that conference delegates can use for networking.’’            </div>
          </span>
        </div>
       
      </div>
    </section>
  );
};
export default Section3Network;
