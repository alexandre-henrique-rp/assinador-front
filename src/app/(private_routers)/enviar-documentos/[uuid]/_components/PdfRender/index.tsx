// 'use client';
import { Box } from "@chakra-ui/react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css"; // Certifique-se de importar os estilos necessários

interface Props {
    id: string;
}

const base64ToBlob = (
    base64: string,
    contentType: string = "application/pdf"
): Blob => {
    const byteCharacters = atob(base64);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
        const slice = byteCharacters.slice(offset, offset + 512);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, { type: contentType });
};

export const PdfRenderProps = async ({ id }: Props) => {
    const request = await fetch(`http://localhost:3000/api/pdf/${id}`);

    if (!request.ok) {
        return null;
    }

    const data = await request.json();
    const blob = base64ToBlob(data.base64);
    const url = URL.createObjectURL(blob);
    const pdfUrl = url;


    if (!pdfUrl) {
        return null;
    }

    return (
        <Box
            w={"95%"}
            h={"100%"}
            border={"6px solid #00713D"}
            borderRadius={"10px"}
        >
            <Box w={"100%"} h={"100%"} overflowY={"auto"}>
                <Worker
                    workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}
                >
                    <Viewer fileUrl={pdfUrl} />
                </Worker>
            </Box>
        </Box>
    );
};
