import type { CommandData, ShowMessageCommandData } from "../types";

export const showPreviewMessage = (
  proactiveMessage?: ShowMessageCommandData["message"],
) => {
  const message: CommandData = {
    isFromChat77submodule: true,
    command: "showPreviewMessage",
    message: proactiveMessage,
  };
  window.postMessage(message);
};
