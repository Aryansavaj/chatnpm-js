import type { InputSubmitContent } from "@/types";
import type { DateInputBlock } from "@chat77npm/blocks-inputs/date/schema";
type Props = {
    onSubmit: (inputValue: InputSubmitContent) => void;
    options?: DateInputBlock["options"];
    defaultValue?: string;
};
export declare const DateForm: (props: Props) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=DateForm.d.ts.map