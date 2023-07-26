
import tom from "../../images/speakers/tom.avif";
import blueblack from "../../images/speakers/blueblack.avif";
import penny from "../../images/speakers/penny.avif";
import anthony from "../../images/speakers/anthony.avif";
import kim from "../../images/speakers/kim.avif";
import gina from "../../images/speakers/gina.avif";
import josh from "../../images/speakers/josh.avif";
import wayne from "../../images/speakers/wayne.avif";
import phil from "../../images/speakers/phil.avif";
import juju from "../../images/speakers/juju.avif";
import kensim from "../../images/speakers/kensim.avif";
import michael from "../../images/speakers/michael.avif";
import melissa from "../../images/speakers/melissa.avif";
import sean from "../../images/speakers/sean.avif";
import mustafa from "../../images/speakers/mustafa.avif";
import wesley from "../../images/speakers/wesley.avif";
import sarah from "../../images/speakers/sarah.png";
import whyz from "../../images/speakers/whyz.avif";
import "../../styles/home/Speaker2.css";


const Speakerqa = () => {
  return (
    <div className="container">
      <h2  className="textSize" style={{ color: "blue" }}>MEET SOME OF OUR 2023 Q AND A SPEAKERS</h2>
      <div className="inner-container">
        <table>
          <tr>
            <td>
              <div className="image">
                <img className="image-contain" src={tom} />
                <p className="image-text">
                  Tom Verrilli
                  <br />
                  Chief Product Officer <br />
                  Twitch
                </p>
              </div>
            </td>

            <td>
              <div className="image">
                <img className="image-contain" src={blueblack} />
                <p className="image-text">
                  DeRay Mckesson <br />
                  Civil Rights Activist &amp; Podcaster <br />
                  pod save the people{" "}
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="image">
                <img className="image-contain" src={penny} />
                <p className="image-text">
                  Penny Oleksiak <br />
                  Olympian Swimmer <br />
                  Canada
                </p>
              </div>
            </td>
            <td>
              <div className="image">
                <img className="image-contain" src={anthony} />
                <p className="image-text">
                  Anthony Scaramucci <br />
                  Founder <br />
                  SkyBridge{" "}
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="image">
                <img className="image-contain" src={kim} />
                <p className="image-text">
                  Kimberlie Le <br />
                  Co-founder &amp; CEO <br />
                  Prime Roots{" "}
                </p>
              </div>
            </td>
            <td>
              <div className="image">
                <img className="image-contain" src={gina} />
                <p className="image-text">
                  Geena Jackson <br />
                  Executive Producer, Creator, Core Judge
                  <br />
                  Bear's Lair{" "}
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="image">
                <img className="image-contain" src={josh} />
                <p className="image-text">
                  Josh Richards <br />
                  Founder &amp; Chairman <br />
                  CrossCheck Studios{" "}
                </p>
              </div>
            </td>
            <td>
              <div className="image">
                <img className="image-contain" src={wayne} />
                <p className="image-text">
                  Sarah Wayne Callies
                  <br />
                  Actor, director &amp; IRC Ambassador <br />
                  International Rescue Committee{" "}
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="image">
                <img className="image-contain" src={phil} />
                <p className="image-text">
                  Phil Wiser <br />
                  EVP &amp; CTO <br />
                  Paramount Global{" "}
                </p>
              </div>
            </td>
            <td>
              <div className="image">
                <img className="image-contain" src={juju} />
                <p className="image-text">
                  Juju Smith-Schuster <br />
                  Super Bowl LVII Champ &amp; Wide Receiver <br />
                  New England Patriots{" "}
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="image">
                <img className="image-contain" src={kensim} />
                <p className="image-text">
                  Ken Sim <br />
                  Mayor <br />
                  City of Vancouver{" "}
                </p>
              </div>
            </td>
            <td>
              <div className="image">
                <img className="image-contain" src={michael} />
                <p className="image-text">
               Michael le
                  <br />
                  Co-Founder  <br />
Joystick                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="image">
                <img className="image-contain" src={melissa} />
                <p className="image-text">
                Melissa Lantsman<br />
                Deputy Leader of Conservative Party of Canada <br />
                Government of Canada
                </p>
              </div>
            </td>
            <td>
              <div className="image">
                <img className="image-contain" src={sean} />
                <p className="image-text">
                Sean Fraser<br />
                  Minister of Immigration, Refugees &amp; Citizenship                  <br />
Government of Canada                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="image">
                <img className="image-contain" src={mustafa} />
                <p className="image-text">
                Mustafa Suleyman
                  <br />
                  Co-Founder and CEO <br />
                  Inflection AI
                </p>
              </div>
            </td>
            <td>
              <div className="image">
                <img className="image-contain" src={wesley} />
                <p className="image-text">
                Wesley Chan <br />
                  Co-founder &amp; Managing Partner
                  <br />
                  FPV Ventures                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="image">
                <img className="image-contain" src={sarah} />
                <p className="image-text">
                  Sarah Guo
                  <br />
                  Founder <br />
                  Conviction
                </p>
              </div>
            </td>
            <td>
              <div className="image">
                <img className="image-contain" src={whyz} />
                <p className="image-text">
                Kelly Rutherford <br />
                Actor &amp; Investor                  <br />
                Whyzzer             </p>
              </div>
            </td>
          </tr>
     
        </table>
      </div>
    </div>
  );
};
export default Speakerqa;
