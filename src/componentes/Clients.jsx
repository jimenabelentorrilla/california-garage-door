import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Ellipse236A from "../assets/Ellipse 236.png";
import Ellipse236B from "../assets/Ellipse 236 (1).png";
import Ellipse236C from "../assets/Ellipse 236 (2).png";
import Ellipse236D from "../assets/Ellipse 236 (3).png";
import Ellipse236E from "../assets/Ellipse 236 (4).png";
import Ellipse236F from "../assets/Ellipse 236 (5).png";
import Stars from "../assets/stars.png";

function CardClient({ profile , name, paragraph}) {
    return (
        <div className='bg-card'>
            <div className='card-client-flex'>
                <div>
                    <img className='profile-size' src={profile}/>
                </div>
                <div className='span-stars'>
                    <span>{name}</span>
                    <div>
                        <img src={Stars}/>
                    </div>
                    
                </div>
            </div>
            <p>{paragraph}</p>
        </div>
    );
}

function Clients() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div className='reviews'>
        <div className='frame1525'>
            <h3>See What Our Clients Say</h3>
            <p>See Why People Just Like You Choose Us</p>
        </div>
       
       <Carousel responsive={responsive} infinite={true}>
            <div className="frame1062">
                <CardClient 
                profile= {Ellipse236A}
                name="Marvin McKinney"
                paragraph="Well it was a couple of weeks overdue but the wait was worth it, I am delighted with my new door. The guys who fitted it were excellent, fast and efficient. "/>
            </div>
            <div className="frame1062">
                <CardClient 
                profile= {Ellipse236B}
                name="Jerome Bell"
                paragraph="Excellent installation by the gentleman that fitted the garage door, so neat and tidy. Great company to deal with. Highly recommended."/>
            </div>
            <div className="frame1062">
                <CardClient 
                profile= {Ellipse236C}
                name="Arlene McCoy"
                paragraph="Most impressed with this company from the first gentleman who surveyed the job to the fitters who were installed. The customer service with this company is genuinely excellent. "/>
            </div>
            <div className="frame1062">
                <CardClient 
                profile= {Ellipse236D}
                name="Susan Lumiere"
                paragraph="Absolutely excellent!! After another company gave me an outrageously inflated estimate four times higher than reasonable, I was lucky enough to find Garage Door Repair Company."/>
            </div>
            <div className="frame1062">
                <CardClient 
                profile= {Ellipse236E}
                name="Susana Horia"
                paragraph="Great experience! Submitted an on-line estimate request and Sean called me within an hour and came over that day to give me an estimate.  We discussed what needed to be done to replace the garage door."/>
            </div>
            <div className="frame1062">
                <CardClient 
                profile= {Ellipse236F}
                name="La gallina turuleca"
                paragraph="Great experience! Submitted an on-line estimate request and Sean called me within an hour and came over that day to give me an estimate.  We discussed what needed to be done to replace the garage door."/>
            </div>
        </Carousel>
    </div>
    
  );
}

export default Clients;