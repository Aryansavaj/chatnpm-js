import { startChatQuery } from "@/queries/startChatQuery";
import type { BotContext, OutgoingLog } from "@/types";
import { CorsError } from "@/utils/CorsError";
import { setBotContainerHeight } from "@/utils/botContainerHeightSignal";
import { setBotContainer } from "@/utils/botContainerSignal";
import { injectFont } from "@/utils/injectFont";
import { setIsMobile } from "@/utils/isMobileSignal";
import { persist } from "@/utils/persist";
import { setCssVariablesValue } from "@/utils/setCssVariablesValue";
import {
  getExistingResultIdFromStorage,
  getInitialChatReplyFromStorage,
  setInitialChatReplyInStorage,
  setResultInStorage,
  wipeExistingChatStateInStorage,
} from "@/utils/storage";
import { toaster } from "@/utils/toaster";
import { Toast, Toaster } from "@ark-ui/solid";
import type { InputBlock } from "@chat77npm/blocks-inputs/schema";
import type {
  StartChatResponse,
  StartFrom,
} from "@chat77npm/bot-engine/schemas/api";
import { isDefined, isNotDefined, isNotEmpty } from "@chat77npm/lib/utils";
import { defaultSettings } from "@chat77npm/settings/constants";
import {
  defaultFontFamily,
  defaultFontType,
  defaultProgressBarPosition,
} from "@chat77npm/theme/constants";
import type { Font } from "@chat77npm/theme/schemas";
import clsx from "clsx";
import { HTTPError } from "ky";
import { Show, createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { Portal } from "solid-js/web";
import immutableCss from "../assets/immutable.css";
import { ConversationContainer } from "./ConversationContainer/ConversationContainer";
import { ErrorMessage } from "./ErrorMessage";
import { LiteBadge } from "./LiteBadge";
import { ProgressBar } from "./ProgressBar";
import { CloseIcon } from "./icons/CloseIcon";

export type BotProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chat77submodule: string | any;
  isPreview?: boolean;
  resultId?: string;
  prefilledVariables?: Record<string, unknown>;
  apiHost?: string;
  font?: Font;
  progressBarRef?: HTMLDivElement;
  startFrom?: StartFrom;
  sessionId?: string;
  onNewInputBlock?: (inputBlock: InputBlock) => void;
  onAnswer?: (answer: { message: string; blockId: string }) => void;
  onInit?: () => void;
  onEnd?: () => void;
  onNewLogs?: (logs: OutgoingLog[]) => void;
  onChatStatePersisted?: (isEnabled: boolean) => void;
};

export const Bot = (props: BotProps & { class?: string }) => {
  const [initialChatReply, setInitialChatReply] = createSignal<
    StartChatResponse | undefined
  >();
  const [customCss, setCustomCss] = createSignal("");
  const [isInitialized, setIsInitialized] = createSignal(false);
  const [error, setError] = createSignal<Error | undefined>();

  const initializeBot = async () => {
    if (props.font) injectFont(props.font);
    setIsInitialized(true);
    const urlParams = new URLSearchParams(location.search);
    props.onInit?.();
    const prefilledVariables: { [key: string]: string } = {};
    urlParams.forEach((value, key) => {
      prefilledVariables[key] = value;
    });
    const chat77submoduleIdFromProps =
      typeof props.chat77submodule === "string" ? props.chat77submodule : undefined;
    const isPreview =
      typeof props.chat77submodule !== "string" || (props.isPreview ?? false);
    const resultIdInStorage =
      getExistingResultIdFromStorage(chat77submoduleIdFromProps);
    const { data, error } = await startChatQuery({
      stripeRedirectStatus: urlParams.get("redirect_status") ?? undefined,
      chat77submodule: props.chat77submodule,
      apiHost: props.apiHost,
      isPreview,
      resultId: isNotEmpty(props.resultId) ? props.resultId : resultIdInStorage,
      prefilledVariables: {
        ...prefilledVariables,
        ...props.prefilledVariables,
      },
      startFrom: props.startFrom,
      sessionId: props.sessionId,
    });
    if (error instanceof HTTPError) {
      if (isPreview) {
        return setError(
          new Error(`An error occurred while loading the bot.`, {
            cause: {
              status: error.response.status,
              body: await error.response.json(),
            },
          }),
        );
      }
      if (error.response.status === 400 || error.response.status === 403)
        return setError(new Error("This bot is now closed."));
      if (error.response.status === 404)
        return setError(new Error("The bot you're looking for doesn't exist."));
      return setError(
        new Error(
          `Error! Couldn't initiate the chat. (${error.response.statusText})`,
        ),
      );
    }

    if (error instanceof CorsError) {
      return setError(new Error(error.message));
    }

    if (!data) {
      if (error) {
        console.error(error);
        if (isPreview) {
          return setError(
            new Error(`Error! Could not reach server. Check your connection.`, {
              cause: error,
            }),
          );
        }
      }
      return setError(
        new Error("Error! Could not reach server. Check your connection."),
      );
    }

    if (
      data.resultId &&
      chat77submoduleIdFromProps &&
      (data.chat77submodule.settings.general?.rememberUser?.isEnabled ??
        defaultSettings.general.rememberUser.isEnabled)
    ) {
      if (resultIdInStorage && resultIdInStorage !== data.resultId)
        wipeExistingChatStateInStorage(data.chat77submodule.id);
      const storage =
        data.chat77submodule.settings.general?.rememberUser?.storage ??
        defaultSettings.general.rememberUser.storage;
      setResultInStorage(storage)(chat77submoduleIdFromProps, data.resultId);
      const initialChatInStorage = getInitialChatReplyFromStorage(
        data.chat77submodule.id,
      );
      if (
        initialChatInStorage &&
        initialChatInStorage.chat77submodule.publishedAt &&
        data.chat77submodule.publishedAt
      ) {
        if (
          new Date(initialChatInStorage.chat77submodule.publishedAt).getTime() ===
          new Date(data.chat77submodule.publishedAt).getTime()
        ) {
          setInitialChatReply(initialChatInStorage);
        } else {
          // Restart chat by resetting remembered state
          wipeExistingChatStateInStorage(data.chat77submodule.id);
          setInitialChatReply(data);
          setInitialChatReplyInStorage(data, {
            chat77submoduleId: data.chat77submodule.id,
            storage,
          });
        }
      } else {
        setInitialChatReply(data);
        setInitialChatReplyInStorage(data, {
          chat77submoduleId: data.chat77submodule.id,
          storage,
        });
      }
      props.onChatStatePersisted?.(true);
    } else {
      wipeExistingChatStateInStorage(data.chat77submodule.id);
      setInitialChatReply(data);
      if (data.input?.id && props.onNewInputBlock)
        props.onNewInputBlock(data.input);
      if (data.logs) props.onNewLogs?.(data.logs);
      props.onChatStatePersisted?.(false);
    }

    setCustomCss(data.chat77submodule.theme.customCss ?? "");
  };

  createEffect(() => {
    if (isNotDefined(props.chat77submodule) || isInitialized()) return;
    initializeBot().then();
  });

  createEffect(() => {
    if (isNotDefined(props.chat77submodule) || typeof props.chat77submodule === "string")
      return;
    setCustomCss(props.chat77submodule.theme.customCss ?? "");
    if (
      props.chat77submodule.theme.general?.progressBar?.isEnabled &&
      initialChatReply() &&
      !initialChatReply()?.chat77submodule.theme.general?.progressBar?.isEnabled
    ) {
      setIsInitialized(false);
      initializeBot().then();
    }
  });

  onCleanup(() => {
    setIsInitialized(false);
  });

  return (
    <>
      <style>{customCss()}</style>
      <style>{immutableCss}</style>
      <Show when={error()} keyed>
        {(error) => <ErrorMessage error={error} />}
      </Show>
      <Show when={initialChatReply()} keyed>
        {(initialChatReply) => (
          <BotContent
            class={props.class}
            initialChatReply={{
              ...initialChatReply,
              chat77submodule: {
                ...initialChatReply.chat77submodule,
                settings:
                  typeof props.chat77submodule === "string"
                    ? initialChatReply.chat77submodule?.settings
                    : props.chat77submodule?.settings,
                theme:
                  typeof props.chat77submodule === "string"
                    ? initialChatReply.chat77submodule?.theme
                    : props.chat77submodule?.theme,
              },
            }}
            context={{
              apiHost: props.apiHost,
              isPreview:
                typeof props.chat77submodule !== "string" || (props.isPreview ?? false),
              resultId: initialChatReply.resultId,
              sessionId: initialChatReply.sessionId,
              chat77submodule: initialChatReply.chat77submodule,
              storage:
                initialChatReply.chat77submodule.settings.general?.rememberUser
                  ?.isEnabled &&
                !(
                  typeof props.chat77submodule !== "string" ||
                  (props.isPreview ?? false)
                )
                  ? (initialChatReply.chat77submodule.settings.general?.rememberUser
                      ?.storage ?? defaultSettings.general.rememberUser.storage)
                  : undefined,
            }}
            progressBarRef={props.progressBarRef}
            onNewInputBlock={props.onNewInputBlock}
            onNewLogs={props.onNewLogs}
            onAnswer={props.onAnswer}
            onEnd={props.onEnd}
          />
        )}
      </Show>
    </>
  );
};

type BotContentProps = {
  initialChatReply: StartChatResponse;
  context: BotContext;
  class?: string;
  progressBarRef?: HTMLDivElement;
  onNewInputBlock?: (inputBlock: InputBlock) => void;
  onAnswer?: (answer: { message: string; blockId: string }) => void;
  onEnd?: () => void;
  onNewLogs?: (logs: OutgoingLog[]) => void;
};

const BotContent = (props: BotContentProps) => {
  const [progressValue, setProgressValue] = persist(
    createSignal<number | undefined>(props.initialChatReply.progress),
    {
      storage: props.context.storage,
      key: `chat77submodule-${props.context.chat77submodule.id}-progressValue`,
    },
  );
  let botContainerElement: HTMLDivElement | undefined;

  const resizeObserver = new ResizeObserver((entries) => {
    return setIsMobile((entries[0]?.target.clientWidth ?? 0) < 400);
  });

  onMount(() => {
    if (!botContainerElement) return;
    setBotContainer(botContainerElement);
    resizeObserver.observe(botContainerElement);
    setBotContainerHeight(`${botContainerElement.clientHeight}px`);
  });

  createEffect(() => {
    injectFont(
      props.initialChatReply.chat77submodule.theme.general?.font ?? {
        type: defaultFontType,
        family: defaultFontFamily,
      },
    );
    if (!botContainerElement) return;
    setCssVariablesValue(
      props.initialChatReply.chat77submodule.theme,
      botContainerElement,
      props.context.isPreview,
    );
  });

  onCleanup(() => {
    if (!botContainerElement) return;
    resizeObserver.unobserve(botContainerElement);
  });

  return (
    <div
      ref={botContainerElement}
      class={clsx(
        "relative flex w-full h-full text-base overflow-hidden flex-col justify-center items-center chat77submodule-container",
        props.class,
      )}
    >
      <Show
        when={
          isDefined(progressValue()) &&
          props.initialChatReply.chat77submodule.theme.general?.progressBar?.isEnabled
        }
      >
        <Show
          when={
            props.progressBarRef &&
            (props.initialChatReply.chat77submodule.theme.general?.progressBar
              ?.position ?? defaultProgressBarPosition) === "fixed"
          }
          fallback={<ProgressBar value={progressValue() as number} />}
        >
          <Portal mount={props.progressBarRef}>
            <ProgressBar value={progressValue() as number} />
          </Portal>
        </Show>
      </Show>
      <ConversationContainer
        context={props.context}
        initialChatReply={props.initialChatReply}
        onNewInputBlock={props.onNewInputBlock}
        onAnswer={props.onAnswer}
        onEnd={props.onEnd}
        onNewLogs={props.onNewLogs}
        onProgressUpdate={setProgressValue}
      />
      <Show
        when={
          props.initialChatReply.chat77submodule.settings.general?.isBrandingEnabled
        }
      >
        <LiteBadge botContainer={botContainerElement} />
      </Show>
      <Toaster toaster={toaster}>
        {(toast) => (
          <Toast.Root>
            <Toast.Title>{toast().title}</Toast.Title>
            <Toast.Description>{toast().description}</Toast.Description>
            <Toast.CloseTrigger class="absolute right-2 top-2">
              <CloseIcon class="w-4 h-4" />
            </Toast.CloseTrigger>
          </Toast.Root>
        )}
      </Toaster>
    </div>
  );
};
