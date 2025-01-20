import type { InputSubmitContent } from "@/types";
import type { ChoiceInputBlock } from "@chat77npm/blocks-inputs/choice/schema";
type Props = {
    chunkIndex: number;
    defaultItems: ChoiceInputBlock["items"];
    options: ChoiceInputBlock["options"];
    onSubmit: (value: InputSubmitContent) => void;
};
export declare const Buttons: (props: Props) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=Buttons.d.ts.map