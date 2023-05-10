import React from 'react';
import Review1 from "../assets/review1.png";
import Review2 from "../assets/review2.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Testimonials() {
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
    <div className='frame375'>
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
        
        
    </div>
    
  );
}

export default Testimonials;