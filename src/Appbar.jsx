import React from "react";
import {AppBar, Toolbar, Typography, Button, Box} from "@mui/material";

const Appbar = ({selectedSection}) => {
    return (

            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        AI健康助理
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

    );
};

export default Appbar;
