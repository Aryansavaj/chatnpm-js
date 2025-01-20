import type { StartChatResponse } from "@chat77npm/bot-engine/schemas/api";
export declare const setPaymentInProgressInStorage: (state: Pick<StartChatResponse, "chat77submodule" | "sessionId" | "resultId">) => void;
export declare const getPaymentInProgressInStorage: () => string | null;
export declare const removePaymentInProgressFromStorage: () => void;
//# sourceMappingURL=paymentInProgressStorage.d.ts.map