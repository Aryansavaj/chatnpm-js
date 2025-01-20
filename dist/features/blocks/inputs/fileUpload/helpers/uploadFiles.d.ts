type UploadFileProps = {
    apiHost: string;
    files: {
        file: File;
        input: {
            sessionId: string;
            fileName: string;
        };
    }[];
    onUploadProgress?: (props: {
        fileIndex: number;
        progress: number;
    }) => void;
};
type UrlList = ({
    url: string;
    type: string;
} | null)[];
export declare const uploadFiles: ({ apiHost, files, onUploadProgress, }: UploadFileProps) => Promise<UrlList>;
export {};
//# sourceMappingURL=uploadFiles.d.ts.map