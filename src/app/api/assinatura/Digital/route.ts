import { NextResponse } from "next/server";



export async function PUT(request: Request) {
   
    try {
        const data = await request.json();
        if (!data) throw { message: "Dados não informados, não foi possivel asinal com certificado" };

        return NextResponse.json({ message: "Assinatura com certificado Digital" }, { status: 200 });
    } catch (error: any) {
        console.error(error)
        return NextResponse.json(error.message, { status: error.status });
    }
}