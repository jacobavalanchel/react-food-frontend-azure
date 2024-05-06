import React from "react";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import HomePage from "./HomePage.jsx";
import SuggestionPage from "./SuggestionPage.jsx";
import MarketPage from "./MarketPage.jsx";
import MyPage from "./MyPage.jsx";
import { useAuth } from "./AuthProvider.jsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import SignIn from "./SignIn.jsx";

function App() {
  const token = useAuth();

  const routesForPublic = [
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <SuggestionPage />,
    },
    {
      path: "/services",
      element: <MarketPage />,
    },
  ];
  const routesForAuthOnly = [
    {
      path: "/",
      element: <ProtectedRoute redirectIfUnAuth={"/sign-in"} />,
      children: [
        {
          path: "contact",
          element: <MyPage />,
        },
      ],
    },
  ];
  const routesForNotAuthOnly = [];

  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        ...routesForPublic,
        ...(!token ? routesForNotAuthOnly : []),
        ...routesForAuthOnly,
      ],
    },
  ]);
  console.log(token);
  const [mode] = React.useState("light");
  const defaultTheme = createTheme({ palette: { mode } });
  //store token to localStorage:
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
