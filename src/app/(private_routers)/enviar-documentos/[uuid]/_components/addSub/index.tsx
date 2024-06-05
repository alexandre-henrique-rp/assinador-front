"use client";
import { Box, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface InProps {
    Data: any;
}

export const AddSubProps = (Props: { IsOpend: any , Data : any}) => {
    const [Dados, setDados] = useState<any>([]);

    useEffect(() => {
        setDados(Props.Data);
    }, [Props.Data]);

    const HandleClick = () => {
        Props.IsOpend(1);
    };
    return (
        <>
            <Box>
                <Button
                    colorScheme="green"
                    w="100%"
                    size="lg"
                    onClick={HandleClick}
                >
                    Adicionar
                </Button>
            </Box>
            {!Dados && null}

            {Dados &&
                Dados.map((item: any) => {
                    return (
                        <>
                            <Box>
                                <Text p={"2px"} fontSize={"sm"}>
                                    Nome: {item.nome}
                                </Text>
                                <Text p={"2px"} fontSize={"sm"}>
                                    Whatsapp: {item.whatsapp}
                                </Text>
                                <Text p={"2px"} fontSize={"sm"}>
                                    Email: {item.email}
                                </Text>
                                <Text p={"2px"} fontSize={"sm"}>
                                    Data de Envio: {item.date}
                                </Text>
                            </Box>
                        </>
                    );
                })}
        </>
    );
};
