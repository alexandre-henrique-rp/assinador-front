import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  VStack,
  HStack,
  Divider,
  List,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

export default function AssinantesPage() {
  return (
    <Flex justifyContent={"center"} h="100%" w={"100%"} bg="#f7f7f7" py={3}>

      <VStack py={10} spacing={8} w="80%" h={"100%"}>
        <Heading as="h1" size="xl" color="#00713D" mb={4}>
          Verificação de Assinaturas
        </Heading>

        <Flex w={"100%"} h={"50rem"}>
          {/* Flex Quem ja assinou */}

          <Box
            w="63%"
            p={6}
            borderWidth="2px"
            borderRadius="lg"
            boxShadow="lg"
            bg="white"
          >
            <Heading as="h2" size="md" color="gray.700" mb={4}>
              Quem já Assinou o documento
            </Heading>

            <Flex
              border={"1px"}
              pt={60}
              pb={60}
              borderStyle={"dashed"}
              borderRadius={"md"}
              alignItems={"center"}
            >
              <Box w={"33%"}>
                <Text padding={"5px"} colorScheme="green">
                  Matheus Murari lopes
                </Text>
                <Text padding={"5px"} colorScheme="green">
                  Matheus Murari lopes
                </Text>
                <Text padding={"5px"} colorScheme="green">
                  Matheus Murari lopes
                </Text>
                <Text padding={"5px"} colorScheme="green">
                  Matheus Murari lopes
                </Text>
                <Text padding={"5px"} colorScheme="green">
                  Matheus Murari lopes
                </Text>
                <Text padding={"5px"} colorScheme="green">
                  Matheus Murari lopes
                </Text>
              </Box>

              <Box w={"33%"}>
                <Text padding={"5px"} colorScheme="green">
                  +55 (16) 99413-4260
                </Text>
                <Text padding={"5px"} colorScheme="green">
                  +55 (16) 99413-4260
                </Text>
                <Text padding={"5px"} colorScheme="green">
                  +55 (16) 99413-4260
                </Text>
                <Text padding={"5px"} colorScheme="green">
                  +55 (16) 99413-4260
                </Text>
                <Text padding={"5px"} colorScheme="green">
                  +55 (16) 99413-4260
                </Text>
                <Text padding={"5px"} colorScheme="green">
                  +55 (16) 99413-4260
                </Text>
              </Box>

              <Box w={"33%"}>
                <Text padding={"5px"} colorScheme="green">
                  macloud100@gmail.com
                </Text>
                <Text padding={"5px"} colorScheme="green">
                  macloud100@gmail.com
                </Text>
                <Text padding={"5px"} colorScheme="green">
                  macloud100@gmail.com
                </Text>
                <Text padding={"5px"} colorScheme="green">
                  macloud100@gmail.com
                </Text>
                <Text padding={"5px"} colorScheme="green">
                  macloud100@gmail.com
                </Text>
                <Text padding={"5px"} colorScheme="green">
                  macloud100@gmail.com
                </Text>
              </Box>
            </Flex>
          </Box>

          {/* Box Assinatura - Visualizador */}
          <Box
            w="100%"
            p={6}
            borderWidth="2px"
            borderRadius="lg"
            boxShadow="lg"
            bg="white"
          >
            <Heading as="h2" size="md" color="gray.700" mb={4}>
              Assinaturas
            </Heading>
            <Flex
              border={"1px"}
              pt={300}
              pb={300}
              borderStyle={"dashed"}
              borderRadius={"md"}
              alignItems={"center"}
              justifyContent={"center"}
            >
        <Text>AQUI MOSTRA O DOCUMENTO DO USUARIO</Text>

            </Flex>
          </Box>
        </Flex>
      </VStack>
    </Flex>
  );
}
