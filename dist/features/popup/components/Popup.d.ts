import { type BotProps } from "@/components/Bot";
import type { PopupParams } from "../types";
export type PopupProps = BotProps & PopupParams & {
    defaultOpen?: boolean;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
};
export declare const Popup: (props: PopupProps) => import("solid-js").JSX.Element;
//# sourceMappingURL=Popup.d.ts.map