type Props = {
    newFile: File;
    existingFiles: File[];
    params: {
        sizeLimit?: number;
    };
    onError: (message: {
        title?: string;
        description: string;
    }) => void;
};
export declare const sanitizeNewFile: ({ newFile, existingFiles, params, onError, }: Props) => File | undefined;
export {};
//# sourceMappingURL=sanitizeSelectedFiles.d.ts.map