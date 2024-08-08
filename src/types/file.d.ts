interface FileRequestMin {
    id: Number;
    attributes: {
        name: String;
        alternativeText: String | null;
        caption: String | null;
        width: Number | null;
        height: Number | null;
        formats: Number | null;
        hash: String;
        ext: String;
        mime: String;
        size: Number | null;
        url: String;
        previewUrl: String;
        provider: String;
        provider_metadata: Object;
        createdAt: String | Date;
        updatedAt: String | Date;
    };
}
