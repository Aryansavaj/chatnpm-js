import type { StartFrom } from "@chat77npm/bot-engine/schemas/api";
type Props = {
    chat77submodule: string | any;
    stripeRedirectStatus?: string;
    apiHost?: string;
    startFrom?: StartFrom;
    isPreview: boolean;
    prefilledVariables?: Record<string, unknown>;
    resultId?: string;
    sessionId?: string;
};
export declare function startChatQuery({ chat77submodule, isPreview, apiHost, prefilledVariables, resultId, stripeRedirectStatus, startFrom, sessionId, }: Props): Promise<{
    error: unknown;
    data?: undefined;
} | {
    data: {
        messages: ({
            id: string;
        } & ({
            type: import("@chat77npm/blocks-bubbles/constants").BubbleBlockType.TEXT;
            content: {
                type: "richText";
                richText?: any;
            } | {
                type: "markdown";
                markdown: string;
            };
        } | {
            type: import("@chat77npm/blocks-bubbles/constants").BubbleBlockType.IMAGE;
            content: {
                url?: string | undefined;
                clickLink?: {
                    url?: string | undefined;
                    alt?: string | undefined;
                } | undefined;
            };
        } | {
            type: import("@chat77npm/blocks-bubbles/constants").BubbleBlockType.VIDEO;
            content: {
                type?: import("@chat77npm/blocks-bubbles/video/constants").VideoBubbleContentType | undefined;
                id?: string | undefined;
                url?: string | undefined;
                isAutoplayEnabled?: boolean | undefined;
                height?: number | `{{${string}}}` | undefined;
                aspectRatio?: string | undefined;
                maxWidth?: string | undefined;
                queryParamsStr?: string | undefined;
                areControlsDisplayed?: boolean | undefined;
            };
        } | {
            type: import("@chat77npm/blocks-bubbles/constants").BubbleBlockType.AUDIO;
            content: {
                url?: string | undefined;
                isAutoplayEnabled?: boolean | undefined;
            };
        } | {
            type: import("@chat77npm/blocks-bubbles/constants").BubbleBlockType.EMBED;
            content: {
                url?: string | undefined;
                height?: number | undefined;
                waitForEvent?: {
                    name?: string | undefined;
                    isEnabled?: boolean | undefined;
                    saveDataInVariableId?: string | undefined;
                } | undefined;
            };
        } | {
            type: "custom-embed";
            content: {
                initFunction: {
                    content: string;
                    args: Record<string, unknown>;
                };
                url?: string | undefined;
                waitForEventFunction?: {
                    content: string;
                    args: Record<string, unknown>;
                } | undefined;
            };
        }))[];
        chat77submodule: {
            id: string;
            settings: {
                general?: {
                    isBrandingEnabled?: boolean | undefined;
                    isTypingEmulationEnabled?: boolean | undefined;
                    isInputPrefillEnabled?: boolean | undefined;
                    isHideQueryParamsEnabled?: boolean | undefined;
                    isNewResultOnRefreshEnabled?: boolean | undefined;
                    rememberUser?: {
                        isEnabled?: boolean | undefined;
                        storage?: "session" | "local" | undefined;
                    } | undefined;
                } | undefined;
                typingEmulation?: {
                    enabled?: boolean | undefined;
                    speed?: number | undefined;
                    maxDelay?: number | undefined;
                    delayBetweenBubbles?: number | undefined;
                    isDisabledOnFirstMessage?: boolean | undefined;
                } | undefined;
                metadata?: {
                    title?: string | undefined;
                    description?: string | undefined;
                    imageUrl?: string | undefined;
                    favIconUrl?: string | undefined;
                    customHeadCode?: string | undefined;
                    googleTagManagerId?: string | undefined;
                } | undefined;
                whatsApp?: {
                    isEnabled?: boolean | undefined;
                    startCondition?: {
                        logicalOperator: import("@chat77npm/conditions/constants").LogicalOperator;
                        comparisons: {
                            id: string;
                            value?: string | undefined;
                            comparisonOperator?: import("@chat77npm/conditions/constants").ComparisonOperators | undefined;
                        }[];
                    } | undefined;
                    sessionExpiryTimeout?: number | undefined;
                } | undefined;
                publicShare?: {
                    isEnabled?: boolean | undefined;
                } | undefined;
                security?: {
                    allowedOrigins?: string[] | undefined;
                } | undefined;
            };
            theme: {
                general?: {
                    font?: string | {
                        type: "Google";
                        family?: string | undefined;
                    } | {
                        type: "Custom";
                        css?: string | undefined;
                        url?: string | undefined;
                        family?: string | undefined;
                    } | undefined;
                    background?: {
                        type?: import("@chat77npm/theme/constants").BackgroundType | undefined;
                        content?: string | undefined;
                    } | undefined;
                    progressBar?: {
                        isEnabled?: boolean | undefined;
                        thickness?: number | undefined;
                        color?: string | undefined;
                        backgroundColor?: string | undefined;
                        placement?: "Top" | "Bottom" | undefined;
                        position?: "fixed" | "absolute" | undefined;
                    } | undefined;
                } | undefined;
                chat?: {
                    container?: {
                        maxWidth?: string | undefined;
                        color?: string | undefined;
                        opacity?: number | undefined;
                        backgroundColor?: string | undefined;
                        blur?: number | undefined;
                        shadow?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | undefined;
                        border?: {
                            thickness?: number | undefined;
                            color?: string | undefined;
                            roundeness?: "custom" | "none" | "medium" | "large" | undefined;
                            customRoundeness?: number | undefined;
                            opacity?: number | undefined;
                        } | undefined;
                        maxHeight?: string | undefined;
                    } | undefined;
                    hostAvatar?: {
                        url?: string | undefined;
                        isEnabled?: boolean | undefined;
                    } | undefined;
                    guestAvatar?: {
                        url?: string | undefined;
                        isEnabled?: boolean | undefined;
                    } | undefined;
                    hostBubbles?: {
                        color?: string | undefined;
                        opacity?: number | undefined;
                        backgroundColor?: string | undefined;
                        blur?: number | undefined;
                        shadow?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | undefined;
                        border?: {
                            thickness?: number | undefined;
                            color?: string | undefined;
                            roundeness?: "custom" | "none" | "medium" | "large" | undefined;
                            customRoundeness?: number | undefined;
                            opacity?: number | undefined;
                        } | undefined;
                    } | undefined;
                    guestBubbles?: {
                        color?: string | undefined;
                        opacity?: number | undefined;
                        backgroundColor?: string | undefined;
                        blur?: number | undefined;
                        shadow?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | undefined;
                        border?: {
                            thickness?: number | undefined;
                            color?: string | undefined;
                            roundeness?: "custom" | "none" | "medium" | "large" | undefined;
                            customRoundeness?: number | undefined;
                            opacity?: number | undefined;
                        } | undefined;
                    } | undefined;
                    buttons?: {
                        color?: string | undefined;
                        opacity?: number | undefined;
                        backgroundColor?: string | undefined;
                        blur?: number | undefined;
                        shadow?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | undefined;
                        border?: {
                            thickness?: number | undefined;
                            color?: string | undefined;
                            roundeness?: "custom" | "none" | "medium" | "large" | undefined;
                            customRoundeness?: number | undefined;
                            opacity?: number | undefined;
                        } | undefined;
                    } | undefined;
                    inputs?: {
                        color?: string | undefined;
                        opacity?: number | undefined;
                        backgroundColor?: string | undefined;
                        blur?: number | undefined;
                        shadow?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | undefined;
                        border?: {
                            thickness?: number | undefined;
                            color?: string | undefined;
                            roundeness?: "custom" | "none" | "medium" | "large" | undefined;
                            customRoundeness?: number | undefined;
                            opacity?: number | undefined;
                        } | undefined;
                        placeholderColor?: string | undefined;
                    } | undefined;
                    roundness?: "none" | "medium" | "large" | undefined;
                } | undefined;
                customCss?: string | undefined;
            };
            publishedAt?: Date | undefined;
        };
        sessionId: string;
        resultId?: string | undefined;
        input?: (({
            type: import("@chat77npm/blocks-inputs/constants").InputBlockType.CHOICE;
            id: string;
            items: {
                id: string;
                outgoingEdgeId?: string | undefined;
                blockId?: string | undefined;
                content?: string | undefined;
                displayCondition?: {
                    isEnabled?: boolean | undefined;
                    condition?: {
                        logicalOperator?: import("@chat77npm/conditions/constants").LogicalOperator | undefined;
                        comparisons?: {
                            id: string;
                            value?: string | undefined;
                            variableId?: string | undefined;
                            comparisonOperator?: import("@chat77npm/conditions/constants").ComparisonOperators | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            }[];
            options?: {
                variableId?: string | undefined;
                isMultipleChoice?: boolean | undefined;
                buttonLabel?: string | undefined;
                dynamicVariableId?: string | undefined;
                isSearchable?: boolean | undefined;
                searchInputPlaceholder?: string | undefined;
            } | undefined;
            outgoingEdgeId?: string | undefined;
        } | {
            type: import("@chat77npm/blocks-inputs/constants").InputBlockType.CHOICE;
            id: string;
            items: {
                id: string;
                outgoingEdgeId?: string | undefined;
                content?: string | undefined;
                displayCondition?: {
                    isEnabled?: boolean | undefined;
                    condition?: {
                        logicalOperator?: import("@chat77npm/conditions/constants").LogicalOperator | undefined;
                        comparisons?: {
                            id: string;
                            value?: string | undefined;
                            variableId?: string | undefined;
                            comparisonOperator?: import("@chat77npm/conditions/constants").ComparisonOperators | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            }[];
            options?: {
                variableId?: string | undefined;
                isMultipleChoice?: boolean | undefined;
                buttonLabel?: string | undefined;
                dynamicVariableId?: string | undefined;
                isSearchable?: boolean | undefined;
                searchInputPlaceholder?: string | undefined;
            } | undefined;
            outgoingEdgeId?: string | undefined;
        } | {
            type: import("@chat77npm/blocks-inputs/constants").InputBlockType.DATE;
            id: string;
            options?: {
                variableId?: string | undefined;
                labels?: {
                    button?: string | undefined;
                    from?: string | undefined;
                    to?: string | undefined;
                } | undefined;
                hasTime?: boolean | undefined;
                isRange?: boolean | undefined;
                format?: string | undefined;
                min?: string | undefined;
                max?: string | undefined;
            } | undefined;
            outgoingEdgeId?: string | undefined;
        } | {
            type: import("@chat77npm/blocks-inputs/constants").InputBlockType.FILE;
            id: string;
            options?: {
                variableId?: string | undefined;
                labels?: {
                    button?: string | undefined;
                    placeholder?: string | undefined;
                    clear?: string | undefined;
                    skip?: string | undefined;
                    success?: {
                        single?: string | undefined;
                        multiple?: string | undefined;
                    } | undefined;
                } | undefined;
                isRequired?: boolean | undefined;
                isMultipleAllowed?: boolean | undefined;
                sizeLimit?: number | undefined;
                visibility?: "Auto" | "Public" | "Private" | undefined;
            } | undefined;
            outgoingEdgeId?: string | undefined;
        } | {
            type: import("@chat77npm/blocks-inputs/constants").InputBlockType.FILE;
            id: string;
            options?: {
                variableId?: string | undefined;
                labels?: {
                    button?: string | undefined;
                    placeholder?: string | undefined;
                    clear?: string | undefined;
                    skip?: string | undefined;
                    success?: {
                        single?: string | undefined;
                        multiple?: string | undefined;
                    } | undefined;
                } | undefined;
                isRequired?: boolean | undefined;
                isMultipleAllowed?: boolean | undefined;
                visibility?: "Auto" | "Public" | "Private" | undefined;
            } | undefined;
            outgoingEdgeId?: string | undefined;
        } | {
            type: import("@chat77npm/blocks-inputs/constants").InputBlockType.TEXT;
            id: string;
            options?: {
                variableId?: string | undefined;
                labels?: {
                    button?: string | undefined;
                    placeholder?: string | undefined;
                } | undefined;
                isLong?: boolean | undefined;
                audioClip?: {
                    isEnabled?: boolean | undefined;
                    visibility?: "Auto" | "Public" | "Private" | undefined;
                    saveVariableId?: string | undefined;
                } | undefined;
                attachments?: {
                    isEnabled?: boolean | undefined;
                    visibility?: "Auto" | "Public" | "Private" | undefined;
                    saveVariableId?: string | undefined;
                } | undefined;
            } | undefined;
            outgoingEdgeId?: string | undefined;
        } | {
            type: import("@chat77npm/blocks-inputs/constants").InputBlockType.EMAIL;
            id: string;
            options?: {
                variableId?: string | undefined;
                labels?: {
                    button?: string | undefined;
                    placeholder?: string | undefined;
                } | undefined;
                retryMessageContent?: string | undefined;
            } | undefined;
            outgoingEdgeId?: string | undefined;
        } | {
            type: import("@chat77npm/blocks-inputs/constants").InputBlockType.NUMBER;
            id: string;
            options?: {
                variableId?: string | undefined;
                labels?: {
                    button?: string | undefined;
                    placeholder?: string | undefined;
                } | undefined;
                min?: number | `{{${string}}}` | undefined;
                max?: number | `{{${string}}}` | undefined;
                step?: number | `{{${string}}}` | undefined;
            } | undefined;
            outgoingEdgeId?: string | undefined;
        } | {
            type: import("@chat77npm/blocks-inputs/constants").InputBlockType.PAYMENT;
            id: string;
            options?: {
                variableId?: string | undefined;
                labels?: {
                    button?: string | undefined;
                    success?: string | undefined;
                } | undefined;
                retryMessageContent?: string | undefined;
                provider?: import("@chat77npm/blocks-inputs/payment/constants").PaymentProvider | undefined;
                additionalInformation?: {
                    name?: string | undefined;
                    email?: string | undefined;
                    description?: string | undefined;
                    phoneNumber?: string | undefined;
                    address?: {
                        country?: string | undefined;
                        line1?: string | undefined;
                        line2?: string | undefined;
                        state?: string | undefined;
                        city?: string | undefined;
                        postalCode?: string | undefined;
                    } | undefined;
                } | undefined;
                credentialsId?: string | undefined;
                currency?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            outgoingEdgeId?: string | undefined;
        } | {
            type: import("@chat77npm/blocks-inputs/constants").InputBlockType.PHONE;
            id: string;
            options?: {
                variableId?: string | undefined;
                labels?: {
                    button?: string | undefined;
                    placeholder?: string | undefined;
                } | undefined;
                retryMessageContent?: string | undefined;
                defaultCountryCode?: string | undefined;
            } | undefined;
            outgoingEdgeId?: string | undefined;
        } | {
            type: import("@chat77npm/blocks-inputs/constants").InputBlockType.PICTURE_CHOICE;
            id: string;
            items: {
                id: string;
                outgoingEdgeId?: string | undefined;
                blockId?: string | undefined;
                title?: string | undefined;
                displayCondition?: {
                    isEnabled?: boolean | undefined;
                    condition?: {
                        logicalOperator?: import("@chat77npm/conditions/constants").LogicalOperator | undefined;
                        comparisons?: {
                            id: string;
                            value?: string | undefined;
                            variableId?: string | undefined;
                            comparisonOperator?: import("@chat77npm/conditions/constants").ComparisonOperators | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                description?: string | undefined;
                pictureSrc?: string | undefined;
            }[];
            options?: {
                variableId?: string | undefined;
                isMultipleChoice?: boolean | undefined;
                buttonLabel?: string | undefined;
                isSearchable?: boolean | undefined;
                searchInputPlaceholder?: string | undefined;
                dynamicItems?: {
                    isEnabled?: boolean | undefined;
                    titlesVariableId?: string | undefined;
                    descriptionsVariableId?: string | undefined;
                    pictureSrcsVariableId?: string | undefined;
                } | undefined;
            } | undefined;
            outgoingEdgeId?: string | undefined;
        } | {
            type: import("@chat77npm/blocks-inputs/constants").InputBlockType.PICTURE_CHOICE;
            id: string;
            items: {
                id: string;
                outgoingEdgeId?: string | undefined;
                title?: string | undefined;
                displayCondition?: {
                    isEnabled?: boolean | undefined;
                    condition?: {
                        logicalOperator?: import("@chat77npm/conditions/constants").LogicalOperator | undefined;
                        comparisons?: {
                            id: string;
                            value?: string | undefined;
                            variableId?: string | undefined;
                            comparisonOperator?: import("@chat77npm/conditions/constants").ComparisonOperators | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                description?: string | undefined;
                pictureSrc?: string | undefined;
            }[];
            options?: {
                variableId?: string | undefined;
                isMultipleChoice?: boolean | undefined;
                buttonLabel?: string | undefined;
                isSearchable?: boolean | undefined;
                searchInputPlaceholder?: string | undefined;
                dynamicItems?: {
                    isEnabled?: boolean | undefined;
                    titlesVariableId?: string | undefined;
                    descriptionsVariableId?: string | undefined;
                    pictureSrcsVariableId?: string | undefined;
                } | undefined;
            } | undefined;
            outgoingEdgeId?: string | undefined;
        } | {
            type: import("@chat77npm/blocks-inputs/constants").InputBlockType.RATING;
            id: string;
            options?: {
                length?: number | undefined;
                variableId?: string | undefined;
                labels?: {
                    button?: string | undefined;
                    left?: string | undefined;
                    right?: string | undefined;
                } | undefined;
                buttonType?: "Icons" | "Numbers" | undefined;
                startsAt?: number | `{{${string}}}` | undefined;
                customIcon?: {
                    isEnabled?: boolean | undefined;
                    svg?: string | undefined;
                } | undefined;
                isOneClickSubmitEnabled?: boolean | undefined;
            } | undefined;
            outgoingEdgeId?: string | undefined;
        } | {
            type: import("@chat77npm/blocks-inputs/constants").InputBlockType.URL;
            id: string;
            options?: {
                variableId?: string | undefined;
                labels?: {
                    button?: string | undefined;
                    placeholder?: string | undefined;
                } | undefined;
                retryMessageContent?: string | undefined;
            } | undefined;
            outgoingEdgeId?: string | undefined;
        }) & {
            prefilledValue?: string | undefined;
            runtimeOptions?: {
                paymentIntentSecret: string;
                amountLabel: string;
                publicKey: string;
            } | undefined;
        }) | undefined;
        progress?: number | undefined;
        logs?: {
            status: string;
            description: string;
            details?: unknown;
        }[] | undefined;
        dynamicTheme?: {
            hostAvatarUrl?: string | undefined;
            guestAvatarUrl?: string | undefined;
        } | undefined;
        lastMessageNewFormat?: string | undefined;
        clientSideActions?: ({
            type: "scriptToExecute";
            scriptToExecute: {
                content: string;
                args: {
                    id: string;
                    value?: string | number | boolean | (string | null)[] | null | undefined;
                }[];
                isCode?: boolean | undefined;
            };
            lastBubbleBlockId?: string | undefined;
            expectsDedicatedReply?: boolean | undefined;
        } | {
            type: "redirect";
            redirect: {
                url?: string | undefined;
                isNewTab?: boolean | undefined;
            };
            lastBubbleBlockId?: string | undefined;
            expectsDedicatedReply?: boolean | undefined;
        } | {
            type: "chatwoot";
            chatwoot: {
                scriptToExecute: {
                    content: string;
                    args: {
                        id: string;
                        value?: string | number | boolean | (string | null)[] | null | undefined;
                    }[];
                    isCode?: boolean | undefined;
                };
            };
            lastBubbleBlockId?: string | undefined;
            expectsDedicatedReply?: boolean | undefined;
        } | {
            type: "googleAnalytics";
            googleAnalytics: {
                value?: number | `{{${string}}}` | undefined;
                trackingId?: string | undefined;
                category?: string | undefined;
                action?: string | undefined;
                label?: string | undefined;
                sendTo?: string | undefined;
            };
            lastBubbleBlockId?: string | undefined;
            expectsDedicatedReply?: boolean | undefined;
        } | {
            type: "wait";
            wait: {
                secondsToWaitFor: number;
            };
            lastBubbleBlockId?: string | undefined;
            expectsDedicatedReply?: boolean | undefined;
        } | {
            type: "setVariable";
            setVariable: {
                scriptToExecute: {
                    content: string;
                    args: {
                        id: string;
                        value?: string | number | boolean | (string | null)[] | null | undefined;
                    }[];
                    isCode?: boolean | undefined;
                };
            };
            lastBubbleBlockId?: string | undefined;
            expectsDedicatedReply?: boolean | undefined;
        } | {
            type: "streamOpenAiChatCompletion";
            streamOpenAiChatCompletion: {
                messages: {
                    content?: string | undefined;
                    role?: "user" | "system" | "assistant" | undefined;
                }[];
            };
            lastBubbleBlockId?: string | undefined;
            expectsDedicatedReply?: boolean | undefined;
        } | {
            type: "webhookToExecute";
            webhookToExecute: {
                url: string;
                headers?: Record<string, string> | undefined;
                method?: import("@chat77npm/blocks-integrations/webhook/constants").HttpMethod | undefined;
                body?: unknown;
            };
            lastBubbleBlockId?: string | undefined;
            expectsDedicatedReply?: boolean | undefined;
        } | {
            type: "startPropsToInject";
            startPropsToInject: {
                customHeadCode?: string | undefined;
                googleAnalyticsId?: string | undefined;
                pixelIds?: string[] | undefined;
                gtmId?: string | undefined;
            };
            lastBubbleBlockId?: string | undefined;
            expectsDedicatedReply?: boolean | undefined;
        } | {
            type: "pixel";
            pixel: {
                params?: {
                    id: string;
                    value?: any;
                    key?: string | undefined;
                }[] | undefined;
                eventType?: undefined;
                pixelId?: string | undefined;
                isInitSkip?: boolean | undefined;
            } | {
                eventType: "Lead" | "Contact" | "CompleteRegistration" | "Schedule" | "SubmitApplication" | "ViewContent" | "AddPaymentInfo" | "AddToCart" | "AddToWishlist" | "CustomizeProduct" | "Donate" | "FindLocation" | "InitiateCheckout" | "Purchase" | "Search" | "StartTrial" | "Subscribe";
                params?: {
                    id: string;
                    value?: any;
                    key?: string | undefined;
                }[] | undefined;
                pixelId?: string | undefined;
                isInitSkip?: boolean | undefined;
            } | {
                eventType: "Custom";
                params?: {
                    id: string;
                    value?: any;
                    key?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                pixelId?: string | undefined;
                isInitSkip?: boolean | undefined;
            };
            lastBubbleBlockId?: string | undefined;
            expectsDedicatedReply?: boolean | undefined;
        } | {
            type: "stream";
            stream: true;
            lastBubbleBlockId?: string | undefined;
            expectsDedicatedReply?: boolean | undefined;
        } | {
            type: "codeToExecute";
            codeToExecute: {
                content: string;
                args: Record<string, unknown>;
            };
            lastBubbleBlockId?: string | undefined;
            expectsDedicatedReply?: boolean | undefined;
        })[] | undefined;
    };
    error?: undefined;
}>;
export {};
//# sourceMappingURL=startChatQuery.d.ts.map