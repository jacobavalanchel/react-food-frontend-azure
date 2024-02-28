import React, {useState} from 'react';
import {Avatar, Button} from "@mui/material";

const MyPage = () => {

    return (

        <div className="flex flex-col justify-center -mt-4">
            {/* heading */}
            <div>
                <div
                    className="h-[10rem] 2xl:h-[15rem] text-black flex flex-col justify-around items-center rounded-xl shadow-xl cursor-pointer bg-lime-50 hover:bg-lime-100">
                    <h1 className="font-semibold text-3xl text-center text-black">
                        我
                    </h1>
                    <Avatar alt="Personal icon" src="/src/assets/react.svg" />
                    <div className="w-3/4 flex flex-row gap-2 justify-center items-center">




                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPage;
