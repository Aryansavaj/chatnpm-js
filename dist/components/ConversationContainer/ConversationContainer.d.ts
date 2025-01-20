import type { BotContext, OutgoingLog } from "@/types";
import type { InputBlock } from "@chat77npm/blocks-inputs/schema";
import type { StartChatResponse } from "@chat77npm/bot-engine/schemas/api";
type Props = {
    initialChatReply: StartChatResponse;
    context: BotContext;
    onNewInputBlock?: (inputBlock: InputBlock) => void;
    onAnswer?: (answer: {
        message: string;
        blockId: string;
    }) => void;
    onEnd?: () => void;
    onNewLogs?: (logs: OutgoingLog[]) => void;
    onProgressUpdate?: (progress: number) => void;
};
export declare const ConversationContainer: (props: Props) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=ConversationContainer.d.ts.map