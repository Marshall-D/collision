import "../styles/home/Home.css";
import qanda from '../images/qnadasvg.svg'

const HeroMediaWhat = () => {
  return (
    <div>
      <section className="hero">
      
    
      
        {/* <img
          src="https://web-summit-library.imgix.net/collision/2222/06/CCweb_herobg_Lupita_ryan-1.png?auto=compress%2Cformat&amp;ixlib=php-3.3.0&amp;s=c90a40879e96e87b53fcdc04b2ac6b8c"
          alt="ws-hero"
          style={{position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%", objectFit: "cover"}}
        /> */}
        <div className="container">
          <div className="row">
            <div className="col-md">
   
              <h1 className="full ">
What the Media say
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="col-md-6-p">
              Want to know what it's like to attend the "planet’s best tech conference"? Hear about it in the words of the world's leading tech journalists and global publications.

                <br />
                <br />

                Join us in Toronto this June.              </p>
            </div>
            <div className="col-md-6-center">
          
              <a
              style={{marginTop:"2em", height:"60px"}}
                className="hero-btn-red "
                href="/tickets/attendees"
                rel=""
                target=""
              >
Book tickets              </a>
              
            </div>
          </div>
        </div>
        <span class="hero-bottom-text"></span>
      </section>
    </div>
  );
};
export default HeroMediaWhat;
