import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const TopBar = ({ selectedSection }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">NutriDAIet</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
