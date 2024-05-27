import { NextResponse } from "next/server";


export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {
        const {id} = params;
        const data = await request.json();

        const PutRequest = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/users/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.NEXT_API_TOKEN}`,
            },
            body: JSON.stringify(data),
            cache: 'no-store'
        });

        const resposta = await PutRequest.json();

        console.log(resposta)
        

       
        return NextResponse.json({ message: "Senha Alterado com susesso" }, { status: 200 });
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: JSON.stringify(error) }, { status: 500 });
    }
}