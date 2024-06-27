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
        console.log(consultarDoc);

        let DataAssinatura;

        if (consultarDoc.pertenceDoc) {
            if (!consultarDoc.attributes.assinatura) {
                DataAssinatura = {
                    assinantes: [
                        {
                            dataAss: new Date().toISOString(),
                            nome: userConsuta.attributes.nome,
                            cpf: userConsuta.attributes.cpf,
                            status: "Assinado eletronicamente, mediante senha de rede, pessoal e intransferível",
                            IP: data.ip,
                            uuid: data.user.uuid,
                            id: data.user.id,
                        },
                    ],
                    testemunhas: [
                        ...consultarDoc.attributes.assinatura.testemunhas,
                    ],
                };
            } else{
                const UserFilter =
                    consultarDoc.attributes.assinatura?.assinantes.filter(
                        (user: any) => user.id === data.user.id
                    );

                if (UserFilter.length == 0) {
                    DataAssinatura = {
                        assinantes: [
                            {
                                dataAss: new Date().toISOString(),
                                nome: userConsuta.attributes.nome,
                                cpf: userConsuta.attributes.cpf,
                                status: "Assinado eletronicamente, mediante senha de rede, pessoal e intransferível",
                                IP: data.ip,
                                uuid: data.user.uuid,
                                id: data.user.id,
                            },
                            ...consultarDoc.attributes.assinatura.assinantes,
                        ],
                        testemunhas: [
                            ...consultarDoc.attributes.assinatura.testemunhas,
                        ],
                    };
                } 

            }
        } else {
            if (data.tag === "Testemunha") {
                if (!consultarDoc.attributes.assinatura) {
                    DataAssinatura = {
                        assinantes: [],
                        testemunhas: [
                            {
                                dataAss: new Date().toISOString(),
                                nome: userConsuta.attributes.nome,
                                cpf: userConsuta.attributes.cpf,
                                status: "Assinado eletronicamente como testemunha",
                                IP: data.ip,
                                uuid: data.user.uuid,
                                id: data.user.id,
                            },
                            ...consultarDoc.attributes.assinatura.testemunhas,
                        ],
                }
            } else{
                if (!consultarDoc.attributes.assinatura) {
                    DataAssinatura = {
                        assinantes: [
                            {
                                dataAss: new Date().toISOString(),
                                nome: userConsuta.attributes.nome,
                                cpf: userConsuta.attributes.cpf,
                                status: "Assinado eletronicamente, mediante senha de rede, pessoal e intransferível",
                                IP: data.ip,
                                uuid: data.user.uuid,
                                id: data.user.id,
                            },
                        ],
                        testemunhas: [
                            ...consultarDoc.attributes.assinatura.testemunhas,
                        ],
                    };
                } else{
                    const UserFilter =
                        consultarDoc.attributes.assinatura?.assinantes.filter(
                            (user: any) => user.id === data.user.id
                        );
    
                    if (UserFilter.length == 0) {
                        DataAssinatura = {
                            assinantes: [
                                {
                                    dataAss: new Date().toISOString(),
                                    nome: userConsuta.attributes.nome,
                                    cpf: userConsuta.attributes.cpf,
                                    status: "Assinado eletronicamente, mediante senha de rede, pessoal e intransferível",
                                    IP: data.ip,
                                    uuid: data.user.uuid,
                                    id: data.user.id,
                                },
                                ...consultarDoc.attributes.assinatura.assinantes,
                            ],
                            testemunhas: [
                                ...consultarDoc.attributes.assinatura.testemunhas,
                            ],
                        };
                    } 
    
                }
            }

        }


        return NextResponse.json(
            { message: "Assinatura com certificado Digital" },
            { status: 200 }
        );
    } catch (error: any) {
        console.error(error);
        return NextResponse.json(error.message, { status: error.status });
    }
}
