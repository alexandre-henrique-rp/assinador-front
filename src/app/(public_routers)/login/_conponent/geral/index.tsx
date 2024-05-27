"use client";

import { Logologin } from "@/app/components/logo ";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { LoginAuth } from "../form";
import Loading from "@/app/loading";
import { useState } from "react";

export const GeralLoginProps = () => {
  const [Load, setLoad] = useState<boolean>(false);

  const detectLoad = (e: any) => {
    if (e) {
      setLoad(true);
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
      <Box w={"100%"} h={"100%"}>
        <Flex w={"100%"} justifyContent={"center"} pt={"5rem"}>
          <Logologin
            url="/LOGO REDE BRASIL RP_C.svg"
            width={200}
            height={300}
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
            <LoginAuth reload={detectLoad} />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
