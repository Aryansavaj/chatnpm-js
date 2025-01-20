import type { StartChatResponse } from "@chat77npm/bot-engine/schemas/api";
import { defaultSettings } from "@chat77npm/settings/constants";

const storageResultIdKey = "resultId";

export const getExistingResultIdFromStorage = (chat77submoduleId?: string) => {
  if (!chat77submoduleId) return;
  try {
    return (
      sessionStorage.getItem(`${storageResultIdKey}-${chat77submoduleId}`) ??
      localStorage.getItem(`${storageResultIdKey}-${chat77submoduleId}`) ??
      undefined
    );
  } catch {
    /* empty */
  }
};

export const setResultInStorage =
  (storageType: "local" | "session" = "session") =>
  (chat77submoduleId: string, resultId: string) => {
    try {
      parseRememberUserStorage(storageType).setItem(
        `${storageResultIdKey}-${chat77submoduleId}`,
        resultId,
      );
    } catch {
      /* empty */
    }
  };

export const getInitialChatReplyFromStorage = (
  chat77submoduleId: string | undefined,
) => {
  if (!chat77submoduleId) return;
  try {
    const rawInitialChatReply =
      sessionStorage.getItem(`chat77submodule-${chat77submoduleId}-initialChatReply`) ??
      localStorage.getItem(`chat77submodule-${chat77submoduleId}-initialChatReply`);
    if (!rawInitialChatReply) return;
    return JSON.parse(rawInitialChatReply) as StartChatResponse;
  } catch {
    /* empty */
  }
};
export const setInitialChatReplyInStorage = (
  initialChatReply: StartChatResponse,
  {
    chat77submoduleId,
    storage,
  }: {
    chat77submoduleId: string;
    storage?: "local" | "session";
  },
) => {
  try {
    const rawInitialChatReply = JSON.stringify(initialChatReply);
    parseRememberUserStorage(storage).setItem(
      `chat77submodule-${chat77submoduleId}-initialChatReply`,
      rawInitialChatReply,
    );
  } catch {
    /* empty */
  }
};

export const setBotOpenedStateInStorage = () => {
  try {
    sessionStorage.setItem(`chat77submodule-botOpened`, "true");
  } catch {
    /* empty */
  }
};

export const removeBotOpenedStateInStorage = () => {
  try {
    sessionStorage.removeItem(`chat77submodule-botOpened`);
  } catch {
    /* empty */
  }
};

export const getBotOpenedStateFromStorage = () => {
  try {
    return sessionStorage.getItem(`chat77submodule-botOpened`) === "true";
  } catch {
    return false;
  }
};

export const parseRememberUserStorage = (
  storage: "local" | "session" | undefined,
): typeof localStorage | typeof sessionStorage =>
  (storage ?? defaultSettings.general.rememberUser.storage) === "session"
    ? sessionStorage
    : localStorage;

export const wipeExistingChatStateInStorage = (chat77submoduleId: string) => {
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith(`chat77submodule-${chat77submoduleId}`)) localStorage.removeItem(key);
  });
  Object.keys(sessionStorage).forEach((key) => {
    if (key.startsWith(`chat77submodule-${chat77submoduleId}`)) sessionStorage.removeItem(key);
  });
};
