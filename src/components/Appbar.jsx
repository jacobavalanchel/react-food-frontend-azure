import React from "react";
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuth } from "../AuthProvider.jsx";

const Appbar = () => {
  const { setToken, token } = useAuth();
  const Logout = () => {
    setToken(null);
    console.log(token);
  };
  const iconMenuItems = [
    {
      name: "我的资料",
      callback: () => {},
    },
    {
      name: "登出",
      callback: () => {
        Logout();
      },
    },
  ];
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AI健康助理
          </Typography>
          <IconButton onClick={handleOpenUserMenu} aria-label="login">
            <AccountCircleIcon />
          </IconButton>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {iconMenuItems.map((item) => (
              <MenuItem key={item.name} onClick={handleCloseUserMenu}>
                <Typography textAlign="center" onClick={item.callback}>
                  {item.name}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Appbar;
