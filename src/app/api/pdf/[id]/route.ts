import { NextResponse } from "next/server";
import Manifesto from "./functions/manifesto";
import RequestPdf from "./functions/pdfRequest";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const ID: string = params.id;

        const requestUUid = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/docs?filters[uuid][$eq]=${ID}&populate=%2A`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
                    "Content-Type": "application/json",
                },
                cache: "no-store",
            }
        );

        const retornoUuid = await requestUUid.json();
        const [dados] = await retornoUuid.data;
        const Assinaturas = dados.attributes.assinaturas;
        const docId = dados.attributes.doc.data.id;
        const filename = dados.attributes.nome;

        console.log(!!Assinaturas);

        if (!!Assinaturas) {
            const requestManifesto = await Manifesto(Assinaturas, ID, filename);
            const requestPdf = await RequestPdf(docId);

            // Concatena os dados binários dos arquivos PDF
            const pdfBuffer = Buffer.concat([requestManifesto, requestPdf]);

            const sanitizeFilename = (filename: string): string => {
                const map: { [key: string]: string } = {
                    ç: "c",
                    Ç: "C",
                    é: "e",
                    É: "E",
                    è: "e",
                    È: "E",
                    ê: "e",
                    Ê: "E",
                    ë: "e",
                    Ë: "E",
                    á: "a",
                    Á: "A",
                    à: "a",
                    À: "A",
                    ã: "a",
                    Ã: "A",
                    â: "a",
                    Â: "A",
                    ä: "a",
                    Ä: "A",
                    í: "i",
                    Í: "I",
                    ì: "i",
                    Ì: "I",
                    î: "i",
                    Î: "I",
                    ï: "i",
                    Ï: "I",
                    ó: "o",
                    Ó: "O",
                    ò: "o",
                    Ò: "O",
                    õ: "o",
                    Õ: "O",
                    ô: "o",
                    Ô: "O",
                    ö: "o",
                    Ö: "O",
                    ú: "u",
                    Ú: "U",
                    ù: "u",
                    Ù: "U",
                    û: "u",
                    Û: "U",
                    ü: "u",
                    Ü: "U",
                    ñ: "n",
                    Ñ: "N",
                };
                return filename.replace(
                    /[\u00C0-\u024F]/g,
                    (char) => map[char] || char
                );
            };
    
            // Sanitiza o nome do arquivo
            const sanitizedFileName = sanitizeFilename(filename);
    
            // Retorna o PDF como resposta
            return new NextResponse(pdfBuffer, {
                status: 200,
                headers: {
                    "Content-Type": "application/pdf",
                    "Content-Disposition": `inline; filename="${sanitizedFileName}"`,
                },
            });
        } else {
            const requestPdf = await RequestPdf(docId);

            console.log("filename",filename)
            // Concatena os dados binários dos arquivos PDF
            const pdfBuffer = requestPdf;

            const sanitizeFilename = (filename: string): string => {
                const map: { [key: string]: string } = {
                    ç: "c",
                    Ç: "C",
                    é: "e",
                    É: "E",
                    è: "e",
                    È: "E",
                    ê: "e",
                    Ê: "E",
                    ë: "e",
                    Ë: "E",
                    á: "a",
                    Á: "A",
                    à: "a",
                    À: "A",
                    ã: "a",
                    Ã: "A",
                    â: "a",
                    Â: "A",
                    ä: "a",
                    Ä: "A",
                    í: "i",
                    Í: "I",
                    ì: "i",
                    Ì: "I",
                    î: "i",
                    Î: "I",
                    ï: "i",
                    Ï: "I",
                    ó: "o",
                    Ó: "O",
                    ò: "o",
                    Ò: "O",
                    õ: "o",
                    Õ: "O",
                    ô: "o",
                    Ô: "O",
                    ö: "o",
                    Ö: "O",
                    ú: "u",
                    Ú: "U",
                    ù: "u",
                    Ù: "U",
                    û: "u",
                    Û: "U",
                    ü: "u",
                    Ü: "U",
                    ñ: "n",
                    Ñ: "N",
                };
                return filename.replace(
                    /[\u00C0-\u024F]/g,
                    (char) => map[char] || char
                );
            };
    
            // Sanitiza o nome do arquivo
            const sanitizedFileName = sanitizeFilename(filename);
    
            // Retorna o PDF como resposta
            return new NextResponse(pdfBuffer, {
                status: 200,
                headers: {
                    "Content-Type": "application/pdf",
                    "Content-Disposition": `inline; filename="${sanitizedFileName}"`,
                },
            });
        }
        
    } catch (error) {
        console.error("Erro ao obter o PDF:", error);
        return new NextResponse("Erro ao obter o PDF", { status: 500 });
    }
}
