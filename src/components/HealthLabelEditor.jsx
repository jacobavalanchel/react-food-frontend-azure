import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

export default function HealthLabelEditor(props) {
  return (
    <Dialog open={props.isLabelEditOpen} PaperProps={{ component: "form" }}>
      <DialogTitle>告诉我们您的身体情况</DialogTitle>
      <DialogContent>
        <DialogContentText>
          请输入新的标签以描述您的身体状况。您可以搜索并选择已有的项目，也可以输入自定义项目。
        </DialogContentText>

        <InputLabel id="select-label">Age</InputLabel>
        <Select
          labelId="select-label"
          id="pa-select"
          name="PA"
          value={props.PA}
          onChange={(event) => {
            props.setPA(event.target.value);
            console.log(event.target.value);
          }}
        >
          <MenuItem value={"轻"}>轻</MenuItem>
          <MenuItem value={"中"}>中</MenuItem>
          <MenuItem value={"重"}>重</MenuItem>
        </Select>

        <Autocomplete
          multiple
          id="label-editor"
          options={props.userInfo.userLabelCandidates}
          defaultValue={props.userInfo.userLabelData}
          freeSolo
          name="labels"
          filterSelectedOptions
          onChange={(event, newLabelValue) => {
            props.setLabelValue(newLabelValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="健康标签"
              placeholder="点此输入或选择"
            />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleLabelInputAbort}>放弃</Button>
        <Button onClick={props.handleLabelSubmit}>确认</Button>
      </DialogActions>
    </Dialog>
  );
}
