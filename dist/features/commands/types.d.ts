import type { PreviewMessageParams } from "../bubble/types";
export type CommandData = {
    isFromChat77submodule: boolean;
} & ({
    command: "open" | "toggle" | "close" | "hidePreviewMessage" | "unmount";
} | ShowMessageCommandData | SetPrefilledVariablesCommandData | SetInputValueCommandData);
export type ShowMessageCommandData = {
    command: "showPreviewMessage";
    message?: Pick<PreviewMessageParams, "avatarUrl" | "message">;
};
export type SetPrefilledVariablesCommandData = {
    command: "setPrefilledVariables";
    variables: Record<string, string | number | boolean>;
};
export type SetInputValueCommandData = {
    command: "setInputValue";
    value: string;
};
//# sourceMappingURL=types.d.ts.map