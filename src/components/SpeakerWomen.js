import anjali from "../images/women/anjali.jpg";
import lupita from "../images/women/lupita.jpg";
import michelle from "../images/women/michelle.jpg";
import suzanne from "../images/women/suzanne.jpg";
import sally from "../images/women/sally.jpg";
import han from "../images/women/han.png";
import melania from "../images/women/melania.png";
import nicole from "../images/women/nicole.png";
import sairah from "../images/women/sairah.png";
import serena from "../images/women/serena.png";
import sophia from "../images/women/sophia.png";
import ukonwa from "../images/women/ukonwa.jpeg";



import blueblack from "../images/speakers/blueblack.avif";

const SpeakerWomen = () => {
  return (
    <div className="container">
      <h2 style={{ color: "blue" }}>
        MEET THE MEDIA ATTENDEES JOINING US IN 2023{" "}
      </h2>
      <div className="inner-container">
        <table>
          <tr>
            <td>
              <div className="image">
                <img className="image-container" src={anjali} />
                <p className="image-text">
                  Gideon Lichfield <br />
                  Global Editorial Director <br />
                  Wired{" "}
                </p>
              </div>
            </td>

            <td>
              <div className="image">
                <img className="image-container" src={lupita} />
                <p className="image-text">
                  Danielle Belton <br />
                  Editor-in-chief <br />
                  HuffPost{" "}
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="image">
                <img className="image-container" src={michelle} />
                <p className="image-text">
                  Nick Thompson
                  <br />
                  CEO <br />
                  The Atlantic{" "}
                </p>
              </div>
            </td>
            <td>
              <div className="image">
                <img className="image-container" src={suzanne} />
                <p className="image-text">
                  Abbie Lundberg <br />
                  Editor-in-chief
                  <br />
                  MIT Sloan Management Review{" "}
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="image">
                <img className="image-container" src={sally} />
                <p className="image-text">
                  Steven Levy
                  <br />
                  Editor-at-large
                  <br />
                  Wired{" "}
                </p>
              </div>
            </td>
            <td>
              <div className="image">
                <img className="image-container" src={han} />
                <p className="image-text">
                  Daniel Klaidman <br />
                  Editor-in-Chief <br />
                  Yahoo! News{" "}
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="image">
                <img className="image-container" src={melania} />
                <p className="image-text">
                  Susan Li <br />
                  Business Correspondent <br />
                  Fox Business{" "}
                </p>
              </div>
            </td>
            <td>
              <div className="image">
                <img className="image-container" src={nicole} />
                <p className="image-text">
                  Steve Clemons
                  <br />
                  Founding editor-at-large <br />
                  Semafor{" "}
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="image">
                <img className="image-container" src={sairah} />
                <p className="image-text">
                  Felice Maranz <br />
                  Editor of Markets Live <br />
                  Bloomberg{" "}
                </p>
              </div>
            </td>
            <td>
              <div className="image">
                <img className="image-container" src={serena} />
                <p className="image-text">
                  Bill Owens <br />
                  Executive Producer of 60 Minutes
                  <br />
                  CBS News{" "}
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="image">
                <img className="image-container" src={sophia} />
                <p className="image-text">
                  Michael Isikoff <br />
                  Chief Investigative Correspondent <br />
                  Yahoo! News{" "}
                </p>
              </div>
            </td>
            <td>
              <div className="image">
                <img className="image-container" src={ukonwa} />
                <p className="image-text">
                  Cristiana Sousa Cruz
                  <br />
                  Deputy Editor-in-chief <br />
                  GLOBO{" "}
                </p>
              </div>
            </td>
          </tr>
        
        </table>
      </div>
    </div>
  );
};
export default SpeakerWomen;
