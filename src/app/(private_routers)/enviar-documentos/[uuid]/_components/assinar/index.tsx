"use client";
import { Box, Flex, Icon, Link, Text, Tooltip } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { FormEventHandler, MouseEventHandler } from "react";

export const AssinarProps = (props: {
    docId: string;
}) => {
   const { data: session }: any = useSession();

   console.log(session.user);



    const HandlerAssEletronicamente: MouseEventHandler<HTMLAnchorElement> | undefined = async(e) => {
        e.preventDefault();
        try{
            const DadosConsulta: { uuid: string; user: number } = {
                uuid: props.docId,
                user: session.user.id
            }

            const response = await fetch("/api/assinatura/Eletronica", {
                method: "POST",
                body: JSON.stringify(DadosConsulta),
                headers: {
                    "Content-Type": "application/json",
                },
            });

        } catch(error: any) {
            console.error(error)
            
        }
    }

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
