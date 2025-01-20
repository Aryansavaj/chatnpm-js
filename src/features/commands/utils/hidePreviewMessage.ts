import type { CommandData } from "../types";

export const hidePreviewMessage = () => {
  const message: CommandData = {
    isFromChat77submodule: true,
    command: "hidePreviewMessage",
  };
  window.postMessage(message);
};
