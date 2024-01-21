import React from "react";
import "./Hero.css";
import {motion} from "framer-motion";
import "../App.css";
import Header from "./header";
import hero_img from "../assets/hero_image.png";
import hero_img_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import NumberCounter from "number-counter"


export default function Hero(){
    const transition={type:'spring',duration:3}
    return(
        <div className="hero" id='one'>
            <div className="left-h">
            <div className="blur hero-blur"></div>
                 <Header/>
                 <div className="bestad"> 
                 <motion.div 
                 initial={{left:"238px"}} whileInView={{left:"8px"}} transition={{...transition,type:'tween'}} className="orange">
                 </motion.div><span>the best fitness club in the town</span></div>
                 <div className="hero-heading">
                    <div><h1 style={{marginBottom:"10px"}}><span className="stroke">Build</span> Your</h1></div>
                    <div><h1 style={{marginTop:"0px"}}>Ideal body</h1></div>
                    <div>In here we will help you to shape and build your ideal body and live up your life to fullest</div>
                    <div class="report"><div><span><NumberCounter end={140} start={100} delay="4" prefix="+"/></span><div className="note">Expert coaches</div></div>
                        <div><span><NumberCounter end={950} start={800} delay="4" prefix="+"/></span><div className="note">Members joined</div></div>
                        <div><span><NumberCounter end={50} start={15} delay="4" prefix="+"/></span><div className="note">FITNESS PROGRAM</div></div>
                    </div>   
                 </div>

                 </div>
            <div className="right-h">
                <button id="join">Join</button>
                <img src={hero_img} className="heroimg" />
                <motion.img 
                 initial={{x:150}} whileInView={{x:0}} transition={transition} src={hero_img_back} className="curve"  />  
                <div class="hero-btn"><button>Get Started</button><button>Learn More</button></div>   
               
               <motion.div 
               initial={{x:100}} whileInView={{x:0}} transition={transition}className="heart-rate">  <img src={Heart} className="heart"  />  <p className="note" style={{paddingTop:"25px",position:"relative",top:"30px"}}>Heart Rate</p> <p style={{fontSize:'22px',color:"white",}}>160 bpm</p></motion.div>

                                                                                                         
            </div>
        </div>
    )
}