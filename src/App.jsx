import React from "react";
import "./index.css";
import {
  BottomNavigation,
  BottomNavigationAction,
  CssBaseline,
} from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import TopBar from "./components/Appbar.jsx";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import HomePage from "./HomePage.jsx";
import MarketPage from "./MarketPage.jsx";
import MyPage from "./MyPage.jsx";
import SuggestionPage from "./SuggestionPage.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = React.useState(0);
  return (
    <React.Fragment>
      <CssBaseline />
      {/*//data binding*/}
      <TopBar />
      <Toaster position="top-center" />
      <div className="App pb-10">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" element={<SuggestionPage />} />
          <Route path="/services" element={<MarketPage />} />
          <Route path="/contact" element={<MyPage />} />
        </Routes>
      </div>
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
          onClick={() => navigate("/")}
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
    </React.Fragment>
  );
}

export default App;
