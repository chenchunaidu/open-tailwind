import { nanoid } from "nanoid";
import { blockNameComponentMapping } from "../components/Editor/data";
import { BlockItem } from "../types/editor.types";
import { GetDefaultBlockData } from "./types";
import cloneDeep from "lodash.clonedeep";

export const getDefaultBlockData: GetDefaultBlockData = (
  blockName,
  selectedBlockId
) => {
  const { props } = blockNameComponentMapping[blockName];
  let children: string[] = [];
  const allBlocks: BlockItem[] = [];
  if (blockName !== "Rows" && blockName !== "Columns") {
    children = [];
  }
  const mainBlock = cloneDeep({
    props,
    children: children,
    blockName,
    id: nanoid(),
    parentId: selectedBlockId,
  });
  allBlocks.push(mainBlock);
  return { newBlocks: allBlocks, mainBlockId: mainBlock.id };
};
