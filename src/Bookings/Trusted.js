import aws from "../images/home/aws-logo-white.png";

function Trusted() {
  return (
    <div
      style={{
        backgroundColor: "blue",
        color: "white",
        marginTop: "2em"
      }}
    >
      <div
        style={{
          // backgroundColor: "blue",
          // color: "white",
          margin: "1em",
          marginBottom:"0",
          paddingTop: "2em",
        //   paddingBottom: "2em",
        }}
      >
        <div>
          <p>Trusted by </p>
        </div>
        <div style={{ display: "inline-flex" }}>
          <div style={{ height: "200px"}} >
            {" "}
            <img 
            style={{ height: "100px", width: "125px" }} src={aws} />
          </div> 
          <div style={{marginLeft:"2em", height: "200px"}}>
            {" "}
            <img 
            style={{ height: "100px", width: "125px" }}src={aws} />
          </div>
          </div> <div style={{ display: "inline-flex" }}>
          <div style={{ height: "200px"}} >
            {" "}
            <img 
            style={{ height: "100px", width: "125px" }} src={aws} />
          </div> 
          <div style={{marginLeft:"2em", height: "200px"}}>
            {" "}
            <img 
            style={{ height: "100px", width: "125px" }}src={aws} />
          </div>
          </div> <div style={{ display: "inline-flex" }}>
          <div style={{ height: "200px"}} >
            {" "}
            <img 
            style={{ height: "100px", width: "125px" }} src={aws} />
          </div> 
          <div style={{marginLeft:"2em", height: "200px"}}>
            {" "}
            <img 
            style={{ height: "100px", width: "125px" }}src={aws} />
          </div>
          </div> <div style={{ display: "inline-flex" }}>
          <div style={{ height: "200px"}} >
            {" "}
            <img 
            style={{ height: "100px", width: "125px" }} src={aws} />
          </div> 
          <div style={{marginLeft:"2em", height: "200px"}}>
            {" "}
            <img 
            style={{ height: "100px", width: "125px" }}src={aws} />
          </div>
          </div>

          {/* <div>
            {" "}
            <img src={aws} />
          </div>{" "}
          <div>
            {" "}
            <img src={aws} />
          </div>{" "}
          <div>
            {" "}
            <img src={aws} />
          </div>{" "}
          <div>
            {" "}
            <img src={aws} />
          </div>{" "}
          <div>
            {" "}
            <img src={aws} />
          </div> */}
      </div>
    </div>
  );
}

export default Trusted;
