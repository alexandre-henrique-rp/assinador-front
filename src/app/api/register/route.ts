import { NextResponse } from "next/server";
import { uuid } from "uuidv4";

interface DataUser {
    name: string;
    user: string;
    pass: string;
    tel: string | null;
    whatapp: string | null;
    email: string;
}

export async function POST(request: Request) {
    try {
        const data: DataUser = await request.json();
        
        const dados = {
            nome: data.name,
            username: data.user,
            email: data.email,
            password: data.pass,
            whatsapp: data.tel,
            confirmed: true,
            role: 1,
            uuid2: uuid()
        }
        console.log("dados", dados)
        
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dados),
        });
        const retorno = await response.json();

        return NextResponse.json({ message: 'Registro criado com sucesso', data: { response: retorno.data, } }, { status: 200 });
    } catch (error) {
        console.error(error)
        throw error
    }

}