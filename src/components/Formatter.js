import '../App.css';
import Bookings from '../Bookings/Bookings';

import Home from '../Home/Home';





function Formatter() {
  return (

    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      {/* <Home/> */}
      <Bookings/>
      
    </div>
  );
}

export default Formatter;