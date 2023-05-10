import React from 'react';
import Review1 from "../assets/review1.png";
import Review2 from "../assets/review2.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Client1 from "../assets/review.jpg";
import Client2 from "../assets/review (1).jpg";
import Client3 from "../assets/review (2).jpg";
import Client4 from "../assets/review (3).jpg";
import Client5 from "../assets/review (4).jpg";
import Client6 from "../assets/review (5).jpg";
import Client7 from "../assets/review (6).jpg";
import Client8 from "../assets/review (7).jpg";
import Client9 from "../assets/review (8).jpg";



function Testimonials() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
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
    <div id="testimonials" className='frame375'>
        <div className='frame375-box'>
            <h3>Video Testimonials from Our Clients</h3>
            <p>See why people just like you chose Garage Door Repair Company to fix their garages!</p>
        </div>
        <div className='carousel-flex'>
          <Carousel responsive={responsive} infinite={true}>
              <div>
                <img src={Review1} />
              </div>
              <div>
                <img src={Review2} />
              </div>
              <div>
                <img src={Review1} />
              </div>
          </Carousel>
        </div>
        <div className='gallery-testimonials'>
          <div>
            <img src={Client1} />
          </div>
          <div>
            <img src={Client2} />
          </div>
          <div>
            <img src={Client3} />
          </div>
          <div>
            <img src={Client4} />
          </div>
          <div>
            <img src={Client5} />
          </div>
          <div>
            <img src={Client6} />
          </div>
          <div>
            <img src={Client7} />
          </div>
          <div>
            <img src={Client8} />
          </div>
          <div>
            <img src={Client9} />
          </div>
          
        </div>
        
        
    </div>
    
  );
}

export default Testimonials;