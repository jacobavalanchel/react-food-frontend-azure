import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import SuggestionPage from "./SuggestionPage.jsx";
import MarketPage from "./MarketPage.jsx";
import MyPage from "./MyPage.jsx";
import AuthProvider from "./AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <AuthProvider>
      <App />
    </AuthProvider>

    {/*<RecogStepper />*/}
    {/*<RecommendGallery />*/}
    {/*<FoodCamera />*/}
  </React.StrictMode>,
);
