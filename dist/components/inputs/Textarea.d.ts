import { type JSX } from "solid-js";
type TextareaProps = {
    ref: HTMLTextAreaElement | undefined;
    onInput: (value: string) => void;
} & Omit<JSX.TextareaHTMLAttributes<HTMLTextAreaElement>, "onInput">;
export declare const Textarea: (props: TextareaProps) => JSX.Element;
export {};
//# sourceMappingURL=Textarea.d.ts.map