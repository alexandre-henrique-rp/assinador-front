"use client";
import { Box, Button, Flex, Icon, Link, Tooltip } from "@chakra-ui/react";
import { PdfRenderProps } from "./_components/PdfRender";
import { AddSubProps } from "./_components/addSub";
import { useState } from "react";
import { AssinarProps } from "./_components/assinar";

export default function EnviarDocumentosPage({
    params,
}: {
    params: { uuid: string };
}) {
    const { uuid } = params;
    const [Dados, setDados] = useState<any>([]);
    console.log(Dados);

    return (
        <>
            <Flex
                w={"full"}
                h={"full"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Flex w={"70%"} h={"full"} justifyContent={"center"}>
                    <PdfRenderProps id={uuid} />
                </Flex>

                <Flex
                    flexDir={"column"}
                    w={"30%"}
                    h={"full"}
                    justifyContent={"space-between"}
                >
                    <AddSubProps Data={(data: any) => setDados(data)} />
                    <Box w={"100%"}>
                        <AssinarProps />
                        <Button
                            variant="outline"
                            size={"lg"}
                            w={"35%"}
                            colorScheme="green"
                            mt={5}
                        >
                            Salvar e Enviar
                        </Button>
                    </Box>
                </Flex>
            </Flex>
        </>
    );
}
