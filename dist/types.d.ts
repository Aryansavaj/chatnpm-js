import type { ContinueChatResponse, StartChatResponse } from "@chat77npm/bot-engine/schemas/api";
export type BotContext = {
    chat77submodule: StartChatResponse["chat77submodule"];
    resultId?: string;
    isPreview: boolean;
    apiHost?: string;
    sessionId: string;
    storage: "local" | "session" | undefined;
};
export type OutgoingLog = {
    status: string;
    description: string;
    details?: unknown;
};
export type ClientSideActionContext = {
    apiHost?: string;
    sessionId: string;
};
export type ChatChunk = Pick<ContinueChatResponse, "messages" | "input" | "clientSideActions"> & {
    streamingMessageId?: string;
};
export type Attachment = {
    type: string;
    url: string;
    blobUrl?: string;
};
export type TextInputSubmitContent = {
    type: "text";
    value: string;
    label?: string;
    attachments?: Attachment[];
};
export type RecordingInputSubmitContent = {
    type: "recording";
    url: string;
    blobUrl?: string;
};
export type InputSubmitContent = TextInputSubmitContent | RecordingInputSubmitContent;
//# sourceMappingURL=types.d.ts.map