import type { CommandData } from "../types";

export const unmount = () => {
  const message: CommandData = {
    isFromChat77submodule: true,
    command: "unmount",
  };
  window.postMessage(message);
};
