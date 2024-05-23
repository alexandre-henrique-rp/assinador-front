import { Logologin } from "@/app/componemts/logo ";
import { VerifyEmailComponent } from "@/app/componemts/reset-password/page";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

export default function VerifyEmail() {
  return (
    <>
      {/* Verde */}
      <Flex
        w={"100vw"}
        h={"100vh"}
        maxH={"100%"}
        maxW={"100%"}
        bg={"#00713D"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box pb={"80px"}>
          <Logologin />
        </Box>

        {/* Branco */}
        <Flex
          shadow={"2xl"}
          borderRadius={"15px"}
          w={"600px"}
          bg={"white"}
          p={"25px"}
          gap={"-10px"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {/* [Texto confirme seu email] */}
          <Box w={"100%"}>
            <Text
              w={"50%%"}
              fontSize={"25px"}
              textAlign={"center"}
              color="#00713D"
              alignItems={"center"}
              fontWeight={"bold"}
              >
              CONFIRME SEU EMAIL
            </Text>
          </Box>

          {/* [Texto redefina sua Senha e] */}
          <Box w={"75%"} 
        //   pt={"1%"} 
        //   pb={"1%"}
        >
            <Text
              fontSize={"14px"}
              textAlign={"center"}
              color="#00713D"
              alignItems={"center"}
              fontWeight={"bold"}
            >
              Por favor, insira seu endereço de Email CADASTRADO abaixo para
              redefinir sua senha.
            </Text>
          </Box>
          {/* Form */}
          <Box w={"75%"}>
            <VerifyEmailComponent />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
