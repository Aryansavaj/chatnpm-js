import type { BubbleTheme, ButtonTheme } from "../types";
type Props = Pick<BubbleTheme, "placement"> & ButtonTheme & {
    isBotOpened: boolean;
    toggleBot: () => void;
    buttonSize: `${number}px`;
};
export declare const BubbleButton: (props: Props) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=BubbleButton.d.ts.map