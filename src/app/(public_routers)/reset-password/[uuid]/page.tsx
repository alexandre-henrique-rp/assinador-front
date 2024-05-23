import { Logologin } from "@/app/componemts/logo ";
import { ResetPasswordComponent } from "@/app/componemts/reset-password/uuid/page";
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

export default function ResetPassword() {
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
        <Box  pb={"80px"}>
          <Logologin url="/LOGO REDE BRASIL RP_C.svg" />
        </Box>

        {/* Branco */}
        <Flex
          shadow={"2xl"}
          borderRadius={"15px"}
          w={"600px"}
          h={"300px"}
          bg={"white"}
          p={"25px"}
          gap={"-10px"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {/* [Texto redefina sua Senha e] */}
          <Box w={"100%"}>
            {" "}
            <Text
              w={"50%%"}
              fontSize={"25px"}
              textAlign={"center"}
              color="#00713D"
              alignItems={"center"}
              fontWeight={"bold"}
            >
              {" "}
              REDEFINA SUA SENHA:{" "}
            </Text>
          </Box>
          {/* Form */}
          <Box w={"75%"}>
            <ResetPasswordComponent />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
