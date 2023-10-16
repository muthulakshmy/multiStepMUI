import { FormControl, TextField,  InputLabel, } from "@mui/material";
import React, { useState } from "react";
let errorMessage = {
  emptyField: "This field is required",
  InvalidUsername:
    "Enter valid Number",
};
let emailValidate = /^([+0-9]{2,})$/;
const Phone = (props) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  function handleBlur(e) {
    const { value } = e.target;
    setValue(value);
    const usernameRegex = new RegExp(emailValidate);
    setError(!usernameRegex.test(value));
    if (props.onBlur) {
      props?.onBlur?.(e, !usernameRegex.test(value));
    }
  }
  return (
    <div>
      <FormControl error={error}>
     
      <InputLabel sx={{color:"hsl(231, 11%, 63%)"}}>Phone Number</InputLabel>
      
      {error && (
          <InputLabel sx={{fontSize:15,ml:30}}>{value ? errorMessage.InvalidUsername : errorMessage.emptyField}</InputLabel>  
        )}
     


        <TextField
          error={error}
          sx={{ width: 400,mt:5 }}
            placeholder="e.g.Stephen King"
          {...props}
          onBlur={handleBlur}
        />

       
      </FormControl>
    </div>
  );
};

export default Phone;
