import type { BotContext, ChatChunk as ChatChunkType, InputSubmitContent } from "@/types";
import type { ContinueChatResponse } from "@chat77npm/bot-engine/schemas/api";
import type { Settings } from "@chat77npm/settings/schemas";
import type { Theme } from "@chat77npm/theme/schemas";
type Props = Pick<ContinueChatResponse, "messages" | "input"> & {
    theme: Theme;
    settings: Settings;
    index: number;
    context: BotContext;
    hasError: boolean;
    hideAvatar: boolean;
    streamingMessageId: ChatChunkType["streamingMessageId"];
    isTransitionDisabled?: boolean;
    onNewBubbleDisplayed: (blockId: string) => Promise<void>;
    onScrollToBottom: (ref?: HTMLDivElement, offset?: number) => void;
    onSubmit: (answer?: InputSubmitContent) => void;
    onSkip: () => void;
    onAllBubblesDisplayed: () => void;
};
export declare const ChatChunk: (props: Props) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=ChatChunk.d.ts.map