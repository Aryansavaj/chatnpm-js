import { sendGaEvent } from "@/lib/gtag";
import type { GoogleAnalyticsBlock } from "@chat77npm/blocks-integrations/googleAnalytics/schema";

export const executeGoogleAnalyticsBlock = async (
  options: GoogleAnalyticsBlock["options"],
) => {
  if (!options?.trackingId) return;
  sendGaEvent(options);
};
