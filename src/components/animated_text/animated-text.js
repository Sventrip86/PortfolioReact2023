import React, { useState, useEffect } from "react";
import "./animated-text.css";


const AnimatedText = () => {
    const [text, setText] = useState("Ueiss");
    const [isHello, setIsHello] = useState(true);

    useEffect(() => {
        const switchText = () => {
          // Compute delay based on the current text's length
          const delay = text.length * 500;
          setTimeout(() => {
            setIsHello(!isHello);
            setText(isHello ? 'Hi' : 'Ueiss');
          }, delay);
        };
    
        // Set an interval to switch text
        const interval = setInterval(switchText, 900);
    
        // Clean up interval on component unmount
        return () => clearInterval(interval);
      }, [isHello, text]);
    
      return <div className="animated-text">{text}</div>;
    };
    
    export default AnimatedText;
