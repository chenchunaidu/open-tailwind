import { SelectItem } from "@mantine/core";
import { PropInput } from "../../../types/editor.types";

export const floatOptions: SelectItem[] = [
  { label: "Float right", value: "right" },
  { label: "Float left", value: "left" },
  { label: "None", value: "none" },
];

export const FloatSelect: PropInput = {
  label: "Float",
  name: "float",
  component: "select",
  options: floatOptions,
};
