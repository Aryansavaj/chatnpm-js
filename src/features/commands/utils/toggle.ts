import type { CommandData } from "../types";

export const toggle = () => {
  const message: CommandData = {
    isFromChat77submodule: true,
    command: "toggle",
  };
  window.postMessage(message);
};
