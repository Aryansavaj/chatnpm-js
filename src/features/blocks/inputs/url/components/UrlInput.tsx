import { SendButton } from "@/components/SendButton";
import { ShortTextInput } from "@/components/inputs/ShortTextInput";
import type { CommandData } from "@/features/commands/types";
import type { InputSubmitContent } from "@/types";
import { isMobile } from "@/utils/isMobileSignal";
import { defaultUrlInputOptions } from "@chat77npm/blocks-inputs/url/constants";
import type { UrlInputBlock } from "@chat77npm/blocks-inputs/url/schema";
import { createSignal, onCleanup, onMount } from "solid-js";

type Props = {
  block: UrlInputBlock;
  defaultValue?: string;
  onSubmit: (value: InputSubmitContent) => void;
};

export const UrlInput = (props: Props) => {
  const [inputValue, setInputValue] = createSignal(props.defaultValue ?? "");
  let inputRef: HTMLInputElement | HTMLTextAreaElement | undefined;

  const handleInput = (inputValue: string) => {
    setInputValue(inputValue);
  };

  const checkIfInputIsValid = () =>
    inputRef?.value !== "" && inputRef?.reportValidity();

  const submit = () => {
    if (inputRef && !inputRef?.value.startsWith("http"))
      inputRef.value = `https://${inputRef.value}`;
    if (checkIfInputIsValid())
      props.onSubmit({ type: "text", value: inputRef?.value ?? inputValue() });
    else inputRef?.focus();
  };

  const submitWhenEnter = (e: KeyboardEvent) => {
    if (e.key === "Enter") submit();
  };

  onMount(() => {
    if (!isMobile() && inputRef)
      inputRef.focus({
        preventScroll: true,
      });
    window.addEventListener("message", processIncomingEvent);
  });

  onCleanup(() => {
    window.removeEventListener("message", processIncomingEvent);
  });

  const processIncomingEvent = (event: MessageEvent<CommandData>) => {
    const { data } = event;
    if (!data.isFromChat77submodule) return;
    if (data.command === "setInputValue") setInputValue(data.value);
  };

  return (
    <div
      class="chat77submodule-input-form flex w-full gap-2 items-end max-w-[350px]"
      onKeyDown={submitWhenEnter}
    >
      <div class={"flex chat77submodule-input w-full"}>
        <ShortTextInput
          ref={inputRef as HTMLInputElement}
          value={inputValue()}
          placeholder={
            props.block.options?.labels?.placeholder ??
            defaultUrlInputOptions.labels.placeholder
          }
          onInput={handleInput}
          type="url"
          autocomplete="url"
        />
      </div>
      <SendButton type="button" class="h-[56px]" on:click={submit}>
        {props.block.options?.labels?.button}
      </SendButton>
    </div>
  );
};
