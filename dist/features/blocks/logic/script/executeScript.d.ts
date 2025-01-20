import type { ChatLog } from "@chat77npm/bot-engine/schemas/api";
import type { ScriptToExecute } from "@chat77npm/bot-engine/schemas/clientSideAction";
export declare const executeScript: ({ content, args, }: ScriptToExecute) => Promise<void | {
    logs: ChatLog[];
}>;
export declare const executeCode: ({ args, content, }: {
    content: string;
    args: Record<string, unknown>;
}) => Promise<void>;
//# sourceMappingURL=executeScript.d.ts.map