import React from 'react';
import './Rocket_Style.css';
function Rocket() {
  return (
    <div className="Rocket">   
        <div className="Rocket_Head1"></div>
        <div className="Rocket_Head2"></div>
        <div className="Rocket_Body1"></div>
        <div className="Rocket_Body2"></div>
        <div className="Wing1"></div>
        <div className="Wing2"></div>
        <div className="Frame_container">
          <div className="Frame Frame1"></div>
          <div className="Frame Frame2"></div>
          <div className="Frame Frame3"></div>
          <div className="Frame Frame4"></div>
        </div>
        <div className="Rocket_window"></div>
    </div>        
  );
}

export default Rocket;