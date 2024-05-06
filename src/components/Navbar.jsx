// Navbar.js
import React from "react";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import { useNavigate } from "react-router-dom";
import ContactMailIcon from "@mui/icons-material/ContactMail.js";

const Navbar = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = React.useState(0);
  return (
    <BottomNavigation
      className="bottomNavigation"
      value={currentTab}
      onChange={(event, newValue) => {
        setCurrentTab(newValue);
        console.log(newValue);
      }}
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
        onClick={() => navigate("/home")}
      />
      <BottomNavigationAction
        label="About"
        icon={<InfoIcon />}
        onClick={() => navigate("/about")}
      />
      <BottomNavigationAction
        label="Services"
        icon={<WorkIcon />}
        onClick={() => navigate("/services")}
      />
      <BottomNavigationAction
        label="Contact"
        icon={<ContactMailIcon />}
        onClick={() => navigate("/contact")}
      />
    </BottomNavigation>
  );
};

export default Navbar;
