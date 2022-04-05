// import { Image } from "@mantine/core";
import { BlockComponentProps } from "../../types/editor.types";
import { editorStateAtom } from "../../atoms/editor.atom";
import { useRecoilState } from "recoil";

const CustomImage: React.FC<BlockComponentProps> = ({ blockId }) => {
  const [block] = useRecoilState(editorStateAtom);
  const { props } = block[blockId];

  return <img alt={props["alt"] as string} {...props} />;
};

export default CustomImage;
