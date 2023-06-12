function Gadiv1() {
  return (
    <div style={{ marginTop: "3em" }}>
      <div
        style={{
          backgroundColor: "red",
          marginLeft: "1em",
          marginRight: "1em",
          borderRadius: "1em",
        }}
      >
        <div style={{ margin: "1em", color: "white" }} id="tickettype">
          <div id="mostpopular">
            <p style={{ marginLeft: "10em" }}>most popular</p>
          </div>
          <div id="tickettype">
            <div id="tickettype">
              <p> Ticket type</p>
              <h2 style={{ marginTop: "-0.5em" }}> General attendee</h2>
              <br />{" "}
            </div>
            <div style={{ marginLeft: "-1em", marginTop: "-1em" }} id="price">
              <div id="price" style={{ marginLeft: "1em", marginRight: "1em" }}>
                <div style={{ marginTop: "-2em", display: "inline-flex" }}>
                  <div>ca$</div>
                  <h1 style={{ marginTop: "-0.25em" }}>995</h1>
                </div>
                <div>CA$1,124 incl. taxes</div>
              </div>
              <div style={{ marginRight: "1em" }} id="book now">
                <button
                  style={{
                    color: "black",
                    borderRadius: "2em",
                    margin: "1em",
                    width: "100%",
                    height: "3em",
                  }}
                >
                  book now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="showbenefits"
        style={{
          color: "white",
          backgroundColor: "red",
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

export default Gadiv1;
