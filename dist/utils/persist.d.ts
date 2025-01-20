import type { Setter, Signal } from "solid-js";
type Params = {
    key: string;
    storage: "local" | "session" | undefined;
    onRecovered?: () => void;
};
export declare function persist<T>(signal: Signal<T>, params: Params): [...Signal<T>, () => boolean, Setter<boolean>];
export {};
//# sourceMappingURL=persist.d.ts.map