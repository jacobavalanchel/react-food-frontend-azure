import React, {useState} from 'react';
import {Avatar, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Chip} from "@mui/material";
import DraftsIcon from '@mui/icons-material/Drafts';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import SendIcon from '@mui/icons-material/Send';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import InfoIcon from '@mui/icons-material/Info';
const MyPage = () => {

    return (

        <div className="flex flex-col justify-center">
            {/* name zone */}
            <div
                className="bg-green-50">
                <div
                    className="h-[15rem] 2xl:h-[20rem] text-black flex flex-col justify-around items-center rounded-xl shadow-lg cursor-pointer bg-lime-100 hover:bg-lime-100">
                    <div className="flex flex-row items-center gap-2">
                        <Avatar alt="Personal icon" src="/src/assets/react.svg"/>
                        <h1 className="font-semibold text-3xl text-center text-black">
                            张三峰
                        </h1>
                    </div>
                    <div className="flex w-80 flex-row flex-wrap items-center justify-center gap-2">
                        <Chip label="失眠群体" />
                        <Chip label="压力群体" variant="filled" />
                        <Chip label="老年人" />
                        <Chip label="爱吃面" variant="filled" />
                        <Chip label="颈椎问题" />
                        <Chip label="注重精神健康" variant="filled" />
                    </div>

                </div>
            </div>
            {/* list zone */}
            <div>
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <MedicalInformationIcon/>
                                </ListItemIcon>
                                <ListItemText primary="更改健康信息"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SendIcon/>
                                </ListItemIcon>
                                <ListItemText primary="消息列表"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Diversity1Icon/>
                                </ListItemIcon>
                                <ListItemText primary="社区关爱"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LocalShippingIcon/>
                                </ListItemIcon>
                                <ListItemText primary="订单列表"/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
                <Divider/>
                <nav aria-label="secondary mailbox folders">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SettingsApplicationsIcon/>
                                </ListItemIcon>
                                <ListItemText primary="设置"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemIcon>
                                    <InfoIcon/>
                                </ListItemIcon>
                                <ListItemText primary="关于"/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </div>
        </div>
    );
};

export default MyPage;
