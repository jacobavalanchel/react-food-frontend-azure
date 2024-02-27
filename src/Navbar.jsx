// Navbar.js
import React from "react";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ContactIcon from "@mui/icons-material/ContactMail";

const Navbar = () => {

    const handleSectionChange = (event, newSection) => {
        console.log("switched");
        history.push(newSection);
    };

    return (
        <BottomNavigation
            showLabels
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100%",
                zIndex: 1000 // Adjust z-index as needed
            }}
            onChange={handleSectionChange}
        >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Favorites" icon={<InfoIcon />} />
            <BottomNavigationAction label="Recents" icon={<RestoreIcon  />} />
            <BottomNavigationAction label="Contact" icon={<FavoriteIcon  />} />
        </BottomNavigation>
    );
};

export default Navbar;
