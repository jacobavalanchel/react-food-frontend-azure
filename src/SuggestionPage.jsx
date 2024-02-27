import React, {useState} from 'react';
import SuggestionCard from './components/SuggestionCard.jsx'
const SuggestionPage = () => {
    const suggestionContents=[
        {
            id:1,
            title:"多吃蔬菜",
            subtitle:"儿童青少年人群",
            content:"营养需求：蔬菜富含维生素、矿物质和纤维，有助于儿童和青少年的生长发育。\n" +
                "健康习惯：培养健康饮食习惯，对未来的健康至关重要。"
        },
        {
            id:2,
            title:"多喝热水",
            subtitle:"消化不良人群",
            content:"促进消化：热水可以促进胃肠蠕动，有助于消化食物，减少消化不良和便秘的发生。\n" +
                "\n" +
                "促进新陈代谢：喝热水可以增加体温，促进新陈代谢，有助于身体健康和保持体重。\n" +
                "\n" +
                "放松肌肉：热水可以缓解肌肉紧张和疼痛，有助于放松身体，缓解压力和疲劳。\n"
        },
        {
            id:3,
            title:"多睡觉",
            subtitle:"精神压力人群",
            content:"压力缓解： 充足的睡眠可以帮助降低身体内的应激激素水平，如皮质醇，从而减轻精神压力和焦虑。\n" +
                "\n" +
                "情绪稳定： 良好的睡眠有助于维持情绪的稳定，降低情绪波动和易怒情绪的发生，从而更好地应对压力。\n" +
                "\n" +
                "思维清晰： 充足的睡眠可以改善大脑功能，使思维更加清晰，提高集中力和注意力，有助于更好地处理压力情况。\n"
        }
    ];
    return (
        <div className=" min-h-screen flex flex-col justify-center my-20">

            {/* heading section */}
            <h1 className=" font-semibold text-3xl text-center text-black">
                健康建议
            </h1>

            {/* review card section */}
            <div className=" flex flex-col flex-wrap  items-center md:items-start md:flex-row gap-5 justify-center py-4 my-8">
                {
                    suggestionContents.map((suggestion)=>(
                    <SuggestionCard title={suggestion.title} subtitle={suggestion.subtitle} id={suggestion.id} content={suggestion.content}/>
                    ))
                }
            </div>
        </div>
    );
};

export default SuggestionPage;
