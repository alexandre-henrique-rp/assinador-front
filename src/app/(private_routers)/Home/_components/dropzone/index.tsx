"use client";
import { useState } from "react";
import {
    Box,
    Button,
    Flex,
    Icon,
    Input,
    Stack,
    Text,
    useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const Dropzone = () => {
    const [Files, setFiles] = useState<File[]>([]);
    const toast = useToast();
    const { refresh } = useRouter();

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();

        if (event.dataTransfer.files) {
            const newFiles = Array.from(event.dataTransfer.files);
            setFiles(newFiles);
            const [newFileNames] = newFiles.map((file) => file.name);
            const [newFileTypes] = newFiles.map((file) => file.type);
            const [newFileSize] = newFiles.map((file) => file.size);

            if (newFileSize > 26214400) {
                toast({
                    title: "Arquivo muito grande",
                    description: "Por favor, envie um arquivo menor.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                    position: "top-right",
                });
            } else if (newFileTypes === "application/pdf") {
                toast({
                    title: `Arquivo "${newFileNames}" esta pronto para ser enviado`,
                    description: `se o arquivo estiver correto, clique no botão enviar`,
                    status: "info",
                    duration: 10000,
                    isClosable: true,
                    position: "top-right",
                });
            } else {
                toast({
                    title: `Arquivo Não compatível`,
                    description: `a extensão do arquivo deve ser .pdf`,
                    status: "info",
                    duration: 10000,
                    isClosable: true,
                    position: "top-right",
                });
            }
        }
    };

    const handleUpload = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (Files.length === 0) return;

        const formData = new FormData();
        Files.forEach((file) => {
            formData.append("files", file);
        });

        try {
            const response = await fetch("/api/doc/post", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                toast({
                    title: "Arquivo enviado com sucesso",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                });
                setFiles([]); // Limpar o estado dos arquivos
                refresh();
            } else {
                console.error("Falha ao enviar arquivos:", response.statusText);
                throw { message: "Falha ao enviar arquivos" };
            }
        } catch (error: any) {
            toast({
                title: "Falha ao enviar arquivos",
                description: error.message,
                status: "error",
                duration: 9000,
                isClosable: true,
            });
        }
    };

    return (
        <>
            <Flex
                w={"100%"}
                h={"100%"}
                bg={"blue.100"}
                position="relative"
                onDragOver={(event) => event.preventDefault()}
                onDrop={handleDrop}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Box w={"100%"}>
                    <Stack spacing={1} textAlign="center">
                        <Icon
                            mx="auto"
                            boxSize={12}
                            color="gray.400"
                            _dark={{
                                color: "gray.500",
                            }}
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                        >
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </Icon>
                        <Flex
                            fontSize="sm"
                            color="gray.600"
                            _dark={{
                                color: "gray.400",
                            }}
                            alignItems="baseline"
                            justifyContent={"center"}
                        >
                            <Flex
                                cursor="pointer"
                                rounded="md"
                                fontSize="20px"
                                color="brand.600"
                                _dark={{
                                    color: "brand.200",
                                }}
                                pos="relative"
                                _hover={{
                                    color: "brand.400",
                                    _dark: {
                                        color: "brand.300",
                                    },
                                }}
                            >
                                <span>
                                    <b>Arraste aqui seus documentos</b>
                                </span>
                            </Flex>
                        </Flex>
                        <Text
                            fontSize="12px"
                            color="gray.500"
                            _dark={{
                                color: "gray.50",
                            }}
                        >

                            Arquivos <b>PDF, DOC, DOCX</b>{" "}
                            no máximo 25MBs

                        </Text>
                    </Stack>
                </Box>
            </Flex>
            <Flex
                hidden={Files.length === 0 ? true : false}
                w={"100%"}
                justifyContent={"space-between"}
            >
                <Button
                    w={"100%"}
                    onClick={() => setFiles([])}
                    py={6}
                    colorScheme="red"
                >
                    Limpar arquivos
                </Button>
                <Button
                    w={"100%"}
                    onClick={handleUpload}
                    py={6}
                    colorScheme="green"
                >
                    Enviar Arquivos
                </Button>
            </Flex>
        </>
    );
};

export default Dropzone;
