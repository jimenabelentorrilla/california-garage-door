import React from 'react'
import Logo from "../assets/cgr california 1.png";
import Frame1005 from "../assets/Frame 1505.png";
import Frame1006 from "../assets/Frame 1506.png";

function Nav() {
  return (
    <div className='header-menu-phone'>
        <div className='nav'>
            <div>
                <img src={Logo}></img>
            </div>
            <div>
                <img src={Frame1006}></img>
            </div>
            <div>
                <img src={Frame1005}></img>
            </div>
        </div>
    </div>
  )
}

export default Nav;