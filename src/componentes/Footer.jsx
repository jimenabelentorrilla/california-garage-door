import React from 'react'
import LogoFooter from "../assets/LogoFooter.png";
import Group931 from "../assets/Group 931.png";
import Frame1177 from "../assets/Frame 1177.png";
import Frame1178 from "../assets/Frame 1178.png";
import Frame1179 from "../assets/Frame 1179.png";

function Footer() {
  return (
    <div className='rectangle814'>
        <div className='footer-flex'>
            <div className='footer-flex-tablet'>
                <div>
                    <img src={LogoFooter}/>
                </div>
                <div className='tlph-flex'>
                    <img src={Group931}/>
                    <p>999 999 9999</p>
                </div>
                <div className='paragraph-footer'>
                    <p>Local Family Owned Garage Repair <br />and Installation Service that Comes<br />to  the Rescue 24/7</p>
                </div>
            </div>
            
            <div className='frames-str-ftr'>
                <div>
                    <img src={Frame1177}/>
                </div>
                <div>
                    <img src={Frame1178}/>
                </div>
                <div>
                    <img src={Frame1179}/>
                </div>
            </div>
        </div>
        
        
    </div>
  );
}

export default Footer;