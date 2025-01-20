import type { TextBubbleBlock } from "@chat77npm/blocks-bubbles/text/schema";
import type { Settings } from "@chat77npm/settings/schemas";
type Props = {
    content: TextBubbleBlock["content"];
    typingEmulation: Settings["typingEmulation"];
    isTypingSkipped: boolean;
    onTransitionEnd?: (ref?: HTMLDivElement) => void;
};
export declare const showAnimationDuration = 400;
export declare const TextBubble: (props: Props) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=TextBubble.d.ts.map