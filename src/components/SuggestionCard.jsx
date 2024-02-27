import React from "react";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";


const SuggestionCard = ({id, title, content, fwlink}) =>{
    return (
        <div className=" flex flex-col w-full lg:w-2/6 border-2 border-DarkColor p-3 rounded-lg gap-5 hover:bg-PrimaryColor transition duration-300 ease-in-out cursor-pointer">
            <div>
                <ImQuotesLeft size={25} />
                <h1 className=" text-xl font-semibold text-ExtraDarkColor pt-4">
                    {title}
                </h1>
            </div>
            <p>
                {content}
            </p>
        </div>
    );


}
export default SuggestionCard;