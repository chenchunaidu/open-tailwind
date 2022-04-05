import { SelectItem } from "@mantine/core";
import { PropInput } from "../../../types/editor.types";

export const displayOptions: SelectItem[] = [
  { label: "Block", value: "block" },
  { label: "Inline Block", value: "inline-block" },
  { label: "Inline", value: "inline" },
  { label: "Flex", value: "flex" },
  { label: "Inline flex", value: "inline-flex" },
  { label: "Table", value: "table" },
  { label: "Inline table", value: "inline-table" },
  { label: "Table Caption", value: "table-caption" },
  { label: "Table Cell", value: "table-cell" },
  { label: "Table Column", value: "table-column" },
  { label: "Table Column Group", value: "table-column-group" },
  { label: "Table Footer Group", value: "table-footer-group" },
  { label: "Table Header Group", value: "table-header-group" },
  { label: "Table Row Group", value: "table-row-group" },
  { label: "Table Row", value: "table-row" },
  { label: "Flow Root", value: "flow-root" },
  { label: "Grid", value: "grid" },
  { label: "Inline grid", value: " inline-grid" },
  { label: "Contents", value: "contents" },
  { label: "List item", value: "list-item" },
  { label: "Hidden", value: "none" },
];

export const DisplaySelect: PropInput = {
  label: "Display",
  name: "display",
  component: "select",
  options: displayOptions,
};
