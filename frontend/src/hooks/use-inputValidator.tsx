import { useState } from 'react';

interface InputValidatorProps {
  setInput: React.Dispatch<React.SetStateAction<string>>;
  errorCondition: boolean;
}

const useInputValidator = ({setInput, errorCondition}:InputValidatorProps) => {
  const [inputIsTouched, setInputIsTouched] = useState(false);
  const isInvalid = !errorCondition && inputIsTouched;
  const borderColor = isInvalid ? "invalid" : "";

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput(() => e.target.value);
  };

  const blurHandler = () => {
    setInputIsTouched(true);
  };

  const resetHandler = () => {
    setInput("");
    setInputIsTouched(false);
  }

  return { changeHandler, blurHandler, isInvalid, resetHandler, borderColor};
}

export default useInputValidator;