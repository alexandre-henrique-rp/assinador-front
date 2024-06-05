import { NextResponse } from "next/server";

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;
        const data = await request.json();

        console.log(data);
        return NextResponse.json(data, { status: 200 });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json(error.message, { status: error.status });
    }
}
