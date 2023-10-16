import React from "react";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import { useStepContext } from "../FormContext";

const addOnBoxStyle = {
  border: "1px solid hsl(231, 11%, 63%)",
  borderRadius: 2,
  width: 390,
  p: 1,
  mb: 3,

  "&:hover": {
    border: "1px solid hsl(228, 100%, 84%)",
  },

  display: "flex",
  justifyContent: "space-between",
};

const serviceStyle = {
  fontFamily: "ubuntu",
  color: "hsl(213, 96%, 18%)",
  fontWeight: 600,
};

const addOnExtraStyle = {
  fontFamily: "ubuntu",
  color: "hsl(231, 11%, 63%)",
  fontSize: 10,
};

const addOnPriceStyle = {
  color: "hsl(243, 100%, 62%)",
  fontSize: 15,
  mt: 1,
  fontFamily: "ubuntu",
};

const ThirdPage = ({ activeStep, setActiveStep, steps }) => {
  const {
    planData,
    addons,
    selectedAddons,
    setSelectedAddons,
    setAddOnPack,
    setCheckedState,
  } = useStepContext();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const toggleAddon = (addon, id) => {
    setCheckedState(id);
    setAddOnPack(id);
    setSelectedAddons((addons) =>
      addons.includes(addon)
        ? addons.filter((value) => value !== addon)
        : [...addons, addon]
    );
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
        Pick add-ons
      </Typography>
      <Typography sx={{ fontSize: 14, color: "hsl(231, 11%, 63%)", mb: 3 }}>
        Add-ons help enhance your gaming experience.
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {addons.map((addon, index) => (
          <Box
            sx={
              selectedAddons.includes(addon)
                ? {
                    ...addOnBoxStyle,
                    border: "1px solid hsl(228, 100%, 84%)",
                    backgroundColor: "hsl(231, 100%, 99%)",
                  }
                : { ...addOnBoxStyle, border: "1px solid gray" }
            }
          >
            <Checkbox
              checked={selectedAddons.includes(addon)}
              onChange={() => toggleAddon(addon, index)}
            />
            <Box sx={{ mr: 15 }}>
              <Typography sx={serviceStyle}>{addon.name}</Typography>
              <Typography sx={addOnExtraStyle}>{addon.subaddons}</Typography>
            </Box>
            <Box>
              <Typography sx={addOnPriceStyle}>
                {planData 
                  ? "+$" + `${addon.priceYearly}` + "/yr"
                  
                  :  "+$" + `${addon.priceMonthly}` + "/mo"
                  }
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2, mt: 3 }}>
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

export default ThirdPage;
