import axios from "axios";



async function RequestPdf(docId: string) {
    try {
         // Faz a requisição para obter os dados do arquivo pelo ID
         const ConsultaId = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/upload/files/${docId}`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
                    "Content-Type": "application/json",
                },
                cache: "no-store",
            }
        );

        // Converte a resposta em JSON
        const DadosId = await ConsultaId.json();

        // Constroi a URL para download do PDF
        const UrlDownload = `${process.env.NEXT_IMAGE_STRAPI_API_URL}${DadosId.url}`;

        // Faz a requisição para baixar o arquivo PDF
        const response = await axios({
            method: "GET",
            url: UrlDownload,
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
            },
            responseType: "arraybuffer",
        });

        // Cria um Buffer a partir dos dados binários do PDF
        const pdfBuffer1 = Buffer.from(response.data);
        return pdfBuffer1
    } catch (error: any) {
        return error
    }
}

export default RequestPdf