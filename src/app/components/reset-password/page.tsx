"use client";

import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export const VerifyEmailComponent = () => {
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
        <Button size={"lg"} colorScheme="gray">
          Voltar
        </Button>
        <Button size={"lg"} colorScheme="green">
          Enviar
        </Button>
      </Flex>
    </>
  );
};
