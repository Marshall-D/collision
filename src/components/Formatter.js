import Header from './Header';
import '../App.css';




function Formatter() {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <div>
        {/* <TopHeader/> */}
      </div>
      <div style={{ width: "100%" }}>
        <Header />
      </div>
      {/* <Navigation /> */}
      {/* <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <Outlet />
      </div> */}
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
}

export default Formatter;