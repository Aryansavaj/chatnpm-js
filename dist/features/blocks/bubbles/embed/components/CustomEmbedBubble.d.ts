import type { InputSubmitContent } from "@/types";
import type { CustomEmbedBubble as CustomEmbedBubbleProps } from "@chat77npm/bot-engine/schemas/api";
type Props = {
    content: CustomEmbedBubbleProps["content"];
    onTransitionEnd?: (ref?: HTMLDivElement) => void;
    onCompleted: (reply?: InputSubmitContent) => void;
};
export declare const showAnimationDuration = 400;
export declare const CustomEmbedBubble: (props: Props) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=CustomEmbedBubble.d.ts.map