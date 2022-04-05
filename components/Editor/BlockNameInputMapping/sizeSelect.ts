import { SelectItem } from "@mantine/core";
import { PropInput } from "../../../types/editor.types";

export const sizeOptions: SelectItem[] = [
  { label: "Extra small", value: "0.75rem" },
  { label: "Small", value: "0.875rem" },
  { label: "Medium", value: "1rem" },
  { label: "Large", value: "1.125rem" },
  { label: "Extra Large", value: "1.25rem" },
  { label: "2 Extra Large", value: "1.5rem" },
  { label: "3 Extra Large", value: "1.875rem" },
  { label: "4 Extra Large", value: "2.25rem" },
  { label: "5 Extra Large", value: "3rem" },
  { label: "6 Extra Large", value: "3.75rem" },
  { label: "7 Extra Large", value: "4.5rem" },
  { label: "8 Extra Large", value: "6rem" },
  { label: "9 Extra Large", value: "8rem" },
];

export const SizeSelect: PropInput = {
  label: "Size",
  name: "fontSize",
  component: "select",
  options: sizeOptions,
};
