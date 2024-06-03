import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Flex,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    Tooltip,
} from "@chakra-ui/react";

export default function EnviarDocumentosPage() {
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
                <Box w={"80%"}>
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
                </Box>

                <Box
                    w={"80%"}
                    h={"100%"}
                    padding={"100px"}
                    border={"6px solid #00713D"}
                    borderRadius={"10px"}
                    p={"25%"}
                ></Box>
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
                    <Text p={"2px"} fontSize={"sm"}>Telefone: </Text>
                    <Text p={"2px"} fontSize={"sm"}>Data de Envio: </Text>
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
