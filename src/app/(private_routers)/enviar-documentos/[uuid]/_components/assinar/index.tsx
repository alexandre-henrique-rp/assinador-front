"use client";
import { Box, Flex, Icon, Link, Text, Tooltip } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

export const AssinarProps = () => {
   const { data: session }: any = useSession();

    const HandlerAssEletronicamente = async() => {
        
    }
    return (
        <>
            <Box w={"full"} justifyContent={"left"}>
                <Flex alignItems={"center"} gap={2}>
                    <Link
                        color={"green.500"}
                        fontWeight={"bold"}
                        fontSize={"lg"}
                        // onClick={}
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
                        color={"green.500"}
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
