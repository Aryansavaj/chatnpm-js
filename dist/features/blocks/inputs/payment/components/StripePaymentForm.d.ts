import type { BotContext } from "@/types";
import type { PaymentInputBlock } from "@chat77npm/blocks-inputs/payment/schema";
import type { RuntimeOptions } from "@chat77npm/bot-engine/schemas/api";
type Props = {
    context: BotContext;
    options: PaymentInputBlock["options"] & RuntimeOptions;
    onSuccess: () => void;
    onTransitionEnd: () => void;
};
export declare const StripePaymentForm: (props: Props) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=StripePaymentForm.d.ts.map