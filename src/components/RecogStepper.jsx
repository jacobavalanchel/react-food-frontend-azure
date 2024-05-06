import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";

const steps = [
  { title: "拍摄上传", hint: "请拍摄上传您的食物" },
  { title: "系统处理", hint: "正在生成您的个性化内容，请稍等" },
  { title: "查看结果", hint: "您的结果如下" },
];

export default function RecogStepper(props) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {/*{steps.map((step, index) => {*/}
        {/*  const stepProps = {};*/}
        {/*  const labelProps = {};*/}

        {/*  return (*/}
        {/*    <Step key={step.title} {...stepProps}>*/}
        {/*      <StepLabel {...labelProps}>{step.title}</StepLabel>*/}
        {/*    </Step>*/}
        {/*  );*/}
        {/*})}*/}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/*<Typography sx={{ mt: 2, mb: 1 }}>步骤 {activeStep + 1}</Typography>*/}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
