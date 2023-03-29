import React, { useState } from "react";
import illustration_login from "../images/illustration_login.png";
import logo from "../images/logo.svg";
import {
  Box,
  TextField,
  Typography,
  Checkbox,
  Button,
  label,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const SignIn = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submitHandler = () => {
    console.log("form submitted successfully");
    alert("form submitted");
  };

  return (
    <div style={{ display: "flex", backgroundColor: "#fbfbfb" }}>
      <div className="inn_div">
        <div>
          <img src={logo} className="logo" />
        </div>
        <div className="first_clmn">
          <h1>Hi, Welcome Back</h1>
          <img src={illustration_login} />
        </div>
      </div>
      <div className="second_clmn">
        <form>
          <Box display="flex" flexDirection={"column"}>
            <h2>Sign in to EMI Provider</h2>
            <Typography className="main_typo">
              Don't have an account? <a>Get started</a>
            </Typography>
            <div className="textfield">
              <TextField fullWidth label="Email Address" id="fullWidth" />
            </div>
            <div className="textfield">
              <FormControl fullWidth variant="outlined">
                <InputLabel
                  className="input_field"
                  htmlFor="outlined-adornment-password"
                >
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </div>

            <div className="check_typo">
              <Checkbox style={{ marginTop: "-15px" }} />
              <Typography className="typo_css">Forgot password?</Typography>
            </div>
            <Button className="login" onClick={submitHandler}>
              Login
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
