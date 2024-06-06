import { NextResponse } from "next/server";
import { RequestUuid } from "./functions/request_uuid";
import axios from "axios";



export async function POST(request: Request) {

    try {
        const data = await request.json();
        if (!data) throw { message: "Dados não informados, não foi possivel asinar eletronicamente" };

        const UUID = data.uuid;
        console.log("🚀 ~ POST ~ UUID:", UUID)

        // Faz a requisição para obter os dados do arquivo pelo uuid
        const requestUUid = await RequestUuid(UUID);
        const DocUrl = requestUUid.attributes.doc.data.attributes.url;   

        // Constroi a URL para download do PDF
        const UrlDownload = `${process.env.NEXT_IMAGE_STRAPI_API_URL}${DocUrl}`;

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
       


        return NextResponse.json({ message: "Assinatura com certificado Digital" }, { status: 200 });
    } catch (error: any) {
        console.error(error)
        return NextResponse.json(error.message, { status: error.status });
    }
}