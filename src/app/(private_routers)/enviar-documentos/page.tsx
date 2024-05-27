import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Show,
  Text,
} from "@chakra-ui/react";

export default function EnviarDocumentosPage() {
  return (
    <Flex w={"100%"} h={"100%"} justifyContent={"center"} alignItems={"center"}>
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
              placeholder="Destinatários"
            />
            <InputRightElement width="7rem">
              <Button h="2rem" size="md">
                Adicionar
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>

        <Box h={"60%"} justifyContent={"left"}>
          <Button
            justifyContent={"left"}
            variant="link"
            size={"lg"}
            padding={"5px"}
            w={"90%"}
            colorScheme="green"
          >
            Assinatura Eletrônica
          </Button>
          <Button
            justifyContent={"left"}
            variant="link"
            size={"lg"}
            padding={"5px"}
            w={"90%"}
            colorScheme="green"
          >
            Assinatura com BirdID
          </Button>
          <Button
            justifyContent={"left"}
            variant="link"
            size={"lg"}
            padding={"5px"}
            w={"90%"}
            colorScheme="green"
          >
            Assinatura Presencial
          </Button>
          <Button
            justifyContent={"left"}
            variant="link"
            size={"lg"}
            padding={"5px"}
            w={"90%"}
            colorScheme="green"
          >
            Rubrica
          </Button>
          <Button
            justifyContent={"left"}
            variant="link"
            size={"lg"}
            padding={"5px"}
            w={"90%"}
            colorScheme="green"
          >
            Nome
          </Button>
          <Button
            justifyContent={"left"}
            variant="link"
            size={"lg"}
            padding={"5px"}
            w={"90%"}
            colorScheme="green"
          >
            E-mail
          </Button>
          <Button
            justifyContent={"left"}
            variant="link"
            size={"lg"}
            padding={"5px"}
            w={"90%"}
            colorScheme="green"
          >
            Texto{" "}
          </Button>
          <Button
            justifyContent={"left"}
            variant="link"
            size={"lg"}
            padding={"5px"}
            w={"90%"}
            colorScheme="green"
          >
            Data de Assinatura
          </Button>
          <Button
            justifyContent={"left"}
            variant="link"
            size={"lg"}
            padding={"5px"}
            w={"90%"}
            colorScheme="green"
          >
            Qr Code
          </Button>
        </Box>
        <Button variant="outline" size={"lg"} w={"35%"} colorScheme="green">
          Salvar e Enviar
        </Button>
      </Flex>
    </Flex>
  );
}
