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
      }}
    >
      <BottomNavigationAction
        label="主页"
        icon={<HomeIcon />}
        onClick={() => navigate("/home")}
      />
      <BottomNavigationAction
        label="健康贴士"
        icon={<InfoIcon />}
        onClick={() => navigate("/about")}
      />
      <BottomNavigationAction
        label="商城"
        icon={<WorkIcon />}
        onClick={() => navigate("/services")}
      />
      <BottomNavigationAction
        label="我"
        icon={<ContactMailIcon />}
        onClick={() => navigate("/contact")}
      />
    </BottomNavigation>
  );
};

export default Navbar;
