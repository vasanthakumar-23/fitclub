import react,{useState} from 'react';
import Logo from "../assets/logo.png"
import "./header.css";
import bars from "../assets/bars.png"
import "../App.css"
import { Link } from "react-scroll";




export default function Header(){


  const mobile=window.innerWidth <=768?true:false;
  const [menuopen,setMenuOpen]=useState(false);
return (
  

    <div classname="header">
        <img className="logo" src={Logo} />
        {menuopen===false&& mobile===true?(
          <div className="bye"style={{backgroundColor:"var(--appColor)",width:"30px",height:"30px",zIndex:"6",padding:'0.5rem',borderRadius:"10px",position:'fixed',right:"0",top:"0.8rem"}}><img id="bar"src={bars} alt="" onClick={()=>setMenuOpen(true)} /></div>
        ):(
        <ul className='nav'>
          <li onClick={()=>setMenuOpen(false)}><Link
          to="one" span={true} smooth={true} onClick={()=>setMenuOpen(false)} >Home</Link></li>
          <li onClick={()=>setMenuOpen(false)}><Link to="two" span={true} smooth={true} onClick={()=>setMenuOpen(false)}>Programs</Link></li>
          <li onClick={()=>setMenuOpen(false)}><Link to="three" span={true} smooth={true} onClick={()=>setMenuOpen(false)}>Why us</Link></li>
          <li onClick={()=>setMenuOpen(false)}><Link to="four" span={true} smooth={true} onClick={()=>setMenuOpen(false)}>Plans</Link></li>
          <li onClick={()=>setMenuOpen(false)}><Link to="five" span={true} smooth={true} onClick={()=>setMenuOpen(false)}>Testimonals</Link></li>
        </ul>
)}
    </div>
)


}