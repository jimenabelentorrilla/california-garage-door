import React from 'react';
import PointRed from "../assets/Point.png";
import Google from "../assets/Frame 1047.png";
import Yelp from "../assets/Frame 1048.png";
import Tel from "../assets/Frame 1422.png";
import Boy from "../assets/garage-boy.png";

function Header() {
  return (
    <div className='header-phone'>
        <div className='header-flex'>
            <div className='header-title-parag'>
                <h1>Garage door repair and installation</h1>
                <p>Serving homeowners all over Texas</p>
            </div>
            <div>
                <div className='frame1438'>
                    <div className='li-flex'>
                        <div>
                            <img src={PointRed} />
                        </div>
                        <div>
                            <p>24/7 Emergency Service Available</p>
                        </div>
                    </div>
                    <div className='li-flex'>
                        <div>
                            <img src={PointRed} />
                        </div>
                        <div>
                            <p>Licensed and Insured</p>
                        </div>
                    </div>
                    <div className='li-flex'>
                        <div>
                            <img src={PointRed} />
                        </div>
                        <div>
                            <p>Your Local Garage Door Repair Company</p>
                        </div>
                    </div>
                    <div className='li-flex'>
                        <div>
                            <img src={PointRed} />
                        </div>
                        <div>
                            <p>Same Day Service Available</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='frame1049'>
                <div>
                    <img src={Yelp} />
                </div>
                <div>
                    <img  src={Google} />
                </div>
            </div>
            <div className='frame136'>
                <div className='frame1063'>
                    <img src={Tel}/>
                    <p>999-999-9999</p>
                </div>
            </div>
            <div>
                <img className="boy" src={Boy}/>
            </div>
                
        </div>
    </div>
  );
}

export default Header;