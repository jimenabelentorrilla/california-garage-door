import React from 'react';
import CheckImagen from "../assets/Frame 1405.png";
import UsImage from "../assets/Group 996.jpg";

function CheckList ({ paragraph }){
    return (
        <div className='frame940'>
            <img src={CheckImagen}/>
            <p>{paragraph}</p>
        </div>
    );
}

function SectionTwo() {
  return (
    <div>
        <div className='frame1195'>
            <h2>Garage Door Repair<br/>Experts in Texas <br/>Since 2006</h2>
            <div className='frame919'>
                <CheckList 
                    paragraph= "We’re a Family-Owned Business that’s been giving quality service to area locals since 2006." />
                <CheckList 
                    paragraph= "Our vision is to become the most preferred & trusted garage door repair service in US" />
                <CheckList 
                    paragraph= "We’ve helped thousands and thousands of residents with their garage door garage repairs and door installation" />
                <CheckList 
                    paragraph= "We consistently deliver high standard and prompt service for homeowners and businesses in Texas" />
            </div>
            <div className='img-group-flex'>
                <img className="img-group" src={UsImage}/>
            </div>
        </div>
    </div>
  )  
}

export default SectionTwo;