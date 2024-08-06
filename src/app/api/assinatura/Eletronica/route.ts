import { NextResponse } from "next/server";
import ConsultarDoc from "./functions/consultarDoc";
import { Tag } from "@chakra-ui/react";

export async function POST(request: Request) {
    try {
        const data = await request.json();
        if (!data)
            throw {
                message:
                    "Dados não informados, não foi possivel asinal com certificado",
            };
        console.log(data);

        // consultar documento é do proprietario
        const consultarDoc = await ConsultarDoc(data.docId, data.userId);

        const userConsuta = consultarDoc.attributes.user.data;
        console.log(consultarDoc.attributes.assinatura);
        console.log(consultarDoc.attributes.user);
        console.log(consultarDoc.attributes.doc);
        console.log(consultarDoc);


        
        return NextResponse.json(
            { message: "Assinatura com certificado Digital" },
            { status: 200 }
        );
    } catch (error: any) {
        console.error(error);
        return NextResponse.json(error.message, { status: error.status });
    }
}
