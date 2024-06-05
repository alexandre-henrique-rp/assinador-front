import { NextResponse } from "next/server";



export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const ID: string = searchParams.get("id") as string;
        const ConsultaId  = await fetch(`http://127.0.0.1:1337${ID}`, {
            method: "GET",
        })
        
     
      
        // return NextResponse.json(pdfDoc, {
        //     status: 200,
        //     headers: {
        //         'Content-Type': 'application/pdf',
        //     },
        // });
    } catch (error) {
        console.error(error)
        throw error
    }

}