import React from 'react';
import './Footer_Style.css';
import { ImFacebook, ImInstagram, ImTwitter,ImYoutube } from "react-icons/im"; 
function Footer() {
  return (
    <div className="Footer">      
      <div className='Logo'>LOGO</div>
      <div className='Line'></div>
      <div className="SocialBox_wrap">
        <div className="SocialBox"><ImFacebook/></div>
        <div className="SocialBox"><ImInstagram/></div>
        <div className="SocialBox"><ImTwitter/></div>
        <div className="SocialBox"><ImYoutube/></div>
      </div>
      
    </div>        
  );
}

export default Footer;