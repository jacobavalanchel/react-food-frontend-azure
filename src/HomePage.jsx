import React, {useState} from 'react';
import {Button, Container, TextField} from "@mui/material";


const HomePage = () => {
    const [uploadedFile, setUploadedFile] = useState(null);
    const [uploadResult, setUploadResult] = useState(null);
    const handleUpload = async () => {
        console.log("starting upload");
        if (!uploadedFile) {
            console.log('No file selected');
            return;
        }

        const formData = new FormData();
        formData.append('file', uploadedFile);

        try {
            const response = await fetch('https://nutridaietwebbackend.azurewebsites.net/api/first/OnPostUpload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('File uploaded successfully');
                console.log(response);
                setUploadResult(true);
            } else {
                console.error('Failed to upload file');
                setUploadResult(false);
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log('file changed');
        setUploadedFile(file);
    };

    return (
        <div>
            <div className="min-h-screen px-2 flex flex-col justify-center my-20">
                {/* heading */}
                <h1 className="font-semibold text-3xl text-center text-black">
                    主页
                </h1>
                <div
                    className="py-5 text-black flex flex-col flex-nowrap justify-begin items-center rounded-lg shadow-lg mt-10 cursor-pointer bg-lime-50 hover:bg-lime-100">
                    {/*<div>*/}
                    {/*    <img*/}
                    {/*        src=""*/}
                    {/*        alt="img"*/}
                    {/*        className="h-56 2xl:h-64 rounded-t-xl w-full"*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <h2 className=" font-normal text-2xl text-center text-black">
                        拍照食品健康助手
                    </h2>
                    <h2 className=" font-normal text-xl text-center text-black">
                        识别结果：三明治沙拉
                    </h2>
                    <div className="w-3/4 flex flex-row gap-2 justify-center items-center">

                        <Button
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
                        </Button>
                        <Button
                            variant="outlined"
                            className="bg-lime-300 hover:bg-lime-400 active:bg-lime-500 text-black px-4 py-2 font-medium "
                            onClick={handleUpload}
                        >
                            上传所选
                        </Button>
                    </div>
                        <img
                            src="/assets/img/result-1.jpg"
                            alt="img"
                            className="rounded-t-xl w-full object-cover"
                        />
                    <h2 className=" font-normal text-xl text-center text-black">
                        此食品的营养信息：
                        1. 245 KCal\n
                        2. 特殊营养素：麦麸质\n
                        适宜人群：高糖代谢人群\n
                        不适宜人群：消化不良人群

                    </h2>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
