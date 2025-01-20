import type { ChatLog } from "@chat77npm/bot-engine/schemas/api";
import type { ScriptToExecute } from "@chat77npm/bot-engine/schemas/clientSideAction";
export declare const executeSetVariable: ({ content, args, isCode, }: ScriptToExecute) => Promise<{
    replyToSend: string | undefined;
    logs?: ChatLog[];
}>;
//# sourceMappingURL=executeSetVariable.d.ts.map