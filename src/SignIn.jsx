import * as React from "react";
import { useState } from "react";
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
import { Alert, Button, CircularProgress, Link, Stack } from "@mui/material";
import { useAuth } from "./AuthProvider.jsx";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

const defaultTheme = createTheme();

export default function SignIn() {
  const [result, setResult] = useState("null");
  const [resultInfo, setResultInfo] = useState("Default");
  const [loading, setLoading] = useState(false);
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const onFormSubmit = (data) => {
    onLogin(data);
  };
  const onSignUp = (data) => {};
  const onLogin = (data) => {
    setLoading(true);
    fetch("http://127.0.0.1:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      signal: AbortSignal.timeout(10000),
    })
      .then((response) => response.json)
      .then((result) => {
        if (result["result"] === "success") {
          setResult("success");
          setResultInfo(result["info"]);
          setToken(result["access_token"]);
          setTimeout(() => {
            navigate("../contact", { replace: true });
            navigate(0);
          }, 2000);
        } else {
          setResult("error");
          setResultInfo(result["info"]);
          setToken(null);
        }
      })
      .catch((e) => {
        setResult("error");
        setLoading(false);
        setResultInfo("error occurred");
      });
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
          <Typography variant="h4" gutterBottom>
            {isLogin ? "登录" : "注册"}
          </Typography>
          <FormContainer onSuccess={onFormSubmit}>
            <FormErrorProvider
              onError={(error) => {
                return error.message;
              }}
            >
              <Stack spacing={2} direction="column">
                <TextFieldElement required label={"Email"} name={"email"} />
                <PasswordElement required label={"密码"} name={"password"} />
                {!isLogin && (
                  <>
                    <PasswordElement
                      required
                      label={"确认密码"}
                      name={"password-confirm"}
                    />
                    <CheckboxElement
                      name={"agree"}
                      label={"我同意用户协议"}
                      required
                      onChange={(ev, checked) => console.log(ev, checked)}
                    />
                  </>
                )}

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
                >
                  {loading && <CircularProgress size={24} />}{" "}
                  {isLogin ? "登录 " : "注册 "}
                </Button>

                <Typography variant="body1" style={{ marginTop: "1rem" }}>
                  {isLogin ? "还没有账户么? " : "已有账户了么? "}
                  <Link href="#" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "点此处注册" : "点此处登录"}
                  </Link>
                </Typography>
              </Stack>
            </FormErrorProvider>
          </FormContainer>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
