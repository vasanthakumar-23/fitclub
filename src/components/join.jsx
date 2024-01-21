import React,{useRef,useState} from 'react';
import "./join.css";
import "../App.css";
import emailjs from "@emailjs/browser"
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import insta from "../assets/instagram.png";
import logo from "../assets/logo.png"

function Join(){
    const form =useRef();
    const [email,setEmail]=useState("");
    const handleChange = (event) => {
        setEmail(event.target.value);
     };

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_xdwhhbi', 'template_l3rm9ro', form.current ,{to_email:email} ,'7dhTucnz8ewaa9tNl')
        .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return(
        <div className="join" id="six">
            <div></div>
            <div className="content">
                 <div id="content"><span className="stroke">ready to</span>
                 <span>level up</span></div>
                 <div><span>your body</span>
                 <span className="stroke">with us?</span></div>
            </div> 
                 <div className="right-j">
                    <form action="" className="email" ref={form} onSubmit={sendEmail}>
                        <input type="email" placeholder="Enter your email" value={email} onChange={handleChange} name="emailn" />
                        <button className="btn-email">Join now</button>
                    </form>
                 </div>
                 <hr />
                 <div className="blur blur1"></div>
                 <div className="blur blur2"></div>
                 <footer>
                        <img src={github} />
                        <img src={linkedin} />
                        <img src={insta} />
                 </footer>
                 <div id="noot"><img  id="logo" src={logo} /></div>
        </div>
    )
}

export default Join;