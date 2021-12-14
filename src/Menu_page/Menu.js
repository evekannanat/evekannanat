import '../Menu_page/Menu_Style.css';
import React, {useState} from 'react';
import {FaRegDotCircle} from 'react-icons/fa';
function Menu(){
    const [close, setClose] = useState("flex")
    function isClose() {
        setClose("none");
    }
    return (
        <div className="Menu" style={{display : close}}  >
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
    );
}
export default Menu;