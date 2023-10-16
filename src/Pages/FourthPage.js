import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Link, Typography } from "@mui/material";
import { useStepContext } from "../FormContext";
const FourthPage = ({ activeStep, setActiveStep, steps }) => {
  const { selectedPlanState, planPrice, planData, selectedAddons } =
    useStepContext();

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let addonsPrice = 0;

    if (selectedAddons && selectedAddons.length > 0) {
      addonsPrice = selectedAddons.reduce((acc, addon) => {
        return (
          acc + (planData == "monthly" ? addon.priceMonthly : addon.priceYearly)
        );
      }, 0);
    }

    const total = planPrice + addonsPrice;
    setTotalPrice(total);
  }, [selectedAddons, planData, planPrice]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  function handleChange() {
    setActiveStep(1);
  }
  const addOnsStyle = {
    display: "flex",
    justifyContent: "space-between",
    color: "hsl(231, 11%, 63%)",
    fontFamily: "ubuntu",
  };

  const fontColorStyle = { color: "hsl(231, 11%, 63%)", fontFamily: "ubuntu" };
  const monthPlanStyle = { fontFamily: "ubuntu", fontWeight: 600 };
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
        Finishing up
      </Typography>
      <Typography
        sx={{
          fontSize: 14,
          color: "hsl(231, 11%, 63%)",
          mb: 3,
          fontFamily: "ubuntu",
        }}
      >
        Double-check everything looks OK before confirming.
      </Typography>
      <Box
        sx={{
          backgroundColor: "hsl(231, 100%, 99%)",
          width: 400,
          borderRadius: 2,
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography sx={monthPlanStyle}>
              {selectedPlanState}{" "}
              {planData == "monthly" ? "(monthly)" : "(yearly)"}
            </Typography>
            <Link sx={{ color: "hsl(213, 96%, 18%)" }}>
              <Typography onClick={handleChange} sx={{ fontFamily: "ubuntu" }}>
                Change
              </Typography>
            </Link>
          </Box>
          <Box>
            <Typography sx={monthPlanStyle}>
              +${planPrice}/ {planData == "monthly" ? "mo" : "yr"}
            </Typography>
          </Box>
        </Box>
        <Divider variant="middle" />
        <Box sx={{ mb: 3, p: 2 }}>
          {selectedAddons && selectedAddons.length > 0 ? (
            selectedAddons.map((addon,index) => (
              <Box sx={addOnsStyle}>
                <Typography sx={{ fontFamily: "ubuntu" }}>
                  {addon.name}
                </Typography>
                <Typography sx={{ fontFamily: "ubuntu" }}>
                  {planData == "monthly"
                    ? `+${addon.priceMonthly}/mo`
                    : `+${addon.priceYearly}/yr`}
                </Typography>
              </Box>
            ))
          ) : (
            <Typography sx={{ fontFamily: "ubuntu" }}>
              No add-ons selected
            </Typography>
          )}
        </Box>
      </Box>
      <Box sx={{ mb: 3, display: "flex", justifyContent: "space-between" }}>
        <Typography sx={fontColorStyle}>Total (per month)</Typography>
        <Typography
          sx={{ color: "hsl(243, 100%, 62%)", fontFamily: "ubuntu" }}
        >{`$${totalPrice}${planData == "monthly" ? "/mo" : "/yr"}`}</Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", pt: 2, mt: 10 }}>
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
          {activeStep === steps.length - 1 ? "Confirm" : "Next Step"}
        </Button>
      </Box>
    </Box>
  );
};

export default FourthPage;
