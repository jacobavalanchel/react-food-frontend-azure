import React from "react";
import {AppBar, Toolbar, Typography, Button, Box, IconButton} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Appbar = ({selectedSection}) => {
    return (

            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        AI健康助理
                    </Typography>
                    <IconButton aria-label="login">
                        <AccountCircleIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

    );
};

export default Appbar;
