import { Select } from "@mantine/core";
import { BlockNames, PropInput } from "../../../types/editor.types";

import { ColorControl } from "./CustomColorSwatch";
import CustomBlockInput from "./CustomBlockInput";
import { AlignSelect } from "./alignSelect";
import { objectFitSelect } from "./objectFitSelect";
import { SizeSelect } from "./sizeSelect";
import { TransformSelect } from "./transformSelect";
import { FontWeightSelect } from "./weightSelect";

export const inputComponentMapping = {
  text: CustomBlockInput,
  select: Select,
  color: ColorControl,
};

type BlockNameInputComponentMapping = Record<BlockNames, PropInput[]>;

export const blockNameInputComponentMapping: BlockNameInputComponentMapping = {
  Button: [{ label: "Color", name: "color", component: "color" }, SizeSelect],
  Block: [
    AlignSelect,
    SizeSelect,
    { label: "Color", name: "color", component: "color" },
    TransformSelect,
    FontWeightSelect,
  ],
  Columns: [
    { label: "Background Color", name: "background", component: "color" },
  ],
  Image: [
    { label: "Image url", name: "src", component: "text" },
    { label: "Alt", name: "alt", component: "text" },
    { label: "Caption", name: "caption", component: "text" },
    objectFitSelect,
    { label: "Width", name: "width", component: "text" },
    { label: "Height", name: "height", component: "text" },
  ],
  Heading1: [{ label: "Align", name: "align", component: "text" }],
  Heading2: [{ label: "Align", name: "align", component: "text" }],
  Heading3: [{ label: "Align", name: "align", component: "text" }],
  List: [],
  Rows: [
    { label: "Align", name: "align", component: "text" },
    { label: "Background Color", name: "background", component: "color" },
  ],
};
