import tom from "../../images/speakers/tom.avif";
import blueblack from "../../images/speakers/blueblack.avif";
import penny from "../../images/speakers/penny.avif";

import wayne from "../../images/speakers/wayne.avif";
import juju from "../../images/speakers/juju.avif";
import kensim from "../../images/speakers/kensim.avif";

import sarah from "../../images/speakers/sarah.png";
import whyz from "../../images/speakers/whyz.avif";
import { Link } from "react-router-dom";

const Section3qa2 = () => {
  return (
    <section
      className="textSize"
      style={{ paddingTop: "2em", paddingBottom: "2em" }}
    >
      <div style={{ paddingLeft: "1em", paddingRight: "1em" }}>
        <h2 className="textSize" style={{ color: "black" }}>
          CHECK OUT SOME OF OUR Q AND A'S AT COLLISION 2023
        </h2>

        <div style={{ display: "inline-flex", marginBottom: "2em" }}>
          <div style={{ marginTop: "3em" }}>
            <img className="image-size" src={sarah} />
          </div>
          <span>
            <h3>Pro tips for pitching with Sarah Guo 📈</h3>
            <div>
              {" "}
              Pick up pitching tips as Conviction founder Sarah Guo gives
              feedback on five top startups' pitches.
            </div>
          </span>
        </div>
        <div style={{ display: "inline-flex", marginBottom: "2em" }}>
          <span>
            <h3>Q&amp;A with Mayor Ken Sim 🇨🇦</h3>{" "}
            <div>
              {" "}
              Mayor Ken Sim takes to one of the most open and honest stages in
              tech to answer your most pressing questions.
            </div>
          </span>
          <div style={{ marginTop: "5em", marginLeft: "1em" }}>
            <img className="image-size" src={kensim} />
          </div>
        </div>
        <div style={{ display: "inline-flex", marginBottom: "2em" }}>
          <div style={{ marginTop: "5em", marginRight: "1em" }}>
            <img className="image-size" src={whyz} />
          </div>
          <span>
            <h3>Q&amp;A with Kelly Rutherford 🎤</h3>{" "}
            <div>
              {" "}
              You know you love her – XOXO, Gossip Girl star Kelly Rutherford
              gives down-to-earth advice that can guide business leaders,
              entrepreneurs, and those simply looking for inner-growth, towards
              a future filled with possibilities.
            </div>
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
          <span>
            <h3>
              Tips for streaming and building communities with Tom Verrilli 🎮
            </h3>{" "}
            <div>
              {" "}
              Twitch chief product officer Tom Verrilli is a nerd at heart. Join
              this session to pick his brain on all things video games, music
              broadcast, creative content and more.
            </div>
          </span>
          <div style={{ marginTop: "5em" }}>
            <img className="image-size" src={tom} />
          </div>
        </div>

        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em", marginRight: "1em" }}>
            <img className="image-size" src={penny} />
          </div>
          <span>
            <h3>Q&amp;A with Penny Oleksiak 🏅</h3>
            <div>
              {" "}
              Canada’s most-decorated Olympian, Penny Oleksiak, gained
              international recognition after winning four medals at the 2016
              Olympic Games in Rio de Janeiro.{" "}
            </div>
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
          <span>
            <h3>
              Q&amp;A with DeRay Mckesson: You have more power than you think ✊
            </h3>{" "}
            <div>
              {" "}
              Have your questions ready for DeRay Mckesson, a leading voice in
              the Black Lives Matter movement and a co-founder of
              JoinCampaignZero.org and OurStates.org.{" "}
            </div>
          </span>
          <div style={{ marginTop: "5em", marginLeft: "1em" }}>
            <img className="image-size" src={blueblack} />
          </div>
        </div>
        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em", marginRight: "1em" }}>
            <img className="image-size" src={wayne} />
          </div>
          <span>
            <h3>Q&amp;A with Sarah Wayne Callies 🎬</h3>{" "}
            <div>
              {" "}
              Actor, writer and director, Sarah Wayne Callies will take the
              stage at Q&amp;A. Sarah has been an International Rescue Committee
              (IRC) ambassador for more than 13 years.{" "}
            </div>
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
          <span>
            <h3>Q&amp;A with Juju Smith-Schuster 🏈</h3>{" "}
            <div>
              {" "}
              Juju Smith-Schuster is a Super Bowl-winning NFL wide receiver for
              the New England Patriots, and an investor and advisor for World
              Champion Fantasy and PlayerX, a fantasy sports platform.{" "}
            </div>
          </span>
          <div style={{ marginTop: "5em", marginLeft: "1em" }}>
            <img className="image-size" src={juju} />
          </div>
        </div>
      </div>
    
    </section>
  );
};
export default Section3qa2;
