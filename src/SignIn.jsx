import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  CheckboxElement,
  FormContainer,
  FormErrorProvider,
  PasswordElement,
  TextFieldElement,
} from "react-hook-form-mui";
import Layout from "./Layout.jsx";
import { Alert, Button, CircularProgress, Stack } from "@mui/material";
import { useState } from "react";
import { useAuth } from "./AuthProvider.jsx";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export default function SignIn() {
  const [result, setResult] = useState("null");
  const [resultInfo, setResultInfo] = useState("Default");
  const [loading, setLoading] = useState(false);
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const onSignUp = async (data) => {};
  const onLogin = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(10000),
      });
      const json_response = await response.json();
      console.log(json_response["result"]);
      if (json_response["result"] === "success") {
        setResult("success");
        setResultInfo(json_response["info"]);
        alert(json_response["access_token"]);
        setToken(json_response["access_token"]);
        setTimeout(() => {
          navigate("../contact", { replace: true });
          navigate(0);
        }, 2000);
      } else {
        setResult("error");
        setResultInfo(json_response["info"]);
        setToken(null);
      }
    } catch (e) {
      setResult("error");
      setLoading(false);
      setResultInfo("error occurred");
    }
    setLoading(false);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            paddingTop: 7,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <FormContainer onSuccess={onLogin}>
            <FormErrorProvider
              onError={(error) => {
                return error.message;
              }}
            >
              <Stack spacing={2} direction="column">
                <TextFieldElement required label={"Email"} name={"email"} />
                <PasswordElement required label={"密码"} name={"password"} />
                <CheckboxElement
                  name={"agree"}
                  label={"Agree"}
                  required
                  onChange={(ev, checked) => console.log(ev, checked)}
                />
                {result === "success" && (
                  <Alert severity="success">{resultInfo}</Alert>
                )}
                {result === "error" && (
                  <Alert severity="error">{resultInfo}</Alert>
                )}
                <Button
                  type={"submit"}
                  variant={"contained"}
                  color={"primary"}
                  disabled={loading}
                  // onClick={onLogin}
                >
                  {loading && <CircularProgress size={24} />} Sign In
                </Button>
                <Button
                  type={"submit"}
                  variant={"contained"}
                  color={"primary"}
                  disabled={loading}
                  // onClick={onSignUp}
                >
                  {loading && <CircularProgress size={24} />} Sign Up
                </Button>
              </Stack>
            </FormErrorProvider>
          </FormContainer>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
