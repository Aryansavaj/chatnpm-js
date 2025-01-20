import type { BubbleProps } from "./features/bubble/components/Bubble";
import { hidePreviewMessage } from "./features/commands/utils/hidePreviewMessage";
import { setInputValue } from "./features/commands/utils/setInputValue";
import { setPrefilledVariables } from "./features/commands/utils/setPrefilledVariables";
import { showPreviewMessage } from "./features/commands/utils/showPreviewMessage";
import { toggle } from "./features/commands/utils/toggle";
import { unmount } from "./features/commands/utils/unmount";
import type { PopupProps } from "./features/popup/components/Popup";
import type { BotProps } from "./index";
export declare const initStandard: (props: BotProps & {
    id?: string;
}) => void;
export declare const initPopup: (props: PopupProps) => void;
export declare const initBubble: (props: BubbleProps) => void;
type chat77 = {
    initStandard: typeof initStandard;
    initPopup: typeof initPopup;
    initBubble: typeof initBubble;
    close: typeof close;
    hidePreviewMessage: typeof hidePreviewMessage;
    open: typeof open;
    setPrefilledVariables: typeof setPrefilledVariables;
    showPreviewMessage: typeof showPreviewMessage;
    toggle: typeof toggle;
    setInputValue: typeof setInputValue;
    unmount: typeof unmount;
};
export declare const parseChat77submodule: () => {
    initStandard: (props: BotProps & {
        id?: string;
    }) => void;
    initPopup: (props: PopupProps) => void;
    initBubble: (props: BubbleProps) => void;
    close: typeof close;
    hidePreviewMessage: () => void;
    open: typeof open;
    setPrefilledVariables: (variables: Record<string, string | number | boolean>) => void;
    showPreviewMessage: (proactiveMessage?: import("./index").ShowMessageCommandData["message"]) => void;
    toggle: () => void;
    setInputValue: (value: string) => void;
    unmount: () => void;
};
export declare const injectChat77submoduleInWindow: (chat77submodule: chat77) => void;
export {};
//# sourceMappingURL=window.d.ts.map