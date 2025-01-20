declare const chat77submodule: {
    initStandard: (props: import(".").BotProps & {
        id?: string;
    }) => void;
    initPopup: (props: import(".").PopupProps) => void;
    initBubble: (props: import(".").BubbleProps) => void;
    close: typeof close;
    hidePreviewMessage: () => void;
    open: typeof open;
    setPrefilledVariables: (variables: Record<string, string | number | boolean>) => void;
    showPreviewMessage: (proactiveMessage?: import(".").ShowMessageCommandData["message"]) => void;
    toggle: () => void;
    setInputValue: (value: string) => void;
    unmount: () => void;
};
export default chat77submodule;
//# sourceMappingURL=web.d.ts.map