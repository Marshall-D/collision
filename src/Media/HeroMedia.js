import "../styles/home/Home.css";
import qanda from '../images/qnadasvg.svg'

const HeroMedia = () => {
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
Join Us As  Media at collision 2023
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="col-md-6-p">
              Journalists representing the world’s largest media outlets will take part in Collision 2023, right at the crossroads of international news and tech. 

                <br />
                <br />

                Apply for media accreditation and join us in Toronto this June.              </p>
            </div>
            <div className="col-md-6-center">
            <div className="form_field">
              <div>
                <input
                  className="input"
                  type="email"
                  name="email_address"
                  required=""
                  id="field_94293030"
                  placeholder="    Email address"
                  autocomplete="new-password"
                  maxlength="100"
                  data-field-label="Email address"
                  value=""
                />
                {/* <span className="floating-Label">Email address*</span> */}
              </div>
            </div>
              <a
              style={{marginTop:"2em", height:"60px"}}
                className="hero-btn-red "
                href="/tickets/attendees"
                rel=""
                target=""
              >
                Apply for  2023 media accreditation.              
              </a>
              
            </div>
          </div>
        </div>
        <span class="hero-bottom-text"></span>
      </section>
    </div>
  );
};
export default HeroMedia;
