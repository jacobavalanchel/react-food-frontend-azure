import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button, Card, CardActions, CardContent, Rating } from "@mui/material";

const synth = window.speechSynthesis; // 启用文本
const msg = new SpeechSynthesisUtterance(); // 表示一次发音请求。其中包含了将由语音服务朗读的内容，以及如何朗读它（例如：语种、音高、音量）。

// 语音播报的函数
const handleSpeak = (text) => {
  msg.text = text; // 文字内容: 测试内容
  msg.lang = "zh-CN"; // 使用的语言:中文
  msg.volume = 1; // 声音音量：1
  msg.rate = 1; // 语速：1
  msg.pitch = 1; // 音高：1
  synth.speak(msg); // 播放
};
// 语音停止
const handleStop = (e) => {
  msg.text = e;
  msg.lang = "zh-CN";
  synth.cancel(msg); // 取消该次语音播放
};

function Section(props) {
  const { section, index } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          <Typography variant="h6" component="div">
            {section.name}
          </Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    {section.RowLabels.map((label) => (
                      <TableCell align="left">{label}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {section.RowContents.map((content) => (
                    <TableRow>
                      {content.map((row) => (
                        <TableCell align="left">{row}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Card id={"ranking-card"} sx={{ minWidth: 200 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {section.name}评级
                  </Typography>
                  <Typography variant="h6" component="div">
                    {section.scoreLabel}
                  </Typography>
                  <Rating
                    name="half-rating-read"
                    value={section.score}
                    precision={0.5}
                    readOnly
                  />
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {section.name}意见
                  </Typography>
                  <Typography variant="body2">{section.scoreText}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">了解更多</Button>
                </CardActions>
              </Card>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function DetailForm(props) {
  return (
    <>
      <Button
        onClick={() => {
          handleSpeak("您非常适合这个食物");
        }}
        size="small"
      >
        收听
      </Button>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead></TableHead>
          <TableBody>
            {props.detailFormData.map((section, index) => (
              <Section key={index} section={section} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
