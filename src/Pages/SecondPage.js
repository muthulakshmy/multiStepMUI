import React, { useEffect, useState } from "react";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import { useStepContext } from "../FormContext";
import Arcade from "./icons/icon-arcade.svg";
import Advanced from "./icons/icon-advanced.svg";
import Pro from "./icons/icon-pro.svg";
import Switch from "@mui/material/Switch";

import { alpha, styled } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';


const IndigoSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: indigo[600],
    '&:hover': {
      backgroundColor: alpha(indigo[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: indigo[600],
  },
}));

const label = { inputProps: { "aria-label": "Size switch demo" } };
const planStyle = {
  color: "hsl(213, 96%, 18%)",
  fontFamily: "ubuntu",
  fontWeight: 600,
};
const freeStyle = {
  color: "hsl(213, 96%, 18%)",
  fontSize: 10,
  fontFamily: "ubuntu",
};
const priceStyle = {
  color: "hsl(231, 11%, 63%)",
  fontSize: 12,
  fontFamily: "ubuntu",
};

const SecondPage = ({ activeStep, setActiveStep, steps }) => {
  // const [plan, setPlan] = useState(false);
  const { setSelectedPlanState, setPlanPrice,planData, setPlanData,activeButton,setActiveButton } = useStepContext();
  // const [activeButton, setActiveButton] = useState({
  //   first:false,
  //   second: false,
  //   third: false,
  // });



  const handleNext = () => {
    
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handlePlanSelection = (plan, price) => {
    setActiveButton(plan)
    
    setSelectedPlanState(plan); 
    setPlanPrice(price);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  function handlePlan() {
    // if (plan === "monthly") {
      // setPlan(!plan);
      setPlanData(!planData);
    // } else {
    //   setPlan("yearly");
    //   setPlanData(plan);
    // }
  }
  
  useEffect(()=>{
    // setPlan(plan)
    // setPlanData(plan)
    // if (plan == "monthly") {
    //   setPlan("yearly");
    //   setPlanData(plan);
    // } else {
    //   setPlan("monthly");
    //   setPlanData(plan);
    // }
    
  },[])
  const priceAlignStyle = { textAlign: "left" };
  const iconStyle = { width: 30, height: 30, mb: 5 };
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
        Select you plan
      </Typography>
      <Typography
        sx={{ fontSize: 14, color: "hsl(231, 11%, 63%)", fontFamily: "ubuntu" }}
      >
        You have the option of monthly or yearly billing.
      </Typography>
      <Box sx={{ mt: 5 }}>
        <Button
          variant="outlined"
          name="Arcade"
          sx={{border:activeButton=="Arcade"? "1px solid blue":"1px solid gray",width: 120, height: 150,}}
          
          onClick={(e) =>
            handlePlanSelection("Arcade", planData ? 9 : 90)
          }
        >
          <Box>
            <Box>
              <CardMedia image={Arcade} sx={iconStyle}></CardMedia>
            </Box>
            <Box sx={priceAlignStyle}>
              <Typography sx={planStyle}>Arcade</Typography>
              {planData  ? (
                <Box>
                <Typography sx={priceStyle}>$90/yr</Typography>
                <Typography sx={freeStyle}>2 months free</Typography>
              </Box>
              ) : (
                <Typography sx={priceStyle}>$9/mo</Typography>
                
              )}
            </Box>
          </Box>
        </Button>

        <Button
          variant="outlined"
          name="Advanced"
          sx={{border:activeButton=="Advanced"? "2px solid blue":"1px solid gray",width: 120, height: 150,mr:2,ml:2}}

          onClick={(e) =>
            handlePlanSelection("Advanced", planData ? 12 : 120)
          }
        >
          <Box>
            <CardMedia image={Advanced} sx={iconStyle}></CardMedia>
            <Box sx={priceAlignStyle}>
              <Typography sx={planStyle}>Advanced</Typography>

              {planData ? (
                <>
                <Typography sx={priceStyle}>$120/yr</Typography>
                <Typography sx={freeStyle}>2 months free</Typography>
              </>
              ) : (
                
                <Typography sx={priceStyle}>$12/mo</Typography>

              )}
            </Box>
          </Box>
        </Button>
        <Button
          variant="outlined"
          name="Pro"
          sx={{border:activeButton=="Pro"? "2px solid blue":"1px solid gray",width: 120, height: 150,}}

          onClick={(e) =>
            handlePlanSelection("Pro", planData ? 15 : 150)
          }
        >
          <Box>
            <CardMedia image={Pro} sx={iconStyle}></CardMedia>
            <Box sx={priceAlignStyle}>
              <Typography sx={planStyle}>Pro</Typography>
              {planData ? (
                 <>
                 <Typography sx={priceStyle}>$150/yr</Typography>
                 <Typography sx={freeStyle}>2 months free</Typography>
               </>
              ) : (
               
                <Typography sx={priceStyle}>$15/mo</Typography>

              )}
            </Box>
          </Box>
        </Button>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "hsl(231, 100%, 99%)",
            alignItems: "center",
            justifyContent: "center",
            mt: 5,
            mb: 5,
          }}
        >
          <Typography
            sx={{
              color: "hsl(213, 96%, 18%)",
              fontSize: 16,
              mr: 1,
              fontFamily: "ubuntu",
              fontWeight: 600,
            }}
          >
            Monthly
          </Typography>

          <IndigoSwitch {...label}   onChange={handlePlan} checked={planData}   />
          <Typography
            sx={{
              fontSize: 16,
              ml: 1,
              color: "hsl(231, 11%, 63%)",
              fontFamily: "ubuntu",
              fontWeight: 600,
            }}
          >
            yearly
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1, color: "gray", fontFamily: "ubuntu" }}
        >
          Go Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button
          onClick={handleNext}
          sx={{
            backgroundColor: "hsl(243, 100%, 62%)",
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

export default SecondPage;
