import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Username from "./Components/Username";
import Email from "./Components/Email";
import Phone from "./Components/Phone";

const FirstPage = ({ activeStep, setActiveStep, steps }) => {
  const [errors, setErrors] = useState({ pwd: false });
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleNext = () => {
    if (username && phone && email) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };
  function handleUsername(e) {
    setUserName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePhone(e) {
    setPhone(e.target.value);
  }

  return (
    <Box sx={{ p: 5 }}>
      <Typography
        variant="h4"
        sx={{
          color: "hsl(213, 96%, 18%)",
          fontFamily: "ubuntu",
          fontWeight: 600,
        }}
      >
        Personal Info
      </Typography>
      <Typography
        sx={{ fontSize: 14, color: "hsl(231, 11%, 63%)", fontFamily: "ubuntu" }}
      >
        Please provide your name, email address, and phone number.
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", mt: 1, mb: 3 }}>
        <Box>
          <Username
            onChange={handleUsername}
            value={username}
            onBlur={(e, error) => {
              setErrors((state) => ({ ...state, pwd: error }));
            }}
          />
        </Box>
        <Box>
          <Email
            onChange={handleEmail}
            value={email}
            onBlur={(e, error) => {
              setErrors((state) => ({ ...state, pwd: error }));
            }}
          />
        </Box>
        <Box>
          <Phone
            onChange={handlePhone}
            value={phone}
            onBlur={(e, error) => {
              setErrors((state) => ({ ...state, pwd: error }));
            }}
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button
          onClick={handleNext}
          sx={{
            backgroundColor: "blue",
            color: "white",
            fontFamily: "ubuntu",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          {activeStep === steps.length - 1 ? "Finish" : "Next Step"}
        </Button>
      </Box>
    </Box>
  );
};

export default FirstPage;
