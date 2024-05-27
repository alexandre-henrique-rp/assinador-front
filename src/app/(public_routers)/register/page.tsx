import {
  Box,
  Flex
} from "@chakra-ui/react";
import Image from "next/image";
import { RegisterAuth } from "./_components/form";


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
              width={300}
              height={500}
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
