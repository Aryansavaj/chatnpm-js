import type { CommandData } from "../types";

export const setPrefilledVariables = (
  variables: Record<string, string | number | boolean>,
) => {
  const message: CommandData = {
    isFromChat77submodule: true,
    command: "setPrefilledVariables",
    variables,
  };
  window.postMessage(message);
};
