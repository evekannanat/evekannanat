import React from 'react';
import './Expext_Style.css';
function Expect() {
  return (
    <div className="Expect_container">      
        <div>            
            <label>
              <input type="checkbox" value="Consulting" />   
              <span>Consultant</span>
            </label>
        </div>
        <div>            
            <label>
              <input type="checkbox" value="Consulting" />   
              <span>Planning</span>
            </label>
        </div>
        <div>            
            <label>
              <input type="checkbox" value="Consulting" />   
              <span>Operations</span>
            </label>
        </div>
        <div>            
            <label>
              <input type="checkbox" value="Consulting" />   
              <span>Management</span>
            </label>
        </div>
        <div>            
            <label>
              <input type="checkbox" value="Consulting" />   
              <span>Advertising</span>
            </label>
        </div>
        <div>            
            <label>
              <input type="checkbox" value="Consulting" />   
              <span>Investor</span>
            </label>
        </div>
    </div>    
  );
}

export default Expect;