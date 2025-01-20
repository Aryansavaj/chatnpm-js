import { trackPixelEvent } from "@/lib/pixel";
import type { PixelBlock } from "@chat77npm/blocks-integrations/pixel/schema";
import { isEmpty } from "@chat77npm/lib/utils";

export const executePixel = async (options: PixelBlock["options"]) => {
  if (isEmpty(options?.pixelId)) return;
  trackPixelEvent(options);
};
