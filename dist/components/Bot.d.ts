import type { OutgoingLog } from "@/types";
import type { InputBlock } from "@chat77npm/blocks-inputs/schema";
import type { StartFrom } from "@chat77npm/bot-engine/schemas/api";
import type { Font } from "@chat77npm/theme/schemas";
export type BotProps = {
    chat77submodule: string | any;
    isPreview?: boolean;
    resultId?: string;
    prefilledVariables?: Record<string, unknown>;
    apiHost?: string;
    font?: Font;
    progressBarRef?: HTMLDivElement;
    startFrom?: StartFrom;
    sessionId?: string;
    onNewInputBlock?: (inputBlock: InputBlock) => void;
    onAnswer?: (answer: {
        message: string;
        blockId: string;
    }) => void;
    onInit?: () => void;
    onEnd?: () => void;
    onNewLogs?: (logs: OutgoingLog[]) => void;
    onChatStatePersisted?: (isEnabled: boolean) => void;
};
export declare const Bot: (props: BotProps & {
    class?: string;
}) => import("solid-js").JSX.Element;
//# sourceMappingURL=Bot.d.ts.map