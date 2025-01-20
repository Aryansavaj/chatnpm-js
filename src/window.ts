import type { BubbleProps } from "./features/bubble/components/Bubble";
import { hidePreviewMessage } from "./features/commands/utils/hidePreviewMessage";
import { setInputValue } from "./features/commands/utils/setInputValue";
import { setPrefilledVariables } from "./features/commands/utils/setPrefilledVariables";
import { showPreviewMessage } from "./features/commands/utils/showPreviewMessage";
import { toggle } from "./features/commands/utils/toggle";
import { unmount } from "./features/commands/utils/unmount";
import type { PopupProps } from "./features/popup/components/Popup";
import type { BotProps } from "./index";

export const initStandard = (props: BotProps & { id?: string }) => {
  const standardElement = props.id
    ? document.getElementById(props.id)
    : document.querySelector("chat77submodule-standard");
  if (!standardElement)
    throw new Error("<chat77submodule-standard> element not found.");
  Object.assign(standardElement, props);
};

export const initPopup = (props: PopupProps) => {
  const popupElement = document.createElement("chat77submodule-popup");
  Object.assign(popupElement, props);
  document.body.prepend(popupElement);
};

export const initBubble = (props: BubbleProps) => {
  const bubbleElement = document.createElement("chat77submodule-bubble");
  Object.assign(bubbleElement, props);
  document.body.prepend(bubbleElement);
};

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

declare const window:
  | {
      chat77: chat77 | undefined;
    }
  | undefined;

export const parseChat77submodule = () => ({
  initStandard,
  initPopup,
  initBubble,
  close,
  hidePreviewMessage,
  open,
  setPrefilledVariables,
  showPreviewMessage,
  toggle,
  setInputValue,
  unmount,
});

export const injectChat77submoduleInWindow = (chat77submodule: chat77) => {
  if (typeof window === "undefined") return;
  window.chat77 = { ...chat77submodule };
};
