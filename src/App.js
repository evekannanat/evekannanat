import React, {useState} from 'react';
import './App.css';
import VP1 from './1_VP/VP1';
import VP2 from './2_VP/VP2';
import VP3  from './3_VP/VP3';
import VP4 from './4_VP/VP4';
import VP5 from './5_VP/VP5';
import Footer from './Footer/Footer';
import {FaBars} from "react-icons/fa";
function App() {
  const [open, setOpen] = useState("none");
  function isOpen() {
    setOpen("flex");
    console.log("opened")
  }
  function isClose() {
    setOpen("none");
  }
  return (
    <div className="App">
      <button onClick={isOpen}  className="Open"><FaBars /></button>
       <div className="Menu" style={{display : open}}  >
            <div className="Window"onClick={isClose} ></div>
            <div className="Little_window">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Survice</li>
                    <li>Contact</li>
                </ul>  
            </div>
        </div>
      <div class="Logo">LOGO</div>
      <VP1 />  
      <VP2 />
      <VP3 />
      <VP4 />
      <VP5 />
      <Footer />
    </div>


  );
}

export default App;