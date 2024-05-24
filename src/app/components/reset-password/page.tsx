"use client";

import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

export const VerifyEmailComponent = () => {
  const [Email, setEmail] = useState<string>("");
  const toast = useToast();
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();

    try {
      if (!Email) {
        toast({
          title: "Erro",
          description: "Preencha todos os campos",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        const request = await fetch(
          `/api/reset-password/email?email=${Email}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            cache: "no-store",
          }
        );
        const response = await request.json();
        console.log(response);
      }
    } catch (error) {
      
    }
   
  };
  const handleBackward: FormEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();

    router.replace("/login");
  };
  return (
    <>
      <FormControl>
        <FormLabel
          color={"#00713D"}
          fontFamily={"roboto"}
          fontSize={"25px"}
          pt={"3%"}
          pb={"3%"}
        ></FormLabel>
        <Input
          placeholder="INSIRA SEU ENDEREÇO DE EMAIL"
          size={"lg"}
          type="email"
          border={"1px solid #00713D"}
          textAlign={"center"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormHelperText
          textAlign={"center"}
          color={"#00713D"}
          mt={"2%"}
          fontSize={"15px"}
        >
          Certifique-se de inserir o mesmo endereço de email que você usou para
          se inscrever. Após inserir seu email e confirmar, você receberá um
          link de confirmação em sua caixa de entrada.
        </FormHelperText>
      </FormControl>
      <Flex mt={"35px"} justifyContent={"space-between"} w={"100%"}>
        <Button size={"lg"} colorScheme="gray" onClick={handleBackward}>
          Voltar
        </Button>
        <Button size={"lg"} colorScheme="green" onClick={handleSubmit}>
          Enviar
        </Button>
      </Flex>
    </>
  );
};
