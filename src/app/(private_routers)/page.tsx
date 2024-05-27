import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import PendenteComponent from "./Home/_components/pendenteComponent";
import AnaliseComponent from "./Home/_components/AnaliseComponent/Index";
import FinalizadosComponents from "./Home/_components/finalizadosComponent";
import EventosComponent from "./Home/_components/EventosComponent";

export default function HomePage() {
  return (
    // [pendentes, analise, finalizados]
    <Flex w={"100%"} h={"100%"} justifyContent={"center"} alignItems={"center"}>
      <Flex
        flexDir={"column"}
        justifyContent={"space-between"}
        h={"100%"}
        w={"50%"}
        p={"50px"}
      >
        <Flex
          w={"100%"}
          h={"20%"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          gap={"15px"}
        >
          <PendenteComponent />
          <AnaliseComponent />
          <FinalizadosComponents />
        </Flex>

        <Flex
          h={"70%"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
        >
          <EventosComponent />
        </Flex>
      </Flex>

      <Flex
        h={"70%"}
        w={"40%"}
        borderColor={"#00713D"}
        borderWidth={"2px"}
        borderStyle="dashed"
        borderRadius={"15px"}
        justifyContent={"center"}
        flexDir={"column"}
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
              Arquivos <b>PDF, DOC, DOCX, JPEG, JPG, PNG, BMP</b> no máximo
              25MBs
            </Text>
          </Stack>
        </Box>
      </Flex>

      
    </Flex>
  );
}
