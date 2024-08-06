"use client";
import { Box, Flex, Icon, Link, Text, Tooltip } from "@chakra-ui/react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { FormEventHandler, MouseEventHandler, useEffect, useState } from "react";

async function fetchIP() {
    try {
      const response = await axios.get('https://api.ipify.org?format=json');
      console.log(response.data.ip);
      return response.data.ip;
    } catch (error) {
      console.error('Erro ao buscar o IP:', error);
    }
  };

export const AssinarProps = (props: { docId: string }) => {
    const { data: session }: any = useSession();
    
    
    const HandlerAssEletronicamente:
        | MouseEventHandler<HTMLAnchorElement>
        | undefined = async (e) => {
        e.preventDefault();
        try {
           
            const DadosConsulta: { docId: string; userId: number; user: any, ip: string } = {
                docId: props.docId,
                userId: session.user.id,
                user: session.user,
                ip: await fetchIP()
            };

            const response = await fetch("/api/assinatura/Eletronica", {
                method: "POST",
                body: JSON.stringify(DadosConsulta),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch (error: any) {
            console.error(error);
        }
    };

    console.log("session", session);

    return (
        <>
            <Box w={"full"} justifyContent={"left"}>
                <Flex alignItems={"center"} gap={2}>
                    <Link
                        color={"green.500"}
                        fontWeight={"bold"}
                        fontSize={"lg"}
                        onClick={HandlerAssEletronicamente}
                    >
                        Assinar Eletrônicamente
                    </Link>
                    <Tooltip
                        label="Assinatura com usuario e ID especial"
                        aria-label="A tooltip"
                    >
                        <Icon color="blue.600" cursor="pointer" boxSize={5} />
                    </Tooltip>
                </Flex>

                <Flex alignItems={"center"} gap={2}>
                    {/* <Link
                        color={"green.500"}
                        fontWeight={"bold"}
                        fontSize={"lg"}
                    >
                        Assinar Digitalmente
                    </Link> */}
                    <Text
                        color={"green.300"}
                        fontWeight={"bold"}
                        fontSize={"lg"}
                    >
                        Assinar Digitalmente
                    </Text>
                    <Tooltip
                        label="Assinatura com Certificado Digital A3"
                        aria-label="A tooltip"
                    >
                        <Icon color="blue.600" cursor="pointer" boxSize={5} />
                    </Tooltip>
                </Flex>
            </Box>
        </>
    );
};
