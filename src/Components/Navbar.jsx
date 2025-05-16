import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
// const Logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxt8F29i6LjB3zPaiLpLUetq6JYGkhOXoAuw&s";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {

    const [openMenu,setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text:"Home",
        },
        {
            text:"About",
        },
        {
            text:"Testimonials",
        },
        {
            text:"Contact",
        },
        {
            text:"Cart",
        },
    ];

    return  <nav>
        <div className="nav-logo-container">
            <img src={Logo} alt="Logo" />
        </div>  
        <div className="navbar-links-container">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Testimonials</a>
            <a href="">Contact</a>
            <a href="">                
                {/* <BsCart2 className="navbar-cart-icon"/> */}
            </a>
            <button className='primary-button'>Bookings Now</button>
        </div>   
        <div className=''>
            {/* <HiOutlineBars3 onClick={() => setOpenMenu(true)}/> */}
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)}
        anchor="right">
            <box
            sx={{width:250}}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
            >
                <list>
                    {menuOptions.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </list>
            </box>
        </Drawer> 
    </nav>
};



export default Navbar;