import React from 'react'
import Chi from "../assets/chi.png";
import Ammar from "../assets/amarr.png";
import Clopay from "../assets/clopay.png";
import Genie from "../assets/genie.png";
import Liftmaster from "../assets/liftmaster.png";
import Overhead from "../assets/overhead.png";
import Raynor from "../assets/raynor.png";
import Sommer from "../assets/sommer.png";
import Wayne from "../assets/wayne.png";

function Brands() {
  return (
    <div className='frame1182'>
        <h3>We Repair All Garage Door And Gate Brands in Texas</h3>
        <div className='brands-flex'>
            <div>
                <img src={Ammar} />
            </div>
            <div>
                <img src={Wayne} />
            </div>
            <div>
                <img src={Chi} />
            </div>
            <div>
                <img src={Clopay} />
            </div>
            <div>
                <img src={Raynor} />
            </div>
            <div>
                <img src={Overhead} />
            </div>
            <div>
                <img src={Liftmaster} />
            </div>
            <div>
                <img src={Genie} />
            </div>
            <div>
                <img src={Sommer} />
            </div>
            
        </div>
    </div>
  )
}

export default Brands;