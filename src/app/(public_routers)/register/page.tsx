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
} from "@chakra-ui/react";
import Image from "next/image";
import { RegisterAuth } from "../../componemts/register";

export default function Register() {
  return (
    <>
      {/* Verde */}
      <Flex
        w={"100%"}
        h={"100%"}
        bg={"#00713D"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* Branco */}
        <Flex borderRadius={"15px"} bg={"white"} p={"2%"}>
          {/* Imagem */}
          <Flex w={"50%"} justifyContent={"center"} alignItems={"center"}>
            <Image
              src="/LOGO REDE BRASIL RP_B.svg"
              alt="Vercel Logo"
              width={200}
              height={300}
              priority
            />
          </Flex>

          {/* Form */}
          <Box w={"50%"}>
            <RegisterAuth />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
