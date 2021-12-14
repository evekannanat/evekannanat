import React from 'react';
import './VP3_Style.css';
import Boat from '../Item/Boat'
function VP3() {
  return (
    <div className="VP3"> 
      <div className="Text">
        <h1>Lorem</h1>
        <h1 style={{color:"rgb(143, 252, 226)"}}>ipsum  dolor</h1>
        <h1>sit amet</h1>
        <h2> Etiam tincidunt lorem eu neque hendrerit gravida </h2>
        <p>Donec pellentesque augue in tellus pretium, ac lacinia arcu consectetur. Integer porttitor massa interdum diam venenatis, nec ornare turpis eleifend. Vestibulum urna elit, malesuada et tortor vitae, pretium ultricies erat. </p>
        <button>About Us</button>
      </div>
      <div className="Boat_wrap">
      <Boat />
      </div>
    </div>        
  );
}

export default VP3;