"use client";

import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";

export const ResetPasswordComponent = () => {
  return (
    <>
      <FormControl>
        <FormLabel
          color={"#00713D"}
          fontFamily={"roboto"}
          fontSize={"25px"}
          mt={"25px"}
        ></FormLabel>
        <Input
          placeholder="Insira sua Senha"
          size={"lg"}
          type="text"
          border={"1px solid #00713D"}
        />
        <Input
          placeholder="Confirme sua Senha"
          size={"lg"}
          type="text"
          border={"1px solid #00713D"}
          mt={"2%"} 
        />

      </FormControl>

      <Flex mt={"35px"} justifyContent={"space-between"} w={"100%"}>
        {" "}
        <Button size={"lg"} colorScheme="gray">Voltar</Button>
        <Button size={"lg"} colorScheme="green">Enviar</Button>
      </Flex>
    </>
  );
};
