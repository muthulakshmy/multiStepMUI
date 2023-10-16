import React from "react";
import Thankyou from "./icons/icon-thank-you.svg";
import { CardMedia, Box, Typography } from "@mui/material";

const FifthPage = () => {
  return (
    <Box sx={{ p: 7, textAlign: "center", mt: 10 }}>
      <CardMedia
        image={Thankyou}
        sx={{ width: 70, height: 70, ml: 20 }}
      ></CardMedia>
      <Typography
        variant="h4"
        sx={{
          color: "hsl(213, 96%, 18%)",
          fontFamily: "ubuntu",
          fontWeight: 600,
        }}
      >
        Thank you!
      </Typography>
      <Typography
        sx={{
          fontSize: 14,
          color: "hsl(231, 11%, 63%)",
          mb: 3,
          fontFamily: "ubuntu",
        }}
      >
        Thanks for confirming your subscription! we hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </Typography>
    </Box>
  );
};

export default FifthPage;
