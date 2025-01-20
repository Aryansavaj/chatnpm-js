import type { CommandData } from "../types";

export const open = () => {
  const message: CommandData = {
    isFromChat77submodule: true,
    command: "open",
  };
  window.postMessage(message);
};
