
import React, { useState } from 'react';
import { Drawer, Button, List, ListItem, ListItemText } from '@mui/material';
import "./mobiledrawer.css";
import MenuIcon from '@mui/icons-material/Menu';
import useMobileScreen from './mobiledrawerformobile'; 

function MobileDrawer() {

  const isMobile = useMobileScreen();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Home', 'About', 'Portfolio', 'Contact'].map((text, index) => (
          <ListItem className="list-item" button  key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className="mobiledrawer">
      <Button 
      className="btnMenu"
      sx={{ color: 'black', '&:hover': { color: 'blue' } }}
      onClick={toggleDrawer(true)} >
        {isMobile ? <MenuIcon className="menuIcon"/> : "menu"}
      </Button>
      <Drawer  anchor={'right'} open={isOpen} onClose={toggleDrawer(false)}
      PaperProps={{
        style: {
          backgroundColor: '#A8D5E2',  
          width: '35%',
        },
      }}>
        {list()}
      </Drawer>
    </div>
  );
}

export default MobileDrawer;
