import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const steps = [
  { title: "拍摄上传", hint: "请拍摄上传您的食物" },
  { title: "系统处理", hint: "正在生成您的个性化内容，请稍等" },
  { title: "查看结果", hint: "您的结果如下" },
];

export default function RecogStepper(props) {
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={props.activeStep}>
        {steps.map((step, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={step.title} {...stepProps}>
              <StepLabel {...labelProps}>{step.title}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {props.activeStep + 1 === steps.length ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 4,
            padding: 2,
          }}
        >
          <CheckCircleIcon />
          <>
            {" "}
            <Typography>
              完成了！请您查看结果
              <br />
              如要继续识别，请再次点击“选择文件”
            </Typography>
          </>
        </Box>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            步骤 {props.activeStep + 1}:{steps[0].hint}
          </Typography>
        </React.Fragment>
      )}
    </Box>
  );
}
