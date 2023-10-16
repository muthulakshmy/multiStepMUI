import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Username from "./Components/Username";
import Email from "./Components/Email";
import Phone from "./Components/Phone";

const FirstPage = ({ setActiveStep }) => {
  const [errors, setErrors] = useState({ pwd: false });
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleNext = () => {
    if (username && phone && email) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

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
            onChange={(e) => setUserName(e.target.value)}
            value={username}
            onBlur={(e, error) => {
              setErrors((state) => ({ ...state, pwd: error }));
            }}
          />
        </Box>
        <Box>
          <Email
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            onBlur={(e, error) => {
              setErrors((state) => ({ ...state, pwd: error }));
            }}
          />
        </Box>
        <Box>
          <Phone
            onChange={(e) => setPhone(e.target.value)}
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
            backgroundColor: "hsl(213, 96%, 18%)",
            color: "white",
            fontFamily: "ubuntu",
            "&:hover": {
              backgroundColor: "hsl(228, 100%, 84%)",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          Next Step
        </Button>
      </Box>
    </Box>
  );
};

export default FirstPage;
