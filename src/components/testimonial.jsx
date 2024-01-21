import React,{useState} from 'react';
import {motion }from "framer-motion"
import "./testimonial.css";
import {testimonialsData} from "../data/testimonialsData.js";
import  "../App.css";
import right from "../assets/rightArrow.png"
import left from "../assets/leftArrow.png"

function Testimonial(){
    const transition={type:"spring",duration:3}
    const [value,setValue]=useState(0);
    const tvalue=testimonialsData.length;
    return(
        <div className="test" id="five">
            <div className="test-l">
                <span>testimonials</span>
                <span className="stroke">what they</span>
                <span>say about us</span>
               <motion.span
               key={value}
               initial={{opacity:0,x:-100}}animate={{opacity:1,x:0}}transition={transition}> {testimonialsData[value].review}</motion.span>
               <span id="temp"style={{textTransform:"uppercase"}}>
                <span style={{color:"orange"}}>{testimonialsData[value].name}</span> ~ {"   "}<span>{testimonialsData[value].status}</span>
               </span>
            </div>
            <div className="test-r">
                <motion.div
                initial={{opacity:0,x:-150}} whileInView={{opacity:1,x:0}} transition={transition}></motion.div>
                <motion.div  initial={{opacity:0,x:150}} whileInView={{opacity:1,x:0}} transition={transition}></motion.div>
                <span id='arrow'><img onClick={()=>{value===0?setValue(tvalue-1):setValue((prev)=>prev-1)}} src={left} /> < img onClick={()=>{value===tvalue-1?setValue(0):setValue((prev)=>prev+1) }} src={right} / ></span>
              <motion.img 
              id="hi" key={value}initial={{opacity:0,x:100}}animate={{opacity:1,x:0}}transition={{transition}}src={testimonialsData[value].image} alt="" />  
            </div>
        </div>
    )
}




export default Testimonial;