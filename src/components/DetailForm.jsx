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
                    {section.RowLabels.map((label, key) => (
                      <TableCell key={key} align="left">
                        {label}
                      </TableCell>
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
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead></TableHead>
          <TableBody>
            {props.detailFormData !== null &&
              props.detailFormData.map((section, index) => (
                <Section key={index} section={section} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
