import type { CommandData } from "../types";

export const close = () => {
  const message: CommandData = {
    isFromChat77submodule: true,
    command: "close",
  };
  window.postMessage(message);
};
