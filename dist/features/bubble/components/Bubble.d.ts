import { type BotProps } from "@/components/Bot";
import type { BubbleParams } from "../types";
export type BubbleProps = BotProps & BubbleParams & {
    onOpen?: () => void;
    onClose?: () => void;
    onPreviewMessageClick?: () => void;
};
export declare const Bubble: (props: BubbleProps) => import("solid-js").JSX.Element;
//# sourceMappingURL=Bubble.d.ts.map