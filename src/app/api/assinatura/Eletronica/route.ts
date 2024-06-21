import { NextResponse } from "next/server";
import { RequestUuid } from "./functions/request_uuid";
import axios from "axios";
import { RequestPdfBuffer } from "./functions/request_PDF_buffer";
import { ProssPDF } from "./functions/Pross_PDF";
import PdfPrinter from "pdfmake";
import { TDocumentDefinitions } from "pdfmake/interfaces";




export async function POST(request: Request) {

    try {
        const data = await request.json();
        console.log("🚀 ~ POST ~ data:", data)
        if (!data) throw { message: "Dados não informados, não foi possivel asinar eletronicamente" };

        const UUID = data.uuid;
        const UserId = data.user;
        console.log("🚀 ~ POST ~ UUID:", UUID)

        // Faz a requisição para obter os dados do arquivo pelo uuid
        const requestUUid = await RequestUuid(UUID);
        const DocUrl = requestUUid.attributes.doc.data.attributes.url;   

        // Constroi a URL para download do PDF
        const UrlDownload = `${process.env.NEXT_IMAGE_STRAPI_API_URL}${DocUrl}`;
        
        console.log("🚀 ~ POST ~ UrlDownload:", UrlDownload)

        

        return NextResponse.json({ message: "Assinatura com certificado Digital" }, { status: 200 });
    } catch (error: any) {
        console.error(error)
        return NextResponse.json(error.message, { status: error.status });
    }
}


