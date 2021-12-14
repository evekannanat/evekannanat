import './VP2_Style.css';
import React, { useState} from 'react';
import { FaChevronLeft, FaChevronRight, FaRegLightbulb, FaRegEdit, FaCogs, FaUserCog, FaBullhorn, FaSearchDollar } from "react-icons/fa";

function VP2() { 
  const[slideMove, setSlideMove] = useState(0);  
  function prevClick() {
    setSlideMove(slideMove + 1600);
    if ((slideMove + 1600)>0) {
      setSlideMove(slideMove * 0);
    }
  }
  function nextClick() {
    setSlideMove(slideMove - 1600);
    if ((slideMove - 1600)<(-8000)) {
      setSlideMove(slideMove * 1);
    }
  }
      
 
  return (
    <div className="VP2">
      <h1>Aliquam tincidunt mauris.</h1>
      <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h2>
      <button id="Prev" onClick={prevClick}> <FaChevronLeft /></button>
      <button id="Next" onClick={nextClick}> <FaChevronRight /></button>
      <section>
      <div className="showSlide" style={{marginLeft : slideMove}}>
        <div className="Wrap Wrap1" >
          <div className="Circle">
            <FaRegLightbulb className='icon'/>
          </div>
          <div className="Textbox">
            <h3>Start Up</h3>
            <h4>your idea</h4>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</p>
          </div>     
        </div>

        <div className="Wrap Wrap2">
          <div className="Circle">
           <FaRegEdit className='icon'></FaRegEdit>
          </div>
          <div className="Textbox">
            <h3>create your</h3>
            <h4>planning</h4>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</p>
          </div>     
        </div>

        <div className="Wrap Wrap3">
          <div className="Circle">
            <FaCogs className='icon'></FaCogs>            
          </div>
          <div className="Textbox">
            <h3>flow of</h3>
            <h4>operation</h4>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</p>
          </div>     
        </div>

        <div className="Wrap Wrap4">
          <div className="Circle">
          <FaUserCog className='icon'></FaUserCog>
          </div>
          <div className="Textbox">
            <h3>Stable</h3>
            <h4>Management</h4>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</p>
          </div>     
        </div>

        <div className="Wrap Wrap5">
          <div className="Circle">
            <FaBullhorn className='icon'></FaBullhorn>
          </div>
          <div className="Textbox">
            <h3>Make your business</h3>
            <h4>Stand out</h4>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</p>
          </div>     
        </div>

        <div className="Wrap Wrap6">
          <div className="Circle">
           <FaSearchDollar className='icon'></FaSearchDollar>
          </div>
          <div className="Textbox">
            <h3>Let's find an</h3>
            <h4>investor</h4>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</p>
          </div>     
        </div>
      </div>
      </section>

    </div>    
  );
}

export default VP2;