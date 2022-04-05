import { SelectItem } from "@mantine/core";
import { PropInput } from "../../../types/editor.types";

export const imageFitOptions: SelectItem[] = [
  { label: "Contain", value: "contain" },
  { label: "Cover", value: "cover" },
  { label: "Fill", value: "fill" },
  { label: "None", value: "none" },
  { label: "Scale down", value: "scale-down" },
];

export const objectFitSelect: PropInput = {
  label: "Image fit",
  name: "objectFit",
  component: "select",
  options: imageFitOptions,
};
