import { useState, ChangeEvent } from "react";

interface FieldProps {
  type: string;
  name: string;
}

interface UseFieldReturn extends FieldProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const useField = ({ type, name }: FieldProps): UseFieldReturn => {
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return {
    type,
    name,
    value,
    onChange,
  };
};

export default useField;
