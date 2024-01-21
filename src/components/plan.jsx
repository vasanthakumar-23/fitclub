import React from 'react';
import "./plan.css";
import "../App.css"
import { plansData } from '../data/plansData';
import whitetick from "../assets/whiteTick.png";

function Plan(){
    return (
        <div className="plan" id="four">
            <div className="blur plans-blur1"></div>
            <div className="blur plans-blur2"></div>
                <div className="heading">
                    <span className='stroke'>ready to start</span>
                    <span className='hu' style={{marginRight:"2rem"}}>your journey</span>
                    <span className='stroke ho' style={{paddingRight:'2rem'}}>with us</span>
                </div>
               <div className="plans">
                {plansData.map((plan,i)=>(
                    <div className="plan-container" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span> $ {plan.price}</span>
                        <div className="features">
                            {plan.features.map((feature,i)=>(

                            <div className="feature">
                                <img src={whitetick} />
                                 <span key={i}>{feature}</span>
                            </div>           
                            ))}
                        </div>
                        <div><span style={{color:'white',fontSize:"18px"}}>see more benefits  -></span>
                        </div>
                        <button className="btn">join now</button>
                    </div>
                ))}
               </div>
        </div>
    )
}

export default Plan