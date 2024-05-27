"use client";

import { Button, Flex, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface IdProps {
  id: string;
}

export const ResetPasswordComponent = (IdProps:any) => {
  const { id } = IdProps;
  const [Load, setLoad] = useState<boolean>(false);
  const [Pass1, setPass1] = useState<string>("");
  const [Pass2, setPass2] = useState<string>("");
  const toast = useToast();
  const router = useRouter();

  const HandleSubmit: any = async(e: any) => {
    e.preventDefault();
    setLoad(true);
    if (Pass1 !== Pass2) {
      toast({
        title: "Erro",
        description: "A senha não corresponde a confirmação",
        status: "error",
        duration: 4000,
        isClosable: true,
      })
      setLoad(false);
    }
    try {
      const request = await fetch(`/api/reset-password/password/${id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: Pass1
        }),
        cache: 'no-store'
      })
      const response = await request.json();
      toast({
        title: "Sucesso",
        description: "Senha alterada com sucesso",
        status: "success",
        duration: 4000,
        isClosable: true,
      })
      setLoad(false);
      router.push("/login");
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao alterar senha",
        status: "error",
        duration: 4000,
        isClosable: true,
      })
    }
  };

  const HandleVoltar = () => {
    router.push("/login");
  }
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
          onChange={(e) => setPass1(e.target.value)}
        />
        <Input
          placeholder="Confirme sua Senha"
          size={"lg"}
          type="text"
          border={"1px solid #00713D"}
          mt={"2%"} 
          onChange={(e) => setPass2(e.target.value)}
        />

      </FormControl>

      <Flex mt={"35px"} justifyContent={"space-between"} w={"100%"}>
        {" "}
        <Button size={"lg"} colorScheme="gray" onAbort={HandleVoltar}>Voltar</Button>
        <Button size={"lg"} colorScheme="green" onClick={HandleSubmit}>Enviar</Button>
      </Flex>
    </>
  );
};
