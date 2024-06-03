"use client";

import CardLyout from "@/app/components/card";
import CardAssinatura from "@/app/components/card/cardAssinatura";
import CardName from "@/app/components/card/cardName";
import CardStatus from "@/app/components/card/status";
import {
    Box,
    Divider,
    Flex,
    Link,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Tr,
} from "@chakra-ui/react";

interface Props {
    docs: [
        {
            id: number;
            nome: string;
            version: number;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            uuid: string;
            status: boolean;
        }
    ];
}

export default function EventosComponent(Dados: Props) {
    console.log("🚀 ~ file: index.tsx:", Dados.docs);
    return (
        <Flex
            shadow={"2xl"}
            borderRadius={"15px"}
            w={{ base: "100%", md: "97%" }}
            bg={"white"}
            p={"30px"}
            flexDir={"column"}
            justifyContent={"left"}
            alignItems={"left"}
        >
            {/* TEXTO SUPERIOR ESQUERDO */}
            <Text
                w={"100%"}
                fontSize={"20px"}
                textAlign={"left"}
                color="#00713D"
                alignItems={"left"}
                fontWeight={"bold"}
            >
                Eventos Recentes
                <Divider borderColor={"#00713D"} />
            </Text>

            {/* LOCAL AONDE VAI FICAR OS ARQUIVOS DO CLIENTE */}
            <Flex
                w={"100%"}
                h={"30vh"}
                flexDir={"column"}
                py={"10px"}
                pe={"15px"}
                gap={"1rem"}
                overflowY={"auto"}
            >
                {!Dados.docs && null}
                {Dados.docs &&
                    Dados.docs.map((doc) => {
                        return (
                            <>
                                <Link href={`/enviar-documentos/${doc.uuid}`}>
                                    <CardLyout key={doc.id}>
                                        <CardName nome={doc.nome} />
                                        <CardStatus status={doc.status} />
                                        <CardAssinatura id={doc.id} />
                                    </CardLyout>
                                </Link>
                            </>
                        );
                    })}
            </Flex>

            {/* TEXTO INFERIOR DIREITO */}
            <Text
                w={"100%"}
                fontSize={"20px"}
                textAlign={"right"}
                color="#00713D"
                alignItems={"right"}
                fontWeight={"Thin"}
            >
                <Divider borderColor={"#00713D"} />
                <Link pt={"10px"}> Ver lista completa </Link>
            </Text>
        </Flex>
    );
}
