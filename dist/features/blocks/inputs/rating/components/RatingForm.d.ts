import type { InputSubmitContent } from "@/types";
import type { RatingInputBlock } from "@chat77npm/blocks-inputs/rating/schema";
type Props = {
    block: RatingInputBlock;
    defaultValue?: string;
    onSubmit: (value: InputSubmitContent) => void;
};
export declare const RatingForm: (props: Props) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=RatingForm.d.ts.map