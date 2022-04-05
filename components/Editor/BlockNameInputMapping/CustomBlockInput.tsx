import { TextInput, TextInputProps } from "@mantine/core";
import React from "react";

interface CustomTextBlockProps extends Omit<TextInputProps, "onChange"> {
  onChange: (input: string) => void;
}

const CustomTextInput: React.FC<CustomTextBlockProps> = ({
  onChange,
  ...props
}) => {
  return (
    <TextInput
      onChange={(e) => {
        onChange(e.target.value);
      }}
      {...props}
    />
  );
};

export default CustomTextInput;
