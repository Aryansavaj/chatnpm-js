import {
  getPaymentInProgressInStorage,
  removePaymentInProgressFromStorage,
} from "@/features/blocks/inputs/payment/helpers/paymentInProgressStorage";
import type { BotContext } from "@/types";
import { CorsError } from "@/utils/CorsError";
import { guessApiHost } from "@/utils/guessApiHost";
import type {
  ContinueChatResponse,
  StartChatInput,
  StartChatResponse,
  StartFrom,
  StartPreviewChatInput,
} from "@chat77npm/bot-engine/schemas/api";
import { isNotDefined, isNotEmpty } from "@chat77npm/lib/utils";
import ky from "ky";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chat77submodule: string | any;
  stripeRedirectStatus?: string;
  apiHost?: string;
  startFrom?: StartFrom;
  isPreview: boolean;
  prefilledVariables?: Record<string, unknown>;
  resultId?: string;
  sessionId?: string;
};

export async function startChatQuery({
  chat77submodule,
  isPreview,
  apiHost,
  prefilledVariables,
  resultId,
  stripeRedirectStatus,
  startFrom,
  sessionId,
}: Props) {
  if (isNotDefined(chat77submodule))
    throw new Error("chat77 ID is required to get initial messages");

  const paymentInProgressStateStr =
    getPaymentInProgressInStorage() ?? undefined;
  const paymentInProgressState = paymentInProgressStateStr
    ? (JSON.parse(paymentInProgressStateStr) as {
        sessionId: string;
        chat77submodule: BotContext["chat77submodule"];
      })
    : undefined;
  if (paymentInProgressState) {
    removePaymentInProgressFromStorage();

    try {
      const data = await ky
        .post(
          `${isNotEmpty(apiHost) ? apiHost : guessApiHost()}/api/v1/sessions/${
            paymentInProgressState.sessionId
          }/continueChat`,
          {
            json: {
              message: paymentInProgressState
                ? stripeRedirectStatus === "failed"
                  ? "fail"
                  : "Success"
                : undefined,
            },
            timeout: false,
          },
        )
        .json<ContinueChatResponse>();

      return {
        data: {
          ...data,
          ...paymentInProgressState,
        } satisfies StartChatResponse,
      };
    } catch (error) {
      return { error };
    }
  }
  const chat77submoduleId = typeof chat77submodule === "string" ? chat77submodule : chat77submodule.id;
  if (isPreview) {
    try {
      const data = await ky
        .post(
          `${
            isNotEmpty(apiHost) ? apiHost : guessApiHost()
          }/api/v1/chat77submodules/${chat77submoduleId}/preview/startChat`,
          {
            json: {
              isStreamEnabled: true,
              startFrom,
              chat77submodule,
              prefilledVariables,
              sessionId,
            } satisfies Omit<
              StartPreviewChatInput,
              "chat77submoduleId" | "isOnlyRegistering" | "textBubbleContentFormat"
            >,
            timeout: false,
          },
        )
        .json<StartChatResponse>();

      return { data };
    } catch (error) {
      return { error };
    }
  }

  try {
    const iframeReferrerOrigin =
      parent !== window && isNotEmpty(document.referrer)
        ? new URL(document.referrer).origin
        : undefined;
    const response = await ky.post(
      `${
        isNotEmpty(apiHost) ? apiHost : guessApiHost()
      }/api/v1/chat77submodules/${chat77submoduleId}/startChat`,
      {
        headers: {
          "x-chat77submodule-iframe-referrer-origin": iframeReferrerOrigin,
        },
        json: {
          isStreamEnabled: true,
          prefilledVariables,
          resultId,
          isOnlyRegistering: false,
        } satisfies Omit<
          StartChatInput,
          "publicId" | "textBubbleContentFormat"
        >,
        timeout: false,
      },
    );
console.log("packa", response)
    const corsAllowOrigin = response.headers.get("access-control-allow-origin");

    if (
      iframeReferrerOrigin &&
      corsAllowOrigin &&
      corsAllowOrigin !== "*" &&
      !iframeReferrerOrigin.includes(corsAllowOrigin)
    )
      throw new CorsError(corsAllowOrigin);

    return { data: await response.json<StartChatResponse>() };
  } catch (error) {
    return { error };
  }
}
