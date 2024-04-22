import React, {useState} from 'react';
import {
    Autocomplete,
    Avatar,
    Box,
    Button,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    TextField
} from "@mui/material";
import Diversity1Icon from '@mui/icons-material/Diversity1';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import SendIcon from '@mui/icons-material/Send';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import InfoIcon from '@mui/icons-material/Info';
import AddIcon from '@mui/icons-material/Add';

const MyPage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [isNewLabelOpen, setIsNewLabelOpen] = useState(false);
    const [inputValue,setInputValue]= useState();
    const [labelData, setLabelData] = useState(
        [{key: 0, title: '中年人'},
            {key: 1, title: '糖尿病患者'},
            {key: 2, title: '高血压患者'},
            {key: 3, title: '注重精神健康'},
            {key: 4, title: '爱吃面食'},]);
    const handleLabelDataDelete = (labelToDelete) => () => {
        setLabelData((labels) => labels.filter((label) => label.key !== labelToDelete.key));
    };
    // const handleLabelAdd = (newLabel) => {
    //     const updatedLabelData = [
    //         ...labelData,
    //         { key: labelData.length, title: newLabel }
    //     ];
    //     setLabelData(updatedLabelData);
    //     setIsNewLabelOpen(false);
    // };
    const handleSubmit = () => {
        if(inputValue!==undefined){
            console.log('Submitted Values:', inputValue);
            const value = inputValue.map((tag, index) => {
                return { key: index, title: tag };
            });
            setLabelData(value);
            console.log('Values:', value);
            handleNewLabelInputClose(); // Close the dialog after submission
        }
        setIsNewLabelOpen(false);
    };

    function handleNewLabelInputClose() {
        setIsNewLabelOpen(false);
    }

    function handleLabelInputOpen() {
        setIsNewLabelOpen(true);
    }

    function handleInputValueChange(newInputValue) {
        console.log(newInputValue);
        setInputValue(newInputValue);
    }

    return (

        <div className="flex flex-col justify-center">

            {/* name zone */}
            <div className="bg-green-50">
                <div
                    className="h-[15rem] 2xl:h-[20rem] text-black flex flex-col justify-around items-center rounded-xl shadow-lg cursor-pointer bg-lime-100 hover:bg-lime-100">
                    <div className="flex flex-row items-center gap-2">
                        <Avatar alt="Personal icon" src="/src/assets/react.svg"/>
                        <h1 className="font-semibold text-3xl text-center text-black">
                            张三峰
                        </h1>
                    </div>
                    <Dialog open={isNewLabelOpen} PaperProps={{component: 'form'}}>
                        <DialogTitle>告诉我们您的身体情况</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                请输入新的标签以描述您的身体状况。您可以搜索并选择已有的项目，也可以输入自定义项目。
                            </DialogContentText>
                            <Autocomplete
                                multiple
                                id="label-editor"
                                options={labelData.map((option) => option.title)}
                                defaultValue={labelData.map((option) => option.title)}
                                freeSolo
                                name="labels"
                                filterSelectedOptions
                                onChange={(event, newInputValue) => {
                                    setInputValue(newInputValue);
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="filled"
                                        label="freeSolo"
                                        placeholder="Favorites"
                                    />
                                )}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => setIsNewLabelOpen(false)}>放弃</Button>
                            <Button onClick={handleSubmit}>确认</Button>
                        </DialogActions>
                    </Dialog>
                    <Box sx={{display: 'flex'}}>

                            <Button color="secondary" onClick={handleLabelInputOpen}>编辑</Button>
                    </Box>
                    <div className="flex w-80 flex-row flex-wrap items-center justify-center gap-2">
                        {!isNewLabelOpen && labelData.map((data) => {
                            return (
                                <Chip
                                    key={data.key}
                                    label={data.title}
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
