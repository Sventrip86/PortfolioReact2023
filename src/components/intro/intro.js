import React from "react";
import  ME  from '../../assets/me.png';
import './intro.css';
import CTA  from './CTA';
import { Avatar } from "@mui/material";






const intro = () => {
    return(<>
        <div className="containerIntro">
            <img src={ME} alt="me"  className="me"/>
          
    <div className="containerTitle">
      <h5>Ueissss</h5>

      <h1 className="title-intro">I am Fabs</h1>
      <h4 className="text-light">Senior IT/Technical Support TIM @ Ennova | Linux Junkie | Web Developer and Cybersecurity Enthusiast | IT Blogger</h4>
      <CTA/>
    </div>
    
    </div>
    

    </>

    )



}

export default intro