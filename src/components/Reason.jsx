import React from 'react'
import "./Reason.css";
import "../App.css";
import image_1 from "../assets/image1.png";
import image_2 from "../assets/image2.png";
import image_3 from "../assets/image3.png";
import image_4 from "../assets/image4.png";
import tick from "../assets/tick.png";
import adidas from "../assets/adidas.png";
import nike from "../assets/nike.png";
import nb from "../assets/nb.png"
function Reason(){
return(
    <div className='Reason' id="three">
        <div className="left-r">
            <img src={image_1} alt=""/>
            <img src={image_2} />
            <img src={image_3} />
            <img src={image_4} />
        </div>
        <div className="why">
            <span>SOME REason</span>
           <div className='header-r'><span className='stroke'>why</span>
            <span>choose us?</span></div> <span id='hi'><img src={tick}/>over 140+ expert coaches</span><span  id='ello'><img src={tick}/>TRAIN SMARTER AND FASTER THAN BEFORE</span><span  id='hello'><img src={tick}/>1 FREE PROGRAM FOR NEW MEMBER</span><span id='cello'><img src={tick}/>RELIABLE PARTNERS</span> 
            <div className="ad"><span>OUR PARTNERS</span><img src={adidas} /><img src={nike} /><img src={nb} /></div>


        </div>
    </div>
)
}

export default Reason