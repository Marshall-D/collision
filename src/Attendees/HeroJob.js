import "../styles/home/Home.css";

const HeroJob = () => {
  return (
    <div>
      <section className="hero">
    
        <div className="container">
          <div className="row">
            <div className="col-md">
              <h1 className="full ">Jobs Board </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="col-md-6-p">
              Check out the Collision partner and speaker companies that are actively hiring during Collision 2023.

                <br />
                <br />
                Join us in October when we return to Toronto.
              </p>
            </div>
            <div className="col-md-6-center">
          
         

        
              <a
                style={{ marginTop: "2em", height: "60px" }}
                className="hero-btn-red "
                href="/tickets/attendees"
                rel=""
                target=""
              >
book tickets             </a>
            </div>
          </div>
        </div>
        <span class="hero-bottom-text"></span>
      </section>
    </div>
  );
};
export default HeroJob;
