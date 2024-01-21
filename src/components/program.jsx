import React from "react";
import "./program.css"
import "../App.css";
import {programsData} from "../data/programsData"
import Right from "../assets/rightArrow.png"
 export default function Program(){
    return(
        <div className="program" id="two">
          <div className="header"><span className="stroke">Explore our</span><span>programs</span><span className="stroke">to shape you </span></div>

        
        <div className="programcategories">
          {programsData.map((program)=>(
          <div className="category"><span>{program.image}</span><span>{program.heading}</span><span>{program.details}</span>
         <div className="joinnow"><span>Join Now </span><img src={Right}  style={{marginTop:"15px",width:"16px",height:"12px"}}/></div> 
          </div>
         ))}
        </div>
  </div>

    )
}