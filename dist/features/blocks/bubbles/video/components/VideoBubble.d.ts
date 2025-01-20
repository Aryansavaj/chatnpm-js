import type { VideoBubbleBlock } from "@chat77npm/blocks-bubbles/video/schema";
type Props = {
    content: VideoBubbleBlock["content"];
    onTransitionEnd?: (ref?: HTMLDivElement) => void;
};
export declare const showAnimationDuration = 400;
export declare const VideoBubble: (props: Props) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=VideoBubble.d.ts.map