import { NextResponse } from "next/server";


export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {
        const {id} = params;
        if (!id) throw { message: "ID não informado, por favor entre em contato com o Suporte" }; 
        const data = await request.json();
        if (!data) throw { message: "Dados não informados, por favor entre em contato com o Suporte" };


        const PutRequest = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/users/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
            },
            body: JSON.stringify(data),
            cache: 'no-store'
        });
        
        const resposta = await PutRequest.json();

        if (resposta.error) throw resposta.error ;
        
        return NextResponse.json({ message: "Senha Alterado com susesso" }, { status: 200 });
    } catch (error: any) {
        console.error(error)
        return NextResponse.json(error.message, { status: error.status });
    }
}