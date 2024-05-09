import React, { useEffect, useState } from "react";
import SuggestionCard from "./components/SuggestionCard.jsx";
import { Tab, Tabs } from "@mui/material";
import { useAuth } from "./AuthProvider.jsx";

const SuggestionPage = () => {
  const { token } = useAuth();
  useEffect(() => {
    handleFetchSuggestionInfo();
  }, []); // 第一次载入运行
  const handleFetchSuggestionInfo = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    };
    fetch("http://127.0.0.1:5000/get_suggestions", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setSuggestionContents(data);
        console.log(data);
      });
  };

  const [activeCategoryTab, setActiveCategoryTab] = useState(0);
  const [suggestionContents, setSuggestionContents] = useState([]);

  const categoryTabs = [
    { label: "Nature 建议" },
    { label: "膳食均衡" },
    { label: "为您推荐" },
  ];
  return (
    <div className=" min-h-screen flex flex-col justify-center my-20">
      {/* heading section */}
      <h1 className=" font-semibold text-3xl text-center text-black">
        健康贴士
      </h1>

      {/* review card section */}
      <div className=" flex flex-col flex-wrap  items-center md:items-start md:flex-row gap-5 justify-center py-4 my-8">
        <Tabs
          value={activeCategoryTab}
          onChange={(event, newValue) => {
            setActiveCategoryTab(newValue);
          }}
        >
          {categoryTabs.map((tab, index) => (
            <Tab key={index} label={tab.label} />
          ))}
        </Tabs>
        {suggestionContents
          .filter((suggestion) => suggestion.categories === activeCategoryTab)
          .map((suggestion) => (
            <SuggestionCard
              key={suggestion.id}
              imagepath={suggestion.imagepath}
              title={suggestion.title}
              subtitle={suggestion.subtitle}
              id={suggestion.id}
              content={suggestion.content}
            />
          ))}
      </div>
    </div>
  );
};

export default SuggestionPage;
