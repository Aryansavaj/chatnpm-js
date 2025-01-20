import type { BotContext, InputSubmitContent } from "@/types";
import type { FileInputBlock } from "@chat77npm/blocks-inputs/file/schema";
type Props = {
    context: BotContext;
    block: FileInputBlock;
    onSubmit: (url: InputSubmitContent) => void;
    onSkip: (label: string) => void;
};
export declare const FileUploadForm: (props: Props) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=FileUploadForm.d.ts.map