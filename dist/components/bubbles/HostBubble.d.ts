import type { InputSubmitContent } from "@/types";
import type { ChatMessage } from "@chat77npm/bot-engine/schemas/api";
import type { Settings } from "@chat77npm/settings/schemas";
type Props = {
    message: ChatMessage;
    typingEmulation: Settings["typingEmulation"];
    isTypingSkipped: boolean;
    onTransitionEnd?: (ref?: HTMLDivElement) => void;
    onCompleted: (reply?: InputSubmitContent) => void;
};
export declare const HostBubble: (props: Props) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=HostBubble.d.ts.map