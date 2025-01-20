import type { CommandData } from "../types";

export const setInputValue = (value: string) => {
  const message: CommandData = {
    isFromChat77submodule: true,
    command: "setInputValue",
    value,
  };
  window.postMessage(message);
};
