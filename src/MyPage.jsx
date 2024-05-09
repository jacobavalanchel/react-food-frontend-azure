import React, { useEffect, useState } from "react";
import {
  Avatar,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import SendIcon from "@mui/icons-material/Send";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import InfoIcon from "@mui/icons-material/Info";
import { useAuth } from "./AuthProvider.jsx";
import HealthLabelEditor from "./components/HealthLabelEditor.jsx";
import InfoEditor from "./components/InfoEditor.jsx";

const MyPage = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    userLabelData: [],
    userLabelCandidates: [],
    gender: "",
    age: "",
    isPregnant: "",
    PA: "",
    email: "",
  });

  const [isLabelEditOpen, setIsLabelEditOpen] = useState(false);
  const [isInfoEditOpen, setIsInfoEditOpen] = useState(false);
  const [labelValue, setLabelValue] = useState(userInfo.userLabelData);
  const [PA, setPA] = useState(userInfo.PA);

  const { token } = useAuth();
  useEffect(() => {
    if (userInfo.username !== "") {
      handleUpdateUserInfo(userInfo);
    }
  }, [userInfo]);

  useEffect(() => {
    handleFetchUserInfo();
  }, []); // 第一次载入运行
  const handleUpdateUserInfo = (newUserInfo) => {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserInfo),
    };
    fetch("http://127.0.0.1:5000/update_info", requestOptions)
      .then((response) => response.json())
      .then((data) => {});
  };
  const handleFetchUserInfo = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    };
    fetch("http://127.0.0.1:5000/get_info", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setUserInfo(data);
        setPA(data.PA);
        setLabelValue(data.userLabelData);
      });
  };

  function handleInfoInputOpen() {
    setIsInfoEditOpen(true);
  }

  function handleInfoSubmit() {}

  function handleInfoInputAbort() {
    setIsInfoEditOpen(false);
  }

  function handleLabelInputOpen() {
    setIsLabelEditOpen(true);
  }

  function handleLabelInputAbort() {
    setIsLabelEditOpen(false);
  }

  const handleLabelSubmit = () => {
    if (labelValue !== undefined) {
      console.log(labelValue);

      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        PA: PA,
        userLabelData: labelValue,
      }));
    }
    setIsLabelEditOpen(false);
  };

  function handleLabelClick(data) {}

  return (
    <div className="flex flex-col justify-center">
      {/* name zone */}
      <div className="bg-green-50">
        <div className="h-[15rem] 2xl:h-[20rem] text-black flex flex-col justify-around items-center rounded-xl shadow-lg cursor-pointer bg-lime-100 hover:bg-lime-100">
          <div className="flex flex-row items-center gap-2">
            <Avatar alt="Personal icon" src="/src/assets/react.svg" />
            <h1 className="font-semibold text-3xl text-center text-black">
              {userInfo.username}
            </h1>
          </div>
          {/*// health label edit*/}
          <HealthLabelEditor
            isLabelEditOpen={isLabelEditOpen}
            userInfo={userInfo}
            handleLabelInputAbort={handleLabelInputAbort}
            handleLabelSubmit={handleLabelSubmit}
            labelValue={labelValue}
            setLabelValue={setLabelValue}
            PA={PA}
            setPA={setPA}
          />
          {/*//basic info edit*/}

          <InfoEditor
            isInfoEditOpen={isInfoEditOpen}
            handleInfoInputAbort={handleInfoInputAbort}
            handleInfoSubmit={handleInfoSubmit}
            setUserInfo={setUserInfo}
            userInfo={userInfo}
          />
          <div className="flex w-80 flex-row flex-wrap items-center justify-center gap-2">
            {!isLabelEditOpen &&
              userInfo.userLabelData.map((data, index) => {
                return (
                  <Chip
                    key={index}
                    label={data}
                    onClick={() => handleLabelClick(data)}
                  />
                );
              })}
          </div>
        </div>
      </div>
      {/* list zone */}
      <div>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={handleLabelInputOpen}>
                <ListItemIcon>
                  <MedicalInformationIcon />
                </ListItemIcon>
                <ListItemText primary="更改健康标签" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleInfoInputOpen}>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="更改基本信息" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Diversity1Icon />
                </ListItemIcon>
                <ListItemText primary="社区关爱" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LocalShippingIcon />
                </ListItemIcon>
                <ListItemText primary="订单列表" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsApplicationsIcon />
                </ListItemIcon>
                <ListItemText primary="设置" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="关于" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </div>
    </div>
  );
};

export default MyPage;
