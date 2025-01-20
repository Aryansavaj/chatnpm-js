import type { Theme } from "@chat77npm/theme/schemas";
type Props = {
    recordingStatus: "asking" | "started" | "stopped";
    buttonsTheme: NonNullable<Theme["chat"]>["buttons"];
    onAbortRecording: () => void;
    onRecordingConfirmed: (stream: MediaStream) => void;
};
export declare const VoiceRecorder: (props: Props) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=VoiceRecorder.d.ts.map