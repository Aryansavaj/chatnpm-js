import type { InputSubmitContent } from "@/types";
import type { PhoneNumberInputBlock } from "@chat77npm/blocks-inputs/phone/schema";
type PhoneInputProps = Pick<NonNullable<PhoneNumberInputBlock["options"]>, "labels" | "defaultCountryCode"> & {
    defaultValue?: string;
    onSubmit: (value: InputSubmitContent) => void;
};
export declare const PhoneInput: (props: PhoneInputProps) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=PhoneInput.d.ts.map