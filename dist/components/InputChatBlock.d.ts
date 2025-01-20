import type { BotContext, InputSubmitContent } from "@/types";
import type { ContinueChatResponse } from "@chat77npm/bot-engine/schemas/api";
import type { Theme } from "@chat77npm/theme/schemas";
type Props = {
    ref: HTMLDivElement | undefined;
    block: NonNullable<ContinueChatResponse["input"]>;
    hasHostAvatar: boolean;
    guestAvatar?: NonNullable<Theme["chat"]>["guestAvatar"];
    chunkIndex: number;
    context: BotContext;
    isInputPrefillEnabled: boolean;
    hasError: boolean;
    onTransitionEnd: () => void;
    onSubmit: (content: InputSubmitContent) => void;
    onSkip: () => void;
};
export declare const InputChatBlock: (props: Props) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=InputChatBlock.d.ts.map