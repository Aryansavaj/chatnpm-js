import type { ImageBubbleBlock } from "@chat77npm/blocks-bubbles/image/schema";
type Props = {
    content: ImageBubbleBlock["content"];
    onTransitionEnd?: (ref?: HTMLDivElement) => void;
};
export declare const showAnimationDuration = 400;
export declare const mediaLoadingFallbackTimeout = 5000;
export declare const ImageBubble: (props: Props) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=ImageBubble.d.ts.map