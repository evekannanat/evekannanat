import React from 'react';
import './VP1_Style.css';
import Rocket from '../Item/Rocket';
import Cloud from '../Item/Cloud';
import Stair from '../Item/Stair';
import Moon from '../Item/Moon';
function VP1() {
  return (
    <div className="VP1">   
      <h1>Start up</h1>
      <h2>Like</h2>
      <h3>Pro</h3>
      <div className="Stair_wrap">
        <div className="Stair_Layer1"><Stair /></div>
        <div className="Stair_Layer2"><Stair /></div>
        <div className="Stair_Layer3"><Stair /></div>
        <div className="Stair_Layer4"><Stair /></div>
        <div className="Stair_Layer5"><Stair /></div>
        <div className="Stair_Layer6"><Stair /></div>
      </div>
      <div className="Moon_wrap"><Moon /></div>     
      <div className="Cloud_wrap"><Cloud /></div>
      <div className="Rocket_wrap">
        <Rocket />
      </div> 
    </div>        
  );
}

export default VP1;