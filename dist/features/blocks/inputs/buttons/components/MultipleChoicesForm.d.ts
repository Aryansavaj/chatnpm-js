import type { InputSubmitContent } from "@/types";
import type { ChoiceInputBlock } from "@chat77npm/blocks-inputs/choice/schema";
type Props = {
    defaultItems: ChoiceInputBlock["items"];
    options: ChoiceInputBlock["options"];
    onSubmit: (value: InputSubmitContent) => void;
};
export declare const MultipleChoicesForm: (props: Props) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=MultipleChoicesForm.d.ts.map