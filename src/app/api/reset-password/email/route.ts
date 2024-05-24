import { NextResponse } from "next/server";
import { UpdateNotUuid } from "../../functions/updateNotUuid";
import { SendEmail } from "../../functions/sendEmail";


export async function POST(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const EmailInformado: any = searchParams.get("email");

        if (!EmailInformado) {
            return NextResponse.json({ message: "Email obrigatório" }, { status: 400 });
        }

        const VerifiqueEmailServer = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/users?filters[email][$eq]=${EmailInformado}&populate=%2A`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.NEXT_API_TOKEN}`,
            },
            cache: 'no-store'
        })
        const [VerifiqueEmail] = await VerifiqueEmailServer.json();
        console.log("🚀 ~ POST ~ VerifiqueEmail:", VerifiqueEmail.uuid)

        if (!VerifiqueEmail.uuid) {
            const uuid = await UpdateNotUuid(VerifiqueEmail.id, 'user')
            console.log("🚀 ~ POST ~ uuid:", uuid)
        }

        if (!VerifiqueEmail) {
            return NextResponse.json({ message: "Email não encontrado" }, { status: 404 });
        }

        const conteudo = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            padding: 20px;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin: 50px auto;
        }
        h1 {
            color: #333;
        }
        p {
            color: #555;
            line-height: 1.6;
        }
        a.button {
            display: inline-block;
            padding: 10px 20px;
            color: #fff;
            background-color: #007bff;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
        }
        a.button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Recuperação de Senha</h1>
        <p>Prezado(a) ${VerifiqueEmail.nome},</p>
        <p>Recebemos uma solicitação para redefinir a senha da sua conta. Se você fez esta solicitação, clique no link abaixo para criar uma nova senha:</p>
        <p><a href="${process.env.NEXT_PUBLIC_LINK}/reset-password/${VerifiqueEmail.uuid}" class="button">Redefinir Senha</a></p>
        <p>Se você não solicitou a redefinição de senha, por favor, ignore este e-mail.</p>
        <p>Atenciosamente,</p>
        <p>[Nome da Empresa]</p>
    </div>
</body>
</html>`;

        const send = await SendEmail(EmailInformado, 'Redefina sua senha', conteudo)
        console.log(send)
        return NextResponse.json({ message: "Email encontrado" }, { status: 200 });
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: JSON.stringify(error) }, { status: 500 });
    }
}