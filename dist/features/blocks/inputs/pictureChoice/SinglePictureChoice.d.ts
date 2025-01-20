import type { InputSubmitContent } from "@/types";
import type { PictureChoiceBlock } from "@chat77npm/blocks-inputs/pictureChoice/schema";
type Props = {
    defaultItems: PictureChoiceBlock["items"];
    options: PictureChoiceBlock["options"];
    onSubmit: (value: InputSubmitContent) => void;
    onTransitionEnd: () => void;
};
export declare const SinglePictureChoice: (props: Props) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=SinglePictureChoice.d.ts.map