import React from "react";  
import "./About.css";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
 






function About() {
    

    return (
        <div className="about">
            
            <h1 className="about-title">About me</h1>      
        <Container maxWidth="lg">
        <Box className="boxie">
        <p className="about-text">I'm in love with IT since I remember and I always believed that understanding the code gives you superpowers. I obtained an IT diploma @ ITIS OTHOCA, Sardinia, Italy then I moved to London, UK. I continued to home study IT, getting some certifications while working on the catering, Linux LPCI and Windows System Administration MSCA and Java SCJP. Then after quite few years I came back home to work as a junior system admin for a while and now I'm doing tech support second level for a big telco, never stopping to study. Recently I started to get deeper in web development, at the moment studying React and NodeJs. Cybersecurity lover since IT school, CTF player. When I am not at the PC I am probably listening to music, reading or writing about it and if the sun shines I prefer to move with my inline skates. I am based in Cagliari, want to work with me or hire me?</p>

       </Box>
       

        </Container>
<div className="btn-container">
<Button style={{ backgroundColor: '#FFED65', color: 'black', fontSize: '18px' }} variant="contained">Let's talk</Button>
 
</div>
        
        </div>
    );
}

export default About;