import React from 'react';
import ImgWork from "../assets/Rectangle 818.png";
import ImgWork1 from "../assets/Rectangle 818 (1).png";
import ImgWork2 from "../assets/Rectangle 818 (2).png";
import ImgWork3 from "../assets/Rectangle 818 (3).png";
import ImgWork4 from "../assets/Rectangle 818 (4).png";
import ImgWork5 from "../assets/Rectangle 818 (5).png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Work() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
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
    <div className='frame-gallery'>
        <div className='frame1146'>
            <h3>See Our Work</h3>
            <p>See our Texas team at work</p>
        </div>
       <div className='carousel-work'>
        <Carousel responsive={responsive} infinite={true}>
            <div className='rct-818'> 
                <img src={ImgWork}/>
            </div>
            <div className='rct-818'> 
                <img src={ImgWork1}/>
            </div>
            <div className='rct-818'> 
                <img src={ImgWork2}/>
            </div>
            <div className='rct-818'> 
                <img src={ImgWork3}/>
            </div>
            <div className='rct-818'> 
                <img src={ImgWork4}/>
            </div>
            <div className='rct-818'> 
                <img src={ImgWork5}/>
            </div>
        </Carousel>
       </div>
       <div className='gallery-work'>
          <div>
            <img src={ImgWork} />
          </div>
          <div>
            <img src={ImgWork1} />
          </div>
          <div>
            <img src={ImgWork2} />
          </div>
          <div>
            <img src={ImgWork3} />
          </div>
          <div>
            <img src={ImgWork4} />
          </div>
          <div>
            <img src={ImgWork5} />
          </div>          
        </div>
    </div>
    
  );
}

export default Work;