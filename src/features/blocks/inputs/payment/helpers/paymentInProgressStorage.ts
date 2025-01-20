import type { StartChatResponse } from "@chat77npm/bot-engine/schemas/api";

export const setPaymentInProgressInStorage = (
  state: Pick<StartChatResponse, "chat77submodule" | "sessionId" | "resultId">,
) => {
  sessionStorage.setItem("chat77submodulePaymentInProgress", JSON.stringify(state));
};

export const getPaymentInProgressInStorage = () =>
  sessionStorage.getItem("chat77submodulePaymentInProgress");

export const removePaymentInProgressFromStorage = () => {
  sessionStorage.removeItem("chat77submodulePaymentInProgress");
};
