import React, { useState } from "react";
import { Box, Button, CardContent, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import * as PropTypes from "prop-types";
import { ImQuotesLeft } from "react-icons/im";
import LoadingButton from "@mui/lab/LoadingButton";
import DetailForm from "./components/DetailForm.jsx";
import RecogStepper from "./components/RecogStepper.jsx";
import Typography from "@mui/material/Typography";
import HearingIcon from "@mui/icons-material/Hearing";
import toast from "react-hot-toast";
import Collapse from "@mui/material/Collapse";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

Item.propTypes = { children: PropTypes.node };
const synth = window.speechSynthesis; // 启用文本
const msg = new SpeechSynthesisUtterance(); // 表示一次发音请求。其中包含了将由语音服务朗读的内容，以及如何朗读它（例如：语种、音高、音量）。

const HomePage = () => {
  const [expanded, setExpanded] = useState(false);
  const [foodName, setFoodName] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [image, setImage] = useState("/assets/img/result-1.jpg");
  const [detailData, setDetailData] = useState([]);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleSpeak = (text) => {
    msg.text = text;
    msg.lang = "zh-CN";
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 1;
    synth.speak(msg);
  };

  const uploadImage = (file) => {
    setActiveStep(1);

    if (!file) {
    } else {
      const formData = new FormData();
      formData.append("file", file);
      fetch("http://127.0.0.1:5000/upload_image", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            console.log("File uploaded successfully");
            setActiveStep(2);
            toast.success("完成了！请您查看结果");
            return response.json();
          } else {
            console.error("Failed to upload file");
            setActiveStep(0);
            setIsUploading(false);
            throw new Error("Failed to upload file");
          }
        })
        .then((response_json) => {
          setFoodName(response_json["result"]);
          setIsUploading(false);
          handleFetchDetail();
        })

        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    }
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file !== undefined) {
      const imageObjectURL = URL.createObjectURL(file);
      setImage(imageObjectURL);
      uploadImage(file);
    }
  };

  const handleFetchDetail = () => {
    const requestOptions = {
      method: "POST",
    };
    fetch("http://127.0.0.1:5000/get_result_detail", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setDetailData(data["result_detail"]);
        setAiResponse(data["ai_response"]);
      });
  };

  function handleUploadButtonClick() {
    setActiveStep(0);
    setIsUploading(true);
  }

  return (
    <Box sx={{ flexGrow: 1 }} paddingY={5}>
      <h1 className="font-semibold text-3xl text-center text-black">
        拍照食品健康助手
      </h1>

      <Grid container sx={{ paddingX: { xs: 0, sm: 3 } }} spacing={2}>
        <Grid item xs={12} md={4}>
          {/* heading */}

          <div className="py-5 text-black flex flex-col flex-nowrap justify-begin items-center rounded-lg shadow-lg mt-10 cursor-pointer bg-lime-50 hover:bg-lime-100">
            <h2 className=" font-normal text-2xl text-center text-black">
              拍照识别
            </h2>

            <RecogStepper
              activeStep={activeStep}
              handleFileChange={handleFileChange}
              handleUpload={uploadImage}
              handleFetchDetail={handleFetchDetail}
            />
            <div className=" flex flex-col w-full border-2 border-lime-400 rounded-lg bg-lime-50 hover:bg-lime-100 active:bg-lime-500 transition duration-300 ease-in-out cursor-pointer">
              <div className="relative w-full">
                <img
                  // sx={{ maxHeight: "200px" }}
                  src={image}
                  alt="img"
                  className="max-h-44  rounded-t-xl w-full object-cover"
                />
                <LoadingButton
                  loading={isUploading}
                  loadingIndicator="处理中"
                  variant="contained"
                  component="label"
                  onClick={handleUploadButtonClick}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  拍摄上传
                  <input
                    hidden
                    type="file"
                    onChange={handleFileChange}
                    accept="image/gif,image/jpeg,image/jpg,image/png"
                    multiple
                  />
                </LoadingButton>
              </div>

              {activeStep === 2 && (
                <h1 className=" text-xl font-semibold text-ExtraDarkColor">
                  识别结果：{foodName}
                </h1>
              )}
            </div>
            {aiResponse !== "" && (
              <div className=" flex flex-col w-full border-2 border-lime-400 rounded-lg bg-lime-50 hover:bg-lime-100 active:bg-lime-500 transition duration-300 ease-in-out cursor-pointer">
                <h1 className=" text-xl font-semibold text-ExtraDarkColor">
                  AI 建议
                </h1>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ImQuotesLeft size={25} />
                  <Button
                    onClick={() => {
                      handleSpeak(aiResponse);
                    }}
                    size="small"
                    variant="outlined"
                    className="px-2"
                    startIcon={<HearingIcon />}
                  >
                    收听
                  </Button>
                </Box>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add
                      saffron and set aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep
                      skillet over medium-high heat. Add chicken, shrimp and
                      chorizo, and cook, stirring occasionally until lightly
                      browned, 6 to 8 minutes. Transfer shrimp to a large plate
                      and set aside, leaving chicken and chorizo in the pan. Add
                      pimentón, bay leaves, garlic, tomatoes, onion, salt and
                      pepper, and cook, stirring often until thickened and
                      fragrant, about 10 minutes. Add saffron broth and
                      remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with
                      artichokes and peppers, and cook without stirring, until
                      most of the liquid is absorbed, 15 to 18 minutes. Reduce
                      heat to medium-low, add reserved shrimp and mussels,
                      tucking them down into the rice, and cook again without
                      stirring, until mussels have opened and rice is just
                      tender, 5 to 7 minutes more. (Discard any mussels that
                      don&apos;t open.)
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and
                      then serve.
                    </Typography>
                  </CardContent>
                </Collapse>
                {aiResponse.split("\n").map((line, index) => (
                  <Typography
                    className="px-5"
                    variant="h6"
                    component="div"
                    key={index}
                  >
                    {line.replace(/\n/g, " ")}
                    <br />
                  </Typography>
                ))}
              </div>
            )}
            <div className=" flex flex-col w-full border-2 border-lime-400 rounded-lg bg-lime-50 hover:bg-lime-100 active:bg-lime-500 transition duration-300 ease-in-out cursor-pointer">
              <h1 className=" text-xl font-semibold text-ExtraDarkColor">
                营养信息：
              </h1>

              <DetailForm detailFormData={detailData} />
            </div>
          </div>
        </Grid>
        {/*<Grid item xs={12} md={6}>*/}
        {/*  */}
        {/*</Grid>*/}
        {/*<Grid item xs={12} md={4}>*/}
        {/*    <Item>xs=6 md=4</Item>*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} md={8}>*/}
        {/*    <Item>xs=6 md=8</Item>*/}
        {/*</Grid>*/}
      </Grid>
    </Box>
  );
};

export default HomePage;
