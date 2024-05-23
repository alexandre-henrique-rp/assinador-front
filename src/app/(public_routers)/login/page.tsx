import {
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import Image from "next/image";
import { LoginAuth } from "./_conponent/form";

export default function Login() {
  return (
    <Box w={"100vw"} h={"100vh"} maxH={"100%"} maxW={"100%"} bg={"#00713D"}>
      <Flex w={"100%"} justifyContent={"center"} pt={"80px"}>
        <Image
          src="/LOGO REDE BRASIL RP_C.svg"
          alt="Vercel Logo"
          width={300}
          height={500}
          priority
        />
      </Flex>
      <Flex
        w={"100%"}
        h={"83%"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={"-50px"}
      >
        <Flex
          w={"400px"}
          borderRadius={"15px"}
          bg={"white"}
          flexDir={"column"}
          p={"25px"}
          gap={"10px"}
        >
          <Box w={"100%"} textAlign={"center"}>
            <Heading color={"#00713D"} fontFamily={"roboto"}>
              Entrar com
            </Heading>
          </Box>
          <LoginAuth />
        </Flex>
      </Flex>
    </Box>
  );
}
