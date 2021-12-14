import React from 'react';
import './VP4_Style.css';
import { FaUserFriends, FaPencilRuler,FaSistrix,  FaCheck } from "react-icons/fa";
function VP4() {
  return (
    <div className="VP4">  
      <h1>Our Process</h1>
      <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h2>
      <div className="Process_container">
        <div className="Box">
          <div className="circle_frame"> <FaUserFriends /></div>
          <div className="Textbox">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a maximus nibh. Suspendisse quis dui id ex porta commodo eget in massa. </div>
        </div>
        <div className="Box">
          <div className="circle_frame"><FaPencilRuler /></div>
          <div className="Textbox">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a maximus nibh. Suspendisse quis dui id ex porta commodo eget in massa. </div>        
        </div>
        <div className="Box">
          <div className="circle_frame"><FaSistrix /></div>
          <div className="Textbox">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a maximus nibh. Suspendisse quis dui id ex porta commodo eget in massa. </div>
        </div>
        <div className="Box">
          <div className="circle_frame"><FaCheck /></div>
          <div className="Textbox">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a maximus nibh. Suspendisse quis dui id ex porta commodo eget in massa. </div>
        </div>
      </div>
    </div>        
  );
}

export default VP4;