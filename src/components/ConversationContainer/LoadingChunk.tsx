import { defaultHostAvatarIsEnabled } from "@chat77npm/theme/constants";
import type { Theme } from "@chat77npm/theme/schemas";
import { Show } from "solid-js";
import { LoadingBubble } from "../bubbles/LoadingBubble";
import { AvatarSideContainer } from "./AvatarSideContainer";

type Props = {
  theme: Theme;
};

export const LoadingChunk = (props: Props) => (
  <div class="flex w-full chat77submodule-loading-chunk">
    <div class="flex flex-col w-full min-w-0">
      <div class="flex gap-2">
        <Show
          when={
            props.theme.chat?.hostAvatar?.isEnabled ??
            defaultHostAvatarIsEnabled
          }
        >
          <AvatarSideContainer
            hostAvatarSrc={props.theme.chat?.hostAvatar?.url}
          />
        </Show>
        <LoadingBubble />
      </div>
    </div>
  </div>
);
