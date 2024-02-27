import React, {useRef, useState, ChangeEvent} from "react";
import './index.css'
import {Container, Button, TextField} from "@mui/material";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import Topbar from "./Topbar"
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import UploadPage from "./uploadPage.jsx";
import HistoryPage from "./historyPage.jsx";
import MyPage from "./myPage.jsx";
import InfoPage from "./infoPage.jsx"
function App() {

    const [selectedSection, setSelectedSection] = useState("Home");

    const handleSectionChange = (newSection) => {
        console.log(newSection);
        setSelectedSection(newSection);
    };

    return (
        //data binding
        <div className="App">

            <Topbar/>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" exact element={<UploadPage />} />
                        <Route path="/about" element={<InfoPage />} />
                        <Route path="/services" element={<HistoryPage />} />
                        <Route path="/contact" element={<MyPage />} />
                    </Routes>
                    <BottomNavigation className="bottomNavigation">
                        <BottomNavigationAction label="Home" icon={<HomeIcon />} href="/" />
                        <BottomNavigationAction label="About" icon={<InfoIcon />} href="/about" />
                        <BottomNavigationAction label="Services" icon={<WorkIcon />} href="/services" />
                        <BottomNavigationAction label="Contact" icon={<ContactMailIcon />} href="/contact" />
                    </BottomNavigation>
                </div>
            </Router>
        </div>
    );
}

export default App;
