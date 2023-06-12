function Exhibition() {
  return (
    <div style={{ marginTop: "1em" }}>
      <div
        style={{
          backgroundColor:" #C0C0C0",
          marginLeft: "1em",
          marginRight: "1em",
          borderRadius: "1em",
        }}
      >
        <div style={{ margin: "1em",  color: "black" }} id="tickettype">
         
          <div id="tickettype"  
          >
            <div id="tickettype" 
                     style={{ paddingTop:"2em"}}          

            >
              <p > Ticket type</p>
              <h2 style={{ marginTop: "-0.5em" }}> Exhibition floor only</h2>
              <br />{" "}
            </div>
            <div style={{ marginLeft: "-1em", marginTop: "-1em" }} id="price">
              <div id="price" style={{ marginLeft: "1em", marginRight: "1em" }}>
                <div style={{ marginTop: "-2em", display: "inline-flex" }}>
                  <div>ca$</div>
                  <h1 style={{ marginTop: "-0.25em" }}>995</h1>
                </div>
                <div>CA$1,014 incl. taxes</div>
              </div>
              <div style={{ marginRight: "1em" }} id="book now">
                <button
                  style={{
                    color: "white",
                    backgroundColor:"grey",
                    // borderRadius: "2em",
                    margin: "1em",
                    width: "100%",
                    height: "3em",
                  }}
                >
Sold out                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="showbenefits"
        style={{
          color: "black",
          backgroundColor: " #C0C0C0",
          borderRadius: "1em",
          paddingTop: "0.1em",
          margin: "1em",
          marginTop: "-1em",
          height: "3em",
        }}
      >
        <p style={{ marginLeft: "2em", marginBottom: "2em" }}> show benefits</p>
      </div>

      {/* <div  id="showbeneifts hidden"
       style={{
        color: "white",
        backgroundColor: "red",
        // borderRadius: "1em",
        paddingTop: "0.1em",
        margin: "1em",
        marginTop: "-1em",
        height: "200px",
      }}
      >
      <p style={{ marginLeft: "2em", marginBottom: "2em" }}> show benefits</p>
      <p style={{ marginLeft: "2em", marginBottom: "2em" }}> show benefits</p>
      <p style={{ marginLeft: "2em", marginBottom: "2em" }}> show benefits</p>
      <p style={{ marginLeft: "2em", marginBottom: "2em" }}> show benefits</p>
      <p style={{ marginLeft: "2em", marginBottom: "2em" }}> show benefits</p>
      <p style={{ marginLeft: "2em", marginBottom: "2em" }}> show benefits</p>
      </div> */}
    </div>
  );
}

export default Exhibition;
