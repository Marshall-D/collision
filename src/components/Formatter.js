import Header from './Header';
import '../App.css';
import Hero from './Hero';
import Section2 from './Section2';




function Formatter() {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <div>
        {/* <TopHeader/> */}
      </div>
      <div style={{ width: "100%" }}>
        <Header />
      </div>
      <Hero/>
      <Section2/>

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