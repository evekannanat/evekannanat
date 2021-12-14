import React from 'react';
import './VP5_Style.css';
import Expect from './Expect.js';
function VP5() {
  return (
    <div className="VP5">
      <div className="Question">What are you looking for your business?</div>
      <Expect />
      <div className="P1_wrap">
          <div class="P1">Let our team contact you.</div>
      </div>
      <div className="Email"> 
          <input class="Email_Box" type="email" placeholder="Enter your E-mail"></input>
      </div>
      <div className="Button_wrap">
          <button type="submit">Submit</button>
      </div>
    </div>
 
    
  );
}

export default VP5;