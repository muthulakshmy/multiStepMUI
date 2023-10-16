import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  Card,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import Bgimage from "./images/bg-sidebar-desktop.svg";
import { useState } from "react";
import FirstPage from "./Pages/FirstPage";
import FifthPage from "./Pages/FifthPage";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";
import FourthPage from "./Pages/FourthPage";
import { FormProvider } from "./FormContext";
function App() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { value1: "STEP 1", value2: "YOUR INFO" },
    { value1: "STEP 2", value2: "SELECT PLAN" },
    { value1: "STEP 3", value2: "ADD-ONS" },
    { value1: "STEP 4", value2: "SUMMARY" },
  ];

  const handleStep = (step) => () => {
    setActiveStep(step);
  };
 const stepStyle = {
    padding: 2,
    "& .Mui-active": {
      "&.MuiStepIcon-root": {
        // color: "white",
        fontSize: "2rem",

        borderColor:"blue"
      },
      "& .MuiStepConnector-line": {
        borderColor: "white"
      }
    },
    // "& .Mui-completed": {
      "&.MuiStepIcon-root": {
        color: "red",
        borderColor:"white",
        fontSize: "2rem",
      },
      "& .MuiStepConnector-line": {
        borderColor: "blue"
      }
    // }
  }
  
  
  return (
    <FormProvider>
      <Box sx={{ backgroundColor: "lightblue" }}>
        <Paper
          sx={{
            backgroundColor: "white",
            padding: 2,
            width: 750,
            height: 500,
            borderRadius: 3,
            ml: 20,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box>
              <Card
                sx={{
                  height: 500,
                  width: 250,
                  backgroundImage: `url(${Bgimage})`,
                }}
              >
                <Stepper
                  nonLinear
                  activeStep={activeStep}
                  sx={{...stepStyle,
                    display: "flex",
                    flexDirection: "column",
                    mt: 5,
                    mr: 10,
                  }}
                >
                  {steps.map((label, index) => {
                    const stepProps = {};

                    return (
                      <Step
                        key={label}
                        {...stepProps}
                        sx={{ mb: 3 }}
                        completed={activeStep[index]}
                      >
                        <Box sx={{ display: "flex", width: 120 }}>
                          <Box sx={{ textAlign: "start" }}>
                            <StepLabel
                              onClick={handleStep(index)}
                              sx={{ color: "white" }}
                            ></StepLabel>
                          </Box>

                          <Box>
                            <Typography
                              sx={{ fontSize: 12, fontFamily: "ubuntu",color: "hsl(231, 11%, 63%)", }}
                            >
                              {label.value1}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: 12,
                                color: "white",
                                fontFamily: "ubuntu",
                                fontWeight: 600,
                              }}
                            >
                              {label.value2}
                            </Typography>
                          </Box>
                        </Box>
                      </Step>
                    );
                  })}
                </Stepper>
              </Card>
            </Box>
            <Box>
              {activeStep === steps.length ? (
                <>
                  <FifthPage />
                </>
              ) : (
                <>
                  <Box></Box>
                </>
              )}

              {activeStep === 0 && (
                <FirstPage
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                  steps={steps}
                />
              )}
              {activeStep === 1 && (
                <SecondPage
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                  steps={steps}
                />
              )}
              {activeStep === 2 && (
                <ThirdPage
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                  steps={steps}
                />
              )}
              {activeStep === 3 && (
                <FourthPage
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                  steps={steps}
                />
              )}
            </Box>
          </Box>
        </Paper>
      </Box>
    </FormProvider>
  );
}

export default App;
