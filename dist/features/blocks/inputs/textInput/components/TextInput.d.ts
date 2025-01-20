import type { BotContext, InputSubmitContent } from "@/types";
import type { TextInputBlock } from "@chat77npm/blocks-inputs/text/schema";
type Props = {
    block: TextInputBlock;
    defaultValue?: string;
    context: BotContext;
    onSubmit: (value: InputSubmitContent) => void;
};
export declare const TextInput: (props: Props) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=TextInput.d.ts.map