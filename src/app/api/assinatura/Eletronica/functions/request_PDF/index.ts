import axios from "axios";



export const RequestPdfBuffer = async (UrlDownload: string) => {
    try {
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
        return pdfBuffer
    } catch (error) {
        throw { message: "Erro ao obter o PDF", erro: error }
    }
}