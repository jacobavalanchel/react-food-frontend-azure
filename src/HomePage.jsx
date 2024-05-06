import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import * as PropTypes from "prop-types";
import { ImQuotesLeft } from "react-icons/im";
import LoadingButton from "@mui/lab/LoadingButton";
import DetailForm from "./components/DetailForm.jsx";
import RecogStepper from "./components/RecogStepper.jsx";
import Typography from "@mui/material/Typography";

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
  const [foodName, setFoodName] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [image, setImage] = useState("/assets/img/result-1.jpg");
  const [detailData, setDetailData] = useState([]);
  const handleSpeak = (text) => {
    msg.text = text;
    msg.lang = "zh-CN";
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 1;
    synth.speak(msg);
  };

  const uploadImage = (file) => {
    setIsUploading(true);
    console.log("starting upload");
    if (!file) {
      console.log("No file selected");
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

            return response.json();
          } else {
            console.error("Failed to upload file");

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
      setImage(file);
      const imageObjectURL = URL.createObjectURL(file);
      setImage(imageObjectURL);
      uploadImage(file);
    }
    console.log(file);
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

  return (
    <Box sx={{ flexGrow: 1 }} paddingY={5}>
      <h1 className="font-semibold text-3xl text-center text-black">主页</h1>
      <Grid container paddingX={3} spacing={2}>
        <Grid item xs={12} md={4}>
          {/* heading */}

          <div className="py-5 text-black flex flex-col flex-nowrap justify-begin items-center rounded-lg shadow-lg mt-10 cursor-pointer bg-lime-50 hover:bg-lime-100">
            <h2 className=" font-normal text-2xl text-center text-black">
              拍照食品健康助手
            </h2>
            <RecogStepper
              handleFileChange={handleFileChange}
              handleUpload={uploadImage}
              handleFetchDetail={handleFetchDetail}
            />
            <div className="w-3/4 flex m-2 flex-row gap-2 justify-center items-center">
              <LoadingButton
                loading={isUploading}
                loadingIndicator="Loading…"
                variant="contained"
                component="label"
              >
                选择文件
                <input
                  hidden
                  type="file"
                  onChange={handleFileChange}
                  accept="image/gif,image/jpeg,image/jpg,image/png"
                  multiple
                />
              </LoadingButton>
            </div>
            <img
              src={image}
              alt="img"
              className="max-h-50 rounded-t-xl w-full object-cover"
            />

            <div className=" flex flex-col w-full border-2 border-lime-400 rounded-lg bg-lime-50 hover:bg-lime-100 active:bg-lime-500 transition duration-300 ease-in-out cursor-pointer">
              <div>
                <ImQuotesLeft size={25} />
                <h1 className=" text-xl font-semibold text-ExtraDarkColor">
                  识别结果：{foodName}
                </h1>
                <Button
                  onClick={() => {
                    handleSpeak(aiResponse);
                  }}
                  size="small"
                >
                  收听
                </Button>
                {aiResponse !== "" && (
                  <h2 className=" font-normal text-xl text-center text-black">
                    AI 建议
                  </h2>
                )}
                {aiResponse.split("\n").map((line, index) => (
                  <Typography variant="h6" component="div" key={index}>
                    {line.replace(/\n/g, " ")}
                    <br />
                  </Typography>
                ))}

                <h2 className=" font-normal text-xl text-center text-black">
                  营养信息
                </h2>
                <DetailForm detailFormData={detailData} />
              </div>
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
