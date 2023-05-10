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
                <img className="ammar" src={Ammar} />
            </div>
            <div>
                <img className="wayne" src={Wayne} />
            </div>
            <div>
                <img className="chi" src={Chi} />
            </div>
            <div>
                <img className="clopay" src={Clopay} />
            </div>
            <div>
                <img className="raynor" src={Raynor} />
            </div>
            <div>
                <img className="overhead" src={Overhead} />
            </div>
            <div>
                <img className="liftmaster" src={Liftmaster} />
            </div>
            <div>
                <img className="genie" src={Genie} />
            </div>
            <div>
                <img className="sommer" src={Sommer} />
            </div>
            
        </div>
    </div>
  )
}

export default Brands;