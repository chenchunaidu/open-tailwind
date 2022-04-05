import React from "react";
import { Box } from "@mantine/core";
import { BlockComponentProps } from "../../types/editor.types";
import { useRecoilState } from "recoil";
import { editorStateAtom } from "../../atoms/editor.atom";
import useUpdateBlockProps from "../../hooks/useUpdateBlockProps";
import { BoxSx } from "@mantine/core/lib/components/Box/use-sx/use-sx";

export interface CustomDivProps {
  content?: string;
}

const CustomDiv: React.FC<BlockComponentProps> = ({ blockId }) => {
  const [block] = useRecoilState(editorStateAtom);
  const [updateEditorProps] = useUpdateBlockProps();
  const currentBlock = block[blockId];
  const { props } = currentBlock;

  const { content, ...styles } = props as CustomDivProps;

  return (
    <Box
      contentEditable="true"
      suppressContentEditableWarning={true}
      onBlur={(e: React.FormEvent<HTMLDivElement>) =>
        updateEditorProps({
          blockId,
          propName: "content",
          value: e?.currentTarget?.innerText,
        })
      }
      sx={{ ...styles } as BoxSx}
    >
      {content}
    </Box>
  );
};

export default CustomDiv;
