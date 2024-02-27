import React from "react";
import { ImQuotesLeft } from "react-icons/im";


const SuggestionCard = ({id, title, subtitle, content, fwlink}) =>{
    return (
        <div
            className=" flex flex-col w-3/4 md:w-2/6 lg:w-1/4 border-2 border-lime-400 p-3 rounded-lg gap-5 bg-lime-50 hover:bg-lime-100 active:bg-lime-500 transition duration-300 ease-in-out cursor-pointer">
            <div>
                <ImQuotesLeft size={25}/>
                <h1 className=" text-xl font-semibold text-ExtraDarkColor pt-4">
                    {title}
                </h1>
            </div>
            <h2 className=" text-xl font-light text-ExtraDarkColor pt-4">
                根据您{subtitle}的情况
            </h2>
            <p>
                {content}
            </p>
        </div>
    );


}
export default SuggestionCard;