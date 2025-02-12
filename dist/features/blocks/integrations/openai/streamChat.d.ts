import type { ClientSideActionContext } from "@/types";
export declare const streamChat: (context: ClientSideActionContext & {
    retryAttempt?: number;
}) => ({ messages, onMessageStream, }: {
    messages?: {
        content?: string | undefined;
        role?: "system" | "user" | "assistant" | undefined;
    }[];
    onMessageStream?: (props: {
        id: string;
        message: string;
    }) => void;
}) => Promise<{
    message?: string;
    error?: object;
}>;
//# sourceMappingURL=streamChat.d.ts.map