import React from "react";
import CV from '../../assets/CV_Fabrizio_Sebis-new.pdf'
import { Button } from '@mui/material';
import './intro.css';





const CTA = () =>  {
    return (
     
      <div className="cta">
      <Button type="submit" variant="outlined" color="info" href={CV}>
                    Download cv
                </Button>
      <Button type="submit" variant="outlined" color="info">
                    Lets Talk
                </Button>
     
                </div>
    )
  }
  
  export default CTA