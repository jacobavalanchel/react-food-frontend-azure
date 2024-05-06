import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";

export default function LabelEditor(props) {
  return (
    <Dialog open={props.isLabelEditOpen} PaperProps={{ component: "form" }}>
      <DialogTitle>告诉我们您的身体情况</DialogTitle>
      <DialogContent>
        <DialogContentText>
          请输入新的标签以描述您的身体状况。您可以搜索并选择已有的项目，也可以输入自定义项目。
        </DialogContentText>
        <Autocomplete
          multiple
          id="label-editor"
          options={props.userInfo.userLabelCandidates.map(
            (option) => option.title,
          )}
          defaultValue={props.userInfo.userLabelData.map(
            (option) => option.title,
          )}
          freeSolo
          name="labels"
          filterSelectedOptions
          onChange={(event, newLabelValue) => {
            props.setLabelValue(newLabelValue);
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
        <Button onClick={props.handleLabelInputAbort}>放弃</Button>
        <Button onClick={props.handleLabelSubmit}>确认</Button>
      </DialogActions>
    </Dialog>
  );
}
