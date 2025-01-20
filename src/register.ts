import { customElement } from "solid-element";
import {
  defaultBotProps,
  defaultBubbleProps,
  defaultPopupProps,
} from "./constants";
import { Bubble } from "./features/bubble/components/Bubble";
import { Popup } from "./features/popup/components/Popup";
import { Standard } from "./features/standard/components/Standard";

export const registerWebComponents = () => {
  if (typeof window === "undefined") return;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  customElement("chat77submodule-standard", defaultBotProps, Standard);
  customElement("chat77submodule-bubble", defaultBubbleProps, Bubble);
  customElement("chat77submodule-popup", defaultPopupProps, Popup);
};
