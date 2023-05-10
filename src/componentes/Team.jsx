import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImgTeam from "../assets/Rectangle 845.png";
import ImgTeamB from "../assets/Rectangle 845 (1).png";
import ImgTeamC from "../assets/Rectangle 845 (2).png";
import ImgTeamD from "../assets/Rectangle 845 (3).png";
import ImgTeamE from "../assets/Rectangle 845 (4).png";





function CardTeam({ imagen, name, position}) {
    return (
        <div className='card-team-size'>
            <img src={imagen}/>
            <h5>{name}</h5>
            <p>{position}</p>
        </div>
    );
}

function Team() {
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
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className='frame-our-team'>
        <div className='frame1528'>
            <h3>Our Texas Team</h3>
            <p>Meet Our Professional Team</p>
        </div>
       
       <Carousel responsive={responsive} infinite={true} >
           <div className='card-team-flex'>
                <CardTeam 
                    imagen={ImgTeam}
                    name="Dante Ayala"
                    position="Garage door technician" />
            </div>
            <div className='card-team-flex'>
                <CardTeam 
                    imagen={ImgTeamB}
                    name="Reed Levy"
                    position="technical director" />
            </div>
            <div className='card-team-flex'>
                <CardTeam 
                    imagen={ImgTeamC}
                    name="David Kipperman"
                    position="Gate installation specialist" />
            </div>
            <div className='card-team-flex'>
                <CardTeam 
                    imagen={ImgTeamD}
                    name="Dillon Figueroa"
                    position="Garage door technician" />
            </div>
            <div className='card-team-flex'>
                <CardTeam 
                    imagen={ImgTeamE}
                    name="Keith Brandon"
                    position="Gate installation specialist" />
            </div>
        </Carousel>
    </div>
    
  );
}

export default Team;