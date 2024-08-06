import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { uuid } from "uuidv4";
import { nextAuthOptions } from "../../auth/[...nextauth]/route";



export async function POST(request: Request) {
    try {
        const File = await request.formData();
        if (!File) throw { message: "Arquivo não informado, por favor entre em contato com o Suporte" };

        const User: any = await getServerSession(nextAuthOptions);

        const Envio = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/upload`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
            },
            body: File,
            cache: 'no-store'
        });
        const retornoArquivo = await Envio.json();
        if (retornoArquivo.error) throw retornoArquivo.error;

        const DocPost = retornoArquivo.map(async(item: any) => {
            const dataDoc = {
                data: {
                    nome: item.name.split(".")[0],
                    version: 0,
                    doc: item.id,
                    user: User?.user?.id,
                    status: false,
                    uuid: uuid(),
                    assinatura: {
                        assinantes: [],
                        testemunhas: []
                      }
                      
                }
            }

            const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/docs`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
                },
                body: JSON.stringify(dataDoc),
                cache: 'no-store'
            });
            const retorno = await response.json();
            if (retorno.error) throw retorno.error;
        });

        await Promise.all(DocPost);

        return NextResponse.json({ message: "Arquivo enviado com sucesso" }, { status: 200 });

    } catch (error: any) {
        return NextResponse.json(error.message, { status: error.status || 500 });
    }
}