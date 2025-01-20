import { hexToRgb, isLight } from "@chat77npm/lib/hexToRgb";
import { isDefined, isEmpty } from "@chat77npm/lib/utils";
import {
  BackgroundType,
  defaultBackgroundColor,
  defaultBackgroundType,
  defaultBlur,
  defaultButtonsBackgroundColor,
  defaultButtonsBorderThickness,
  defaultButtonsColor,
  defaultContainerBackgroundColor,
  defaultContainerMaxHeight,
  defaultContainerMaxWidth,
  defaultDarkTextColor,
  defaultFontFamily,
  defaultGuestBubblesBackgroundColor,
  defaultGuestBubblesColor,
  defaultHostBubblesBackgroundColor,
  defaultHostBubblesColor,
  defaultInputsBackgroundColor,
  defaultInputsColor,
  defaultInputsPlaceholderColor,
  defaultInputsShadow,
  defaultLightTextColor,
  defaultOpacity,
  defaultProgressBarBackgroundColor,
  defaultProgressBarColor,
  defaultProgressBarPlacement,
  defaultProgressBarPosition,
  defaultProgressBarThickness,
  defaultRoundness,
} from "@chat77npm/theme/constants";
import { isChatContainerLight } from "@chat77npm/theme/isChatContainerLight";
import type {
  Background,
  ChatTheme,
  ContainerBorderTheme,
  ContainerTheme,
  GeneralTheme,
  InputTheme,
  Theme,
} from "@chat77npm/theme/schemas";

const cssVariableNames = {
  general: {
    bgImage: "--chat77submodule-container-bg-image",
    bgColor: "--chat77submodule-container-bg-color",
    fontFamily: "--chat77submodule-container-font-family",
    progressBar: {
      position: "--chat77submodule-progress-bar-position",
      color: "--chat77submodule-progress-bar-color",
      colorRgb: "--chat77submodule-progress-bar-bg-rgb",
      height: "--chat77submodule-progress-bar-height",
      top: "--chat77submodule-progress-bar-top",
      bottom: "--chat77submodule-progress-bar-bottom",
    },
  },
  chat: {
    container: {
      maxWidth: "--chat77submodule-chat-container-max-width",
      maxHeight: "--chat77submodule-chat-container-max-height",
      bgColor: "--chat77submodule-chat-container-bg-rgb",
      color: "--chat77submodule-chat-container-color",
      borderRadius: "--chat77submodule-chat-container-border-radius",
      borderWidth: "--chat77submodule-chat-container-border-width",
      borderColor: "--chat77submodule-chat-container-border-rgb",
      borderOpacity: "--chat77submodule-chat-container-border-opacity",
      opacity: "--chat77submodule-chat-container-opacity",
      blur: "--chat77submodule-chat-container-blur",
      boxShadow: "--chat77submodule-chat-container-box-shadow",
    },
    hostBubbles: {
      bgColor: "--chat77submodule-host-bubble-bg-rgb",
      color: "--chat77submodule-host-bubble-color",
      borderRadius: "--chat77submodule-host-bubble-border-radius",
      borderWidth: "--chat77submodule-host-bubble-border-width",
      borderColor: "--chat77submodule-host-bubble-border-rgb",
      borderOpacity: "--chat77submodule-host-bubble-border-opacity",
      opacity: "--chat77submodule-host-bubble-opacity",
      blur: "--chat77submodule-host-bubble-blur",
      boxShadow: "--chat77submodule-host-bubble-box-shadow",
    },
    guestBubbles: {
      bgColor: "--chat77submodule-guest-bubble-bg-rgb",
      color: "--chat77submodule-guest-bubble-color",
      borderRadius: "--chat77submodule-guest-bubble-border-radius",
      borderWidth: "--chat77submodule-guest-bubble-border-width",
      borderColor: "--chat77submodule-guest-bubble-border-rgb",
      borderOpacity: "--chat77submodule-guest-bubble-border-opacity",
      opacity: "--chat77submodule-guest-bubble-opacity",
      blur: "--chat77submodule-guest-bubble-blur",
      boxShadow: "--chat77submodule-guest-bubble-box-shadow",
    },
    inputs: {
      bgColor: "--chat77submodule-input-bg-rgb",
      color: "--chat77submodule-input-color",
      placeholderColor: "--chat77submodule-input-placeholder-color",
      borderRadius: "--chat77submodule-input-border-radius",
      borderWidth: "--chat77submodule-input-border-width",
      borderColor: "--chat77submodule-input-border-rgb",
      borderOpacity: "--chat77submodule-input-border-opacity",
      opacity: "--chat77submodule-input-opacity",
      blur: "--chat77submodule-input-blur",
      boxShadow: "--chat77submodule-input-box-shadow",
    },
    buttons: {
      bgRgb: "--chat77submodule-button-bg-rgb",
      color: "--chat77submodule-button-color",
      borderRadius: "--chat77submodule-button-border-radius",
      borderWidth: "--chat77submodule-button-border-width",
      borderColor: "--chat77submodule-button-border-rgb",
      borderOpacity: "--chat77submodule-button-border-opacity",
      opacity: "--chat77submodule-button-opacity",
      blur: "--chat77submodule-button-blur",
      boxShadow: "--chat77submodule-button-box-shadow",
    },
    checkbox: {
      bgRgb: "--chat77submodule-checkbox-bg-rgb",
      alphaRatio: "--selectable-alpha-ratio",
    },
  },
} as const;

export const setCssVariablesValue = (
  theme: Theme | undefined,
  container: HTMLDivElement,
  isPreview?: boolean,
) => {
  if (!theme) return;
  const documentStyle = container?.style;
  if (!documentStyle) return;
  setGeneralTheme(theme.general, documentStyle, isPreview);
  setChatTheme(theme.chat, theme.general?.background, documentStyle);
};

const setGeneralTheme = (
  generalTheme: GeneralTheme | undefined,
  documentStyle: CSSStyleDeclaration,
  isPreview?: boolean,
) => {
  setGeneralBackground(generalTheme?.background, documentStyle);
  documentStyle.setProperty(
    cssVariableNames.general.fontFamily,
    (typeof generalTheme?.font === "string"
      ? generalTheme.font
      : generalTheme?.font?.family) ?? defaultFontFamily,
  );
  setProgressBar(generalTheme?.progressBar, documentStyle, isPreview);
};

const setProgressBar = (
  progressBar: GeneralTheme["progressBar"],
  documentStyle: CSSStyleDeclaration,
  isPreview?: boolean,
) => {
  const position = progressBar?.position ?? defaultProgressBarPosition;

  documentStyle.setProperty(
    cssVariableNames.general.progressBar.position,
    position === "fixed" ? (isPreview ? "absolute" : "fixed") : position,
  );
  documentStyle.setProperty(
    cssVariableNames.general.progressBar.color,
    progressBar?.color ?? defaultProgressBarColor,
  );
  documentStyle.setProperty(
    cssVariableNames.general.progressBar.colorRgb,
    hexToRgb(
      progressBar?.backgroundColor ?? defaultProgressBarBackgroundColor,
    ).join(", "),
  );
  documentStyle.setProperty(
    cssVariableNames.general.progressBar.height,
    `${progressBar?.thickness ?? defaultProgressBarThickness}px`,
  );

  const placement = progressBar?.placement ?? defaultProgressBarPlacement;

  documentStyle.setProperty(
    cssVariableNames.general.progressBar.top,
    placement === "Top" ? "0" : "auto",
  );

  documentStyle.setProperty(
    cssVariableNames.general.progressBar.bottom,
    placement === "Bottom" ? "0" : "auto",
  );
};

const setChatTheme = (
  chatTheme: ChatTheme | undefined,
  generalBackground: GeneralTheme["background"],
  documentStyle: CSSStyleDeclaration,
) => {
  setChatContainer(
    chatTheme?.container,
    generalBackground,
    documentStyle,
    chatTheme?.roundness,
  );
  setHostBubbles(chatTheme?.hostBubbles, documentStyle, chatTheme?.roundness);
  setGuestBubbles(chatTheme?.guestBubbles, documentStyle, chatTheme?.roundness);
  setButtons(chatTheme?.buttons, documentStyle, chatTheme?.roundness);
  setInputs(chatTheme?.inputs, documentStyle, chatTheme?.roundness);
  setCheckbox(chatTheme?.container, generalBackground, documentStyle);
};

const setChatContainer = (
  container: ChatTheme["container"],
  generalBackground: GeneralTheme["background"],
  documentStyle: CSSStyleDeclaration,
  legacyRoundness?: ChatTheme["roundness"],
) => {
  const chatContainerBgColor =
    container?.backgroundColor ?? defaultContainerBackgroundColor;
  const isBgDisabled =
    chatContainerBgColor === "transparent" || isEmpty(chatContainerBgColor);
  documentStyle.setProperty(
    cssVariableNames.chat.container.bgColor,
    isBgDisabled ? "0, 0, 0" : hexToRgb(chatContainerBgColor).join(", "),
  );

  documentStyle.setProperty(
    cssVariableNames.chat.container.color,
    hexToRgb(
      container?.color ??
        (isChatContainerLight({
          chatContainer: container,
          generalBackground,
        })
          ? defaultLightTextColor
          : defaultDarkTextColor),
    ).join(", "),
  );

  documentStyle.setProperty(
    cssVariableNames.chat.container.maxWidth,
    container?.maxWidth ?? defaultContainerMaxWidth,
  );
  documentStyle.setProperty(
    cssVariableNames.chat.container.maxHeight,
    container?.maxHeight ?? defaultContainerMaxHeight,
  );
  const opacity = isBgDisabled
    ? "1"
    : (container?.opacity ?? defaultOpacity).toString();
  documentStyle.setProperty(
    cssVariableNames.chat.container.opacity,
    isBgDisabled ? "0" : (container?.opacity ?? defaultOpacity).toString(),
  );
  documentStyle.setProperty(
    cssVariableNames.chat.container.blur,
    opacity === "1" || isBgDisabled
      ? "0xp"
      : `${container?.blur ?? defaultBlur}px`,
  );
  setShadow(
    container?.shadow,
    documentStyle,
    cssVariableNames.chat.container.boxShadow,
  );

  setBorderRadius(
    container?.border ?? {
      roundeness: legacyRoundness ?? defaultRoundness,
    },
    documentStyle,
    cssVariableNames.chat.container.borderRadius,
  );

  documentStyle.setProperty(
    cssVariableNames.chat.container.borderWidth,
    isDefined(container?.border?.thickness)
      ? `${container?.border?.thickness}px`
      : "0",
  );

  documentStyle.setProperty(
    cssVariableNames.chat.container.borderOpacity,
    isDefined(container?.border?.opacity)
      ? container.border.opacity.toString()
      : defaultOpacity.toString(),
  );

  documentStyle.setProperty(
    cssVariableNames.chat.container.borderColor,
    hexToRgb(container?.border?.color ?? "").join(", "),
  );
};

const setHostBubbles = (
  hostBubbles: ContainerTheme | undefined,
  documentStyle: CSSStyleDeclaration,
  legacyRoundness?: ChatTheme["roundness"],
) => {
  documentStyle.setProperty(
    cssVariableNames.chat.hostBubbles.bgColor,
    hexToRgb(
      hostBubbles?.backgroundColor ?? defaultHostBubblesBackgroundColor,
    ).join(", "),
  );
  documentStyle.setProperty(
    cssVariableNames.chat.hostBubbles.color,
    hostBubbles?.color ?? defaultHostBubblesColor,
  );
  setBorderRadius(
    hostBubbles?.border ?? {
      roundeness: legacyRoundness ?? defaultRoundness,
    },
    documentStyle,
    cssVariableNames.chat.hostBubbles.borderRadius,
  );

  documentStyle.setProperty(
    cssVariableNames.chat.hostBubbles.borderWidth,
    isDefined(hostBubbles?.border?.thickness)
      ? `${hostBubbles?.border?.thickness}px`
      : "0",
  );

  documentStyle.setProperty(
    cssVariableNames.chat.hostBubbles.borderColor,
    hexToRgb(hostBubbles?.border?.color ?? "").join(", "),
  );

  documentStyle.setProperty(
    cssVariableNames.chat.hostBubbles.opacity,
    hostBubbles?.backgroundColor === "transparent"
      ? "0"
      : isDefined(hostBubbles?.opacity)
        ? hostBubbles.opacity.toString()
        : defaultOpacity.toString(),
  );

  documentStyle.setProperty(
    cssVariableNames.chat.hostBubbles.borderOpacity,
    isDefined(hostBubbles?.border?.opacity)
      ? hostBubbles.border.opacity.toString()
      : defaultOpacity.toString(),
  );

  documentStyle.setProperty(
    cssVariableNames.chat.hostBubbles.blur,
    isDefined(hostBubbles?.blur) ? `${hostBubbles.blur ?? 0}px` : "none",
  );

  setShadow(
    hostBubbles?.shadow,
    documentStyle,
    cssVariableNames.chat.hostBubbles.boxShadow,
  );
};

const setGuestBubbles = (
  guestBubbles: ContainerTheme | undefined,
  documentStyle: CSSStyleDeclaration,
  legacyRoundness?: ChatTheme["roundness"],
) => {
  documentStyle.setProperty(
    cssVariableNames.chat.guestBubbles.bgColor,
    hexToRgb(
      guestBubbles?.backgroundColor ?? defaultGuestBubblesBackgroundColor,
    ).join(", "),
  );

  documentStyle.setProperty(
    cssVariableNames.chat.guestBubbles.color,
    guestBubbles?.color ?? defaultGuestBubblesColor,
  );

  setBorderRadius(
    guestBubbles?.border ?? {
      roundeness: legacyRoundness ?? defaultRoundness,
    },
    documentStyle,
    cssVariableNames.chat.guestBubbles.borderRadius,
  );

  documentStyle.setProperty(
    cssVariableNames.chat.guestBubbles.borderWidth,
    isDefined(guestBubbles?.border?.thickness)
      ? `${guestBubbles?.border?.thickness}px`
      : "0",
  );

  documentStyle.setProperty(
    cssVariableNames.chat.guestBubbles.borderColor,
    hexToRgb(guestBubbles?.border?.color ?? "").join(", "),
  );

  documentStyle.setProperty(
    cssVariableNames.chat.guestBubbles.borderOpacity,
    isDefined(guestBubbles?.border?.opacity)
      ? guestBubbles.border.opacity.toString()
      : defaultOpacity.toString(),
  );

  documentStyle.setProperty(
    cssVariableNames.chat.guestBubbles.opacity,
    guestBubbles?.backgroundColor === "transparent"
      ? "0"
      : isDefined(guestBubbles?.opacity)
        ? guestBubbles.opacity.toString()
        : defaultOpacity.toString(),
  );

  documentStyle.setProperty(
    cssVariableNames.chat.guestBubbles.blur,
    isDefined(guestBubbles?.blur) ? `${guestBubbles.blur ?? 0}px` : "none",
  );

  setShadow(
    guestBubbles?.shadow,
    documentStyle,
    cssVariableNames.chat.guestBubbles.boxShadow,
  );
};

const setButtons = (
  buttons: ContainerTheme | undefined,
  documentStyle: CSSStyleDeclaration,
  legacyRoundness?: ChatTheme["roundness"],
) => {
  const bgColor = buttons?.backgroundColor ?? defaultButtonsBackgroundColor;

  documentStyle.setProperty(
    cssVariableNames.chat.buttons.bgRgb,
    hexToRgb(bgColor).join(", "),
  );

  documentStyle.setProperty(
    cssVariableNames.chat.buttons.bgRgb,
    hexToRgb(bgColor).join(", "),
  );

  documentStyle.setProperty(
    cssVariableNames.chat.buttons.color,
    buttons?.color ?? defaultButtonsColor,
  );

  setBorderRadius(
    buttons?.border ?? {
      roundeness: legacyRoundness ?? defaultRoundness,
    },
    documentStyle,
    cssVariableNames.chat.buttons.borderRadius,
  );

  documentStyle.setProperty(
    cssVariableNames.chat.buttons.borderWidth,
    isDefined(buttons?.border?.thickness)
      ? `${buttons?.border?.thickness}px`
      : `${defaultButtonsBorderThickness}px`,
  );

  documentStyle.setProperty(
    cssVariableNames.chat.buttons.borderColor,
    hexToRgb(
      buttons?.border?.color ??
        buttons?.backgroundColor ??
        defaultButtonsBackgroundColor,
    ).join(", "),
  );

  documentStyle.setProperty(
    cssVariableNames.chat.buttons.borderOpacity,
    isDefined(buttons?.border?.opacity)
      ? buttons.border.opacity.toString()
      : defaultOpacity.toString(),
  );

  documentStyle.setProperty(
    cssVariableNames.chat.buttons.opacity,
    buttons?.backgroundColor === "transparent"
      ? "0"
      : isDefined(buttons?.opacity)
        ? buttons.opacity.toString()
        : defaultOpacity.toString(),
  );

  documentStyle.setProperty(
    cssVariableNames.chat.buttons.blur,
    isDefined(buttons?.blur) ? `${buttons.blur ?? 0}px` : "none",
  );

  setShadow(
    buttons?.shadow,
    documentStyle,
    cssVariableNames.chat.buttons.boxShadow,
  );
};

const setInputs = (
  inputs: InputTheme | undefined,
  documentStyle: CSSStyleDeclaration,
  legacyRoundness?: ChatTheme["roundness"],
) => {
  documentStyle.setProperty(
    cssVariableNames.chat.inputs.bgColor,
    hexToRgb(inputs?.backgroundColor ?? defaultInputsBackgroundColor).join(
      ", ",
    ),
  );

  documentStyle.setProperty(
    cssVariableNames.chat.inputs.color,
    inputs?.color ?? defaultInputsColor,
  );

  documentStyle.setProperty(
    cssVariableNames.chat.inputs.placeholderColor,
    inputs?.placeholderColor ?? defaultInputsPlaceholderColor,
  );

  setBorderRadius(
    inputs?.border ?? {
      roundeness: legacyRoundness ?? defaultRoundness,
    },
    documentStyle,
    cssVariableNames.chat.inputs.borderRadius,
  );

  documentStyle.setProperty(
    cssVariableNames.chat.inputs.borderWidth,
    isDefined(inputs?.border?.thickness)
      ? `${inputs?.border?.thickness}px`
      : "0",
  );

  documentStyle.setProperty(
    cssVariableNames.chat.inputs.borderColor,
    hexToRgb(inputs?.border?.color ?? "").join(", "),
  );

  documentStyle.setProperty(
    cssVariableNames.chat.inputs.borderOpacity,
    isDefined(inputs?.border?.opacity)
      ? inputs.border.opacity.toString()
      : defaultOpacity.toString(),
  );

  documentStyle.setProperty(
    cssVariableNames.chat.inputs.opacity,
    inputs?.backgroundColor === "transparent"
      ? "0"
      : isDefined(inputs?.opacity)
        ? inputs.opacity.toString()
        : defaultOpacity.toString(),
  );

  documentStyle.setProperty(
    cssVariableNames.chat.inputs.blur,
    isDefined(inputs?.blur) ? `${inputs.blur ?? 0}px` : "none",
  );

  setShadow(
    inputs?.shadow ?? defaultInputsShadow,
    documentStyle,
    cssVariableNames.chat.inputs.boxShadow,
  );
};

const setCheckbox = (
  container: ChatTheme["container"],
  generalBackground: GeneralTheme["background"],
  documentStyle: CSSStyleDeclaration,
) => {
  const chatContainerBgColor =
    container?.backgroundColor ?? defaultContainerBackgroundColor;
  const isChatBgTransparent =
    chatContainerBgColor === "transparent" ||
    isEmpty(chatContainerBgColor) ||
    (container?.opacity ?? defaultOpacity) <= 0.2;

  if (isChatBgTransparent) {
    const bgType = generalBackground?.type ?? defaultBackgroundType;
    documentStyle.setProperty(
      cssVariableNames.chat.checkbox.bgRgb,
      bgType === BackgroundType.IMAGE
        ? "rgba(255, 255, 255, 0.75)"
        : hexToRgb(
            (bgType === BackgroundType.COLOR
              ? generalBackground?.content
              : "#ffffff") ?? "#ffffff",
          ).join(", "),
    );
    if (bgType === BackgroundType.IMAGE) {
      documentStyle.setProperty(cssVariableNames.chat.checkbox.alphaRatio, "3");
    } else {
      documentStyle.setProperty(
        cssVariableNames.chat.checkbox.alphaRatio,
        generalBackground?.content && isLight(generalBackground?.content)
          ? "1"
          : "2",
      );
    }
  } else {
    documentStyle.setProperty(
      cssVariableNames.chat.checkbox.bgRgb,
      hexToRgb(chatContainerBgColor)
        .concat(container?.opacity ?? 1)
        .join(", "),
    );
    documentStyle.setProperty(
      cssVariableNames.chat.checkbox.alphaRatio,
      isLight(chatContainerBgColor) ? "1" : "2",
    );
  }
};

const setGeneralBackground = (
  background: Background | undefined,
  documentStyle: CSSStyleDeclaration,
) => {
  documentStyle.setProperty(cssVariableNames.general.bgImage, null);
  documentStyle.setProperty(cssVariableNames.general.bgColor, null);
  documentStyle.setProperty(
    (background?.type ?? defaultBackgroundType) === BackgroundType.IMAGE
      ? cssVariableNames.general.bgImage
      : cssVariableNames.general.bgColor,
    parseBackgroundValue({
      type: background?.type ?? defaultBackgroundType,
      content: background?.content ?? defaultBackgroundColor,
    }),
  );
};

const parseBackgroundValue = ({ type, content }: Background = {}) => {
  switch (type) {
    case BackgroundType.NONE:
      return "transparent";
    case undefined:
    case BackgroundType.COLOR:
      return content ?? defaultBackgroundColor;
    case BackgroundType.IMAGE:
      return `url(${content})`;
  }
};

const setBorderRadius = (
  border: ContainerBorderTheme,
  documentStyle: CSSStyleDeclaration,
  variableName: string,
) => {
  switch (border?.roundeness ?? defaultRoundness) {
    case "none": {
      documentStyle.setProperty(variableName, "0");
      break;
    }
    case "medium": {
      documentStyle.setProperty(variableName, "6px");
      break;
    }
    case "large": {
      documentStyle.setProperty(variableName, "20px");
      break;
    }
    case "custom": {
      documentStyle.setProperty(
        variableName,
        `${border.customRoundeness ?? 6}px`,
      );
      break;
    }
  }
};

// Props taken from https://tailwindcss.com/docs/box-shadow
const setShadow = (
  shadow: ContainerTheme["shadow"],
  documentStyle: CSSStyleDeclaration,
  variableName: string,
) => {
  if (shadow === undefined) {
    documentStyle.setProperty(variableName, "0 0 #0000");
    return;
  }
  switch (shadow) {
    case "none":
      documentStyle.setProperty(variableName, "0 0 #0000");
      break;
    case "sm":
      documentStyle.setProperty(variableName, "0 1px 2px 0 rgb(0 0 0 / 0.05)");
      break;
    case "md":
      documentStyle.setProperty(
        variableName,
        "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      );
      break;
    case "lg":
      documentStyle.setProperty(
        variableName,
        "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      );
      break;
    case "xl":
      documentStyle.setProperty(
        variableName,
        "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      );
      break;
    case "2xl":
      documentStyle.setProperty(
        variableName,
        "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      );
      break;
  }
};
