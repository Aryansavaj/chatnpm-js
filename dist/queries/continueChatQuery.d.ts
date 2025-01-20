import type { Message } from "@chat77npm/bot-engine/schemas/api";
export declare const continueChatQuery: ({ apiHost, message, sessionId, }: {
    apiHost?: string;
    message?: Message;
    sessionId: string;
}) => Promise<{
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
} | {
    error: unknown;
    data?: undefined;
}>;
//# sourceMappingURL=continueChatQuery.d.ts.map