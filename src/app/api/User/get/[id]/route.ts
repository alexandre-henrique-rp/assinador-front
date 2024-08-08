import { NextResponse } from "next/server";


export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        if (!id) throw { message: "ID não informado, por favor entre em contato com o Suporte" };


        const PutRequest = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/users/${id}?populate=%2A`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
            },
            cache: 'no-store'
        });

        const resposta = await PutRequest.json();
        if (resposta.error) throw resposta.error;

        return NextResponse.json( resposta, { status: 200 });
    } catch (error: any) {
        console.error(error)
        return NextResponse.json(error.message, { status: error.status });
    }
}