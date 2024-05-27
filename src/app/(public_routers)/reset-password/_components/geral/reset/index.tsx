"use client";
import { Logologin } from "@/app/components/logo ";
import { ResetPasswordComponent } from "../../uuid";
import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import Loading from "@/app/loading";
import { useState } from "react";

interface IdProps {
  id: string;
}

export default function GealResetPasswordProps(IdProps: any) {
  const [Load, setLoad] = useState<boolean>(false);
  const { id } = IdProps;

  const detectLoad = (e: any) => {
    if (e ==1) {
      setLoad(true);
    } else {
      setLoad(false);
    }
  };

  if (Load) {
    return (
      <>
        <Loading />
      </>
    );
  }
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
        <Logologin
              url="/LOGO REDE BRASIL RP_A.svg"
              width={200}
              height={300}
            />
          
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
