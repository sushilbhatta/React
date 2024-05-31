import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);
  const valueIsValid = validationFn(enteredValue);
  function handleInputChange(e) {
    setEnteredValue(e.target.value);
    // disapperar error message once the user types again
    setDidEdit(false);
  }
  function handleInputBlur() {
    //set the didEdit state true once the user leve the partivular input field
    setDidEdit(true);
    console.log("Blured");
  }
  return {
    value: enteredValue,
    didEdit,
    handleInputBlur,
    handleInputChange,
    hasError: didEdit && !valueIsValid,
  };
}
