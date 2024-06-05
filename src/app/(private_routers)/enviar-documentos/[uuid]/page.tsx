import {
    Box,
    Button,
    Flex,
    Icon,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    Tooltip,
} from "@chakra-ui/react";
import { PdfRenderProps } from "./_components/PdfRender";

export default async function EnviarDocumentosPage({
    params,
}: {
    params: { uuid: string };
}) {
    const { uuid } = params;
    const url = `process.env.NEXT_PUBLIC_STRAPI_API_URL}/docs?filters[uuid][$eq]=${uuid}&populate=*`;
    const request = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/docs?filters[uuid][$eq]=${uuid}&populate=*`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
                "Content-Type": "application/json",
            },
            cache: "no-store",
        }
    );

    const retorno = await request.json();
    console.log(
        "🚀 ~ EnviarDocumentosPage ~ retorno:",
        retorno.data[0].attributes.doc
    );
    console.log(
        "🚀 ~ EnviarDocumentosPage:",
         
            retorno.data[0].attributes.doc.data.attributes.url
    );

    return (
        <Flex
            w={"100%"}
            h={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Flex
                flexDir={"column"}
                w={"100%"}
                h={"100%"}
                alignItems={"center"}
                gap={"15px"}
            >
                {/* <Box w={"80%"}>
                    <InputGroup w={"100%"} size="lg">
                        <Input
                            padding={"20px"}
                            type={"Email"}
                            placeholder="*Nome do arquivo*"
                        />
                        <InputRightElement width="8rem">
                            <Button h="1.75rem" size="sm">
                                Adicionar
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Box> */}

                {/* render pdf */}
                <Box
                    w={"80%"}
                    h={"100%"}
                    padding={"100px"}
                    border={"6px solid #00713D"}
                    borderRadius={"10px"}
                    p={"25%"}
                >
                    <PdfRenderProps fileUrl={retorno.data[0].attributes.doc.data.attributes.url} />
                </Box>
            </Flex>

            <Flex
                flexDir={"column"}
                w={"60%"}
                h={"90%"}
                justifyContent={"space-evenly"}
                gap={"15px"}
            >
                <Box>
                    <InputGroup w={"70%"} size="lg">
                        <Input
                            padding={"20px"}
                            type={"Email"}
                            placeholder=" Enviar para * Email * "
                        />
                        <InputRightElement width="7rem">
                            <Button h="2rem" size="md">
                                Adicionar
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Box>

                <Box>
                    <Text p={"2px"} fontSize={"sm"}>
                        Nome:
                    </Text>
                    <Text p={"2px"} fontSize={"sm"}>
                        Telefone:{" "}
                    </Text>
                    <Text p={"2px"} fontSize={"sm"}>
                        Data de Envio:{" "}
                    </Text>
                </Box>

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
                            <Icon ml={2} color="blue.500" cursor="pointer" />
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
                            <Icon ml={2} color="blue.500" cursor="pointer" />
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
    );
}
