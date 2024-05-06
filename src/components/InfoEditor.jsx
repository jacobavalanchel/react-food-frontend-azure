import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

export default function InfoEditor(props) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    props.setUserInfo((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log(props.userInfo);
  };
  return (
    <Dialog open={props.isInfoEditOpen} PaperProps={{ component: "form" }}>
      <DialogTitle>告诉我们您的身体情况</DialogTitle>
      <DialogContent>
        <DialogContentText>
          请输入新的标签以描述您的身体状况。您可以搜索并选择已有的项目，也可以输入自定义项目。
        </DialogContentText>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="年龄"
              name="age"
              value={props.userInfo.age}
              onChange={handleChange}
              type="number"
              required
            />
            <TextField
              label="名字"
              name="username"
              value={props.userInfo.username}
              onChange={handleChange}
              required
            />
            <RadioGroup
              aria-label="性别"
              name="gender"
              value={props.userInfo.gender}
              onChange={handleChange}
              sx={{ flexDirection: "row" }}
            >
              <FormControlLabel value="male" control={<Radio />} label="男性" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="女性"
              />
            </RadioGroup>
            <TextField
              label="Email"
              name="email"
              value={props.userInfo.email}
              onChange={handleChange}
              type="email"
              required
            />
            <TextField
              label="地址"
              name="address"
              value={props.userInfo.address}
              onChange={handleChange}
              required
            />
            <Button
              onClick={props.handleInfoSubmit}
              type="submit"
              variant="contained"
              color="primary"
            >
              确认
            </Button>
            <Button
              onClick={props.handleInfoInputAbort}
              variant="outlined"
              color="primary"
            >
              取消
            </Button>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
}
