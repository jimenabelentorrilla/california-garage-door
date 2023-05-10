import React from 'react';
import ImgJob0 from "../assets/Frame 1406.png";
import ImgJob1 from "../assets/Frame 1406 (1).png";
import ImgJob2 from "../assets/Frame 1406 (2).png";
import ImgJob3 from "../assets/Frame 1406 (3).png";
import ImgJob4 from "../assets/Frame 1406 (4).png";
import ImgJob5 from "../assets/Frame 1406 (5).png";
import ImgJob6 from "../assets/Frame 1406 (6).png";
import ImgJob7 from "../assets/Frame 1406 (7).png";
import ImgJob8 from "../assets/Frame 1406 (8).png";
import Frame1422 from "../assets/Frame 1422.png";
import ArrowIzq from "../assets/arrow izq.png";
import ArrowDer from "../assets/arrow der.png";

function Job ({img, subtitle }){
    return (
        <div className='frame1408'>
            <img src={img}/>
            <div className='frame1407'> 
                <p>{subtitle}</p>
            </div>
        </div>
    );
}

function Componente() {
return (
    <div id="services" className='frame1190'>
        <div className='frame1190-flex'>
            <h3>Texas Garage Door Repair Services</h3>
            <p>We fix all types and components of garage doors or gates</p>
            <div className='jobs-flex'>
                <Job 
                    img={ImgJob0}
                    subtitle="24/7 Emergency Garage Door Repair" />
                <Job 
                    img={ImgJob1}
                    subtitle="Garage door repair" />
                <Job 
                    img={ImgJob2}
                    subtitle="Garage Door Opener Repair" />
                <Job 
                    img={ImgJob3}
                    subtitle="Garage Door Springs Replacement" />
                <Job 
                    img={ImgJob4}
                    subtitle="New Garage Door Installation" />
                <Job 
                    img={ImgJob5}
                    subtitle="New Gate Installation " />
                <Job 
                    img={ImgJob6}
                    subtitle="Gate Repair Services" />
                <Job 
                    img={ImgJob7}
                    subtitle="Full-Service Commercial Gate & Garage Repair" />
                <Job 
                    img={ImgJob8}
                    subtitle="Damaged garage door tracks fix" />                                   
            </div>
            <div className='call-flex'>
                <div className='arrow'>
                    <img src={ArrowIzq} />
                </div>
                <div className='frame136-2'>
                    <div>
                        <img className='phone-width' src={Frame1422}/>
                    </div>
                    <span>CALL NOW</span>
                </div>
                <div className='arrow'>
                    <img src={ArrowDer} />
                </div>
            </div>
        </div>
    </div>
);
}

export default Componente;