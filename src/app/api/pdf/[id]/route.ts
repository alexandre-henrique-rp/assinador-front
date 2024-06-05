import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        const ID: string = params.id;
        console.log("🚀 ~ GET ~ ID:", ID)

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
        const [dados] = await retornoUuid.data
        const docId = dados.attributes.doc.data.id
        console.log("🚀 ~ GET ~ retornoUuid:", docId)
        

        // Faz a requisição para obter os dados do arquivo pelo ID
        const ConsultaId = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/upload/files/${docId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
                "Content-Type": "application/json",
            },
            cache: "no-store",
        });

        // Converte a resposta em JSON
        const DadosId = await ConsultaId.json();
        console.log("🚀 ~ GET ~ DadosId:", DadosId);

        // Constroi a URL para download do PDF
        const UrlDownload = `${process.env.NEXT_IMAGE_STRAPI_API_URL}${DadosId.url}`;
        console.log("🚀 ~ GET ~ UrlDownload:", UrlDownload);

        // Faz a requisição para baixar o arquivo PDF
        const response = await axios({
            method: 'GET',
            url: UrlDownload,
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
            },
            responseType: 'arraybuffer'
        });

        // Cria um Buffer a partir dos dados binários do PDF
        const pdfBuffer = Buffer.from(response.data);

        const sanitizeFilename = (filename: string): string => {
            const map: { [key: string]: string } = {
                'ç': 'c', 'Ç': 'C',
                'é': 'e', 'É': 'E',
                'è': 'e', 'È': 'E',
                'ê': 'e', 'Ê': 'E',
                'ë': 'e', 'Ë': 'E',
                'á': 'a', 'Á': 'A',
                'à': 'a', 'À': 'A',
                'ã': 'a', 'Ã': 'A',
                'â': 'a', 'Â': 'A',
                'ä': 'a', 'Ä': 'A',
                'í': 'i', 'Í': 'I',
                'ì': 'i', 'Ì': 'I',
                'î': 'i', 'Î': 'I',
                'ï': 'i', 'Ï': 'I',
                'ó': 'o', 'Ó': 'O',
                'ò': 'o', 'Ò': 'O',
                'õ': 'o', 'Õ': 'O',
                'ô': 'o', 'Ô': 'O',
                'ö': 'o', 'Ö': 'O',
                'ú': 'u', 'Ú': 'U',
                'ù': 'u', 'Ù': 'U',
                'û': 'u', 'Û': 'U',
                'ü': 'u', 'Ü': 'U',
                'ñ': 'n', 'Ñ': 'N'
            };
            return filename.replace(/[\u00C0-\u024F]/g, (char) => map[char] || char);
        };

        // Sanitiza o nome do arquivo
        const sanitizedFileName = sanitizeFilename(DadosId.name);

        // Retorna o PDF como resposta
        return new NextResponse(pdfBuffer, {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `inline; filename="${sanitizedFileName}"`,
            },
        });

    } catch (error) {
        console.error("Erro ao obter o PDF:", error);
        return new NextResponse('Erro ao obter o PDF', { status: 500 });
    }
}
