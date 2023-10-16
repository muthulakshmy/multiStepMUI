import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useStepContext = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
  const [selectedPlanState, setSelectedPlanState] = useState("");
  const [planPrice, setPlanPrice] = useState(0);
  const [planData, setPlanData] = useState(" monthly");
  // const [data,setData]=useState(1)

  const [addOnPack, setAddOnPack] = useState(1);
  const [activeButton, setActiveButton] = useState(" ");
  const [addons, setAddons] = useState([
    {
      id: 1,
      name: "Online service",
      subaddons: "Access to multiplayer games",
      priceMonthly: 5,
      priceYearly: 50,
    },
    {
      id: 2,
      name: "Larger storage",
      subaddons: " 1TB of cloud save",
      priceMonthly: 10,
      priceYearly: 100,
    },
    {
      id: 3,
      name: "Customizable profile",
      subaddons: "Custom theme on your profile",
      priceMonthly: 15,
      priceYearly: 150,
    },
  ]);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const[checkedState,setCheckedState] = useState(0)
  return (
    <FormContext.Provider
      value={{
        selectedPlanState,
        setSelectedPlanState,
        planPrice,
        setPlanPrice,
        planData,
        addons,
        setAddons,
        selectedAddons,
        setSelectedAddons,
        setPlanData,
        activeButton,
        setActiveButton,
        addOnPack,
        setAddOnPack,
        checkedState,
        setCheckedState
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
