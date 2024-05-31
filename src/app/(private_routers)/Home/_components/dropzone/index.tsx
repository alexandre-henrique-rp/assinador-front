"use client";
import { useState } from "react";
import { Box, Button, Flex, Icon, Input, Stack, Text, useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const Dropzone = () => {
    const [Files, setFiles] = useState<File[]>([]);
    const toast = useToast();
    const { refresh } = useRouter();

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();

        if (event.dataTransfer.files) {
            const newFiles = Array.from(event.dataTransfer.files);
            setFiles([...Files, ...newFiles]);
            console.log("newFiles", newFiles);
        }
    };

    const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (Files.length === 0) return;

        const formData = new FormData();
        Files.forEach((file) => {
            formData.append("files", file);
        });

        // Debug: Log the formData content without using entries()
        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
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
                })
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
            <Button
                w={"100%"}
                onClick={() => setFiles([])}
                py={6}
                colorScheme="red"
                hidden={Files.length === 0 ? true : false}
            >
                Limpar arquivos
            </Button>
            <Flex
                w={"100%"}
                h={"100%"}
                bg={"blue.100"}
                position="relative"
                // onDragEnter={(event) => event.preventDefault()}
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
                            Arquivos <b>PDF, DOC, DOCX, JPEG, JPG, PNG, BMP</b>{" "}
                            no máximo 25MBs
                        </Text>
                    </Stack>
                </Box>
            </Flex>
            <Button
                w={"100%"}
                onClick={handleUpload}
                py={6}
                colorScheme="green"
                hidden={Files.length === 0 ? true : false}
            >
                Subir Arquivos
            </Button>
        </>
    );
};

export default Dropzone;
