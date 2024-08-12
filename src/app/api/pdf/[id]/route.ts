// import { NextResponse } from "next/server";
// import Manifesto from "./functions/manifesto";
// import RequestPdf from "./functions/pdfRequest";

// export async function GET(
//     request: Request,
//     { params }: { params: { id: string } }
// ) {
//     try {
//         const ID: string = params.id;

//         const requestUUid = await fetch(
//             `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/docs?filters[uuid][$eq]=${ID}&populate=%2A`,
//             {
//                 method: "GET",
//                 headers: {
//                     Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
//                     "Content-Type": "application/json",
//                 },
//                 cache: "no-store",
//             }
//         );

//         const retornoUuid = await requestUUid.json();
//         const [dados] = await retornoUuid.data;
//         const Assinaturas = dados.attributes.assinaturas;
//         const docId = dados.attributes.doc.data.id;
//         const filename = dados.attributes.nome;

//         console.log(!!Assinaturas);

//         if (!!Assinaturas) {
//             const requestManifesto = await Manifesto(Assinaturas, ID, filename);
//             const requestPdf = await RequestPdf(docId);

//             // Concatena os dados binários dos arquivos PDF
//             const pdfBuffer = Buffer.concat([requestManifesto, requestPdf]);

//             const sanitizeFilename = (filename: string): string => {
//                 const map: { [key: string]: string } = {
//                     ç: "c",
//                     Ç: "C",
//                     é: "e",
//                     É: "E",
//                     è: "e",
//                     È: "E",
//                     ê: "e",
//                     Ê: "E",
//                     ë: "e",
//                     Ë: "E",
//                     á: "a",
//                     Á: "A",
//                     à: "a",
//                     À: "A",
//                     ã: "a",
//                     Ã: "A",
//                     â: "a",
//                     Â: "A",
//                     ä: "a",
//                     Ä: "A",
//                     í: "i",
//                     Í: "I",
//                     ì: "i",
//                     Ì: "I",
//                     î: "i",
//                     Î: "I",
//                     ï: "i",
//                     Ï: "I",
//                     ó: "o",
//                     Ó: "O",
//                     ò: "o",
//                     Ò: "O",
//                     õ: "o",
//                     Õ: "O",
//                     ô: "o",
//                     Ô: "O",
//                     ö: "o",
//                     Ö: "O",
//                     ú: "u",
//                     Ú: "U",
//                     ù: "u",
//                     Ù: "U",
//                     û: "u",
//                     Û: "U",
//                     ü: "u",
//                     Ü: "U",
//                     ñ: "n",
//                     Ñ: "N",
//                 };
//                 return filename.replace(
//                     /[\u00C0-\u024F]/g,
//                     (char) => map[char] || char
//                 );
//             };
    
//             // Sanitiza o nome do arquivo
//             const sanitizedFileName = sanitizeFilename(filename);
    
//             // Retorna o PDF como resposta
//             return new NextResponse(pdfBuffer, {
//                 status: 200,
//                 headers: {
//                     "Content-Type": "application/pdf",
//                     "Content-Disposition": `attachment; filename="${sanitizedFileName}"`,
//                 },
//             });
//         } else {
//             const requestPdf = await RequestPdf(docId);

//             console.log("filename",filename)
//             // Concatena os dados binários dos arquivos PDF
//             const pdfBuffer = requestPdf;

//             const sanitizeFilename = (filename: string): string => {
//                 const map: { [key: string]: string } = {
//                     ç: "c",
//                     Ç: "C",
//                     é: "e",
//                     É: "E",
//                     è: "e",
//                     È: "E",
//                     ê: "e",
//                     Ê: "E",
//                     ë: "e",
//                     Ë: "E",
//                     á: "a",
//                     Á: "A",
//                     à: "a",
//                     À: "A",
//                     ã: "a",
//                     Ã: "A",
//                     â: "a",
//                     Â: "A",
//                     ä: "a",
//                     Ä: "A",
//                     í: "i",
//                     Í: "I",
//                     ì: "i",
//                     Ì: "I",
//                     î: "i",
//                     Î: "I",
//                     ï: "i",
//                     Ï: "I",
//                     ó: "o",
//                     Ó: "O",
//                     ò: "o",
//                     Ò: "O",
//                     õ: "o",
//                     Õ: "O",
//                     ô: "o",
//                     Ô: "O",
//                     ö: "o",
//                     Ö: "O",
//                     ú: "u",
//                     Ú: "U",
//                     ù: "u",
//                     Ù: "U",
//                     û: "u",
//                     Û: "U",
//                     ü: "u",
//                     Ü: "U",
//                     ñ: "n",
//                     Ñ: "N",
//                 };
//                 return filename.replace(
//                     /[\u00C0-\u024F]/g,
//                     (char) => map[char] || char
//                 );
//             };
    
//             // Sanitiza o nome do arquivo
//             const sanitizedFileName = sanitizeFilename(filename);
    
//             // Retorna o PDF como resposta
//             return new NextResponse(pdfBuffer, {
//                 status: 200,
//                 headers: {
//                     "Content-Type": "application/pdf",
//                     "Content-Disposition": `attachment; filename="${sanitizedFileName}"`,
//                 },
//             });
//         }
        
//     } catch (error) {
//         console.error("Erro ao obter o PDF:", error);
//         return new NextResponse("Erro ao obter o PDF", { status: 500 });
//     }
// }

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
        console.log("🚀 ~ dados:", dados)
        console.log("🚀 ~ dados:", dados)
        const Assinaturas = dados.attributes.assinaturas;
        console.log("🚀 ~ Assinaturas:", Assinaturas)
        const docId = dados.attributes.doc.data.id;
        const filename = dados.attributes.nome;

        let pdfBuffer;

        if (!!Assinaturas) {
            const requestManifesto = await Manifesto(Assinaturas, ID, filename);
            const requestPdf = await RequestPdf(docId);

            // Concatena os dados binários dos arquivos PDF
            pdfBuffer = Buffer.concat([requestManifesto, requestPdf]);
        } else {
            pdfBuffer = await RequestPdf(docId);
        }

        // Converte o PDF para base64
        const pdfBase64 = pdfBuffer.toString('base64');

        // Retorna o PDF em base64
        return new NextResponse(JSON.stringify({
            base64: pdfBase64,
            filename: filename
        }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });

    } catch (error) {
        console.error("Erro ao obter o PDF:", error);
        return new NextResponse("Erro ao obter o PDF", { status: 500 });
    }
}