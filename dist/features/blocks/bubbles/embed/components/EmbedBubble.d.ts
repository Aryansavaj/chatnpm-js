import type { InputSubmitContent } from "@/types";
import type { EmbedBubbleBlock } from "@chat77npm/blocks-bubbles/embed/schema";
type Props = {
    content: EmbedBubbleBlock["content"];
    onTransitionEnd?: (ref?: HTMLDivElement) => void;
    onCompleted?: (data?: InputSubmitContent) => void;
};
export declare const showAnimationDuration = 400;
export declare const EmbedBubble: (props: Props) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=EmbedBubble.d.ts.map