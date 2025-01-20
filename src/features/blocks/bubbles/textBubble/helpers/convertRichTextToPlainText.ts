import type { TDescendant } from "@chat77npm/rich-text/types";

export const computePlainText = (elements: TDescendant[]): string =>
  elements
    .map(
      (element) =>
        element.text ?? computePlainText(element.children as TDescendant[]),
    )
    .join("");
