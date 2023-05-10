import React from 'react'
import Logo from "../assets/logo-nav.png";
import MapPin from "../assets/map-pin.png";
import Group931 from "../assets/Group 931-md.png"

function Nav() {
  return (
    <div className='header-menu-phone'>
        <div className='nav'>
            <div className='logo-nav'>
                <img src={Logo}></img>
            </div>
            <div className='frame1506'>
                <img src={MapPin}></img>
                <p>Texas</p>
            </div>
            <div className='frame106'>
                <ul>
                    <a href='#about-us'><li>About us</li></a>
                    <a href=''><li>Services</li></a>
                    <a href=''><li>Testimonials</li></a>
                    <a href=''><li>Reviews</li></a>
                </ul>
            </div>
            <div className='frame137'>
                <img src={Group931}></img>
                <p>Call us now</p>
            </div>
        </div>
    </div>
  );
}

export default Nav;