"use client";
import {
    Box,
    Button,
    Flex,
    Icon,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Tooltip,
    useDisclosure,
} from "@chakra-ui/react";
import { PdfRenderProps } from "./_components/PdfRender";
import { AddSubProps } from "./_components/addSub";
import { useState } from "react";

export default function EnviarDocumentosPage({
    params,
}: {
    params: { uuid: string };
}) {
    const { uuid } = params;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [Dados, setDados] = useState<any>([]);
    

    const OpemSub = (e: any) => {
        if(e == 1) {
            onOpen();
        }
    };

    const HandelModal = () => {};

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
                    justifyContent={"space-evenly"}
                    gap={"15px"}
                >
                    <AddSubProps Data={Dados} IsOpend={OpemSub} />
                    <Box h={"60%"} justifyContent={"left"}>
                        <Flex>
                            <Button
                                justifyContent={"left"}
                                variant="link"
                                size={"lg"}
                                padding={"5px"}
                                w={"28%"}
                                colorScheme="green"
                            >
                                Assinar Eletrônicamente
                            </Button>
                            <Tooltip
                                label="Assinatura com usuario e ID especial"
                                aria-label="A tooltip"
                            >
                                <Icon
                                    ml={2}
                                    color="blue.500"
                                    cursor="pointer"
                                />
                            </Tooltip>
                        </Flex>

                        <Flex>
                            <Button
                                justifyContent={"left"}
                                variant="link"
                                size={"lg"}
                                padding={"5px"}
                                w={"26%"}
                                colorScheme="green"
                            >
                                Assinar Digitalmente
                            </Button>
                            <Tooltip
                                label="Assinatura com Certificado Digital A3"
                                aria-label="A tooltip"
                            >
                                <Icon
                                    ml={2}
                                    color="blue.500"
                                    cursor="pointer"
                                />
                            </Tooltip>
                        </Flex>
                    </Box>

                    <Button
                        variant="outline"
                        size={"lg"}
                        w={"35%"}
                        colorScheme="green"
                    >
                        Salvar e Enviar
                    </Button>
                </Flex>
            </Flex>
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset="slideInBottom"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <p>Modal body</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
