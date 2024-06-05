"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Link,
  useToast,
} from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEventHandler, useEffect, useState } from "react";

export const LoginAuth = (LoginProps: { reload: any }) => {
  const [user, setUser] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [Looad, setLooad] = useState<boolean>(false);
  const toast = useToast();
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLooad(true);
    const res: any = await signIn('credentials', {
      email: user,
      password: pass,
      redirect: false,
    });

    if (res.status !== 200) {
      toast({
        title: 'Usuário ou Senha Incorreto',
        status: 'error',
        duration: 5000,
        position: 'top-right',
      });
      setLooad(false);
    } else {
    //   router.replace('/');
    }
  };

  const LinkHandleRegister = (e: any)=>{
    e.preventDefault();
    LoginProps.reload(1);
    router.replace("/register")
  }
  const LinkHandleRessetPass = (e: any)=>{
    e.preventDefault();
    LoginProps.reload(1);
    router.replace("/reset-password")
  }


  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel color={"#00713D"} fontFamily={"roboto"} mt={"20px"}>
          Nome de usuário ou Email:
        </FormLabel>
        <Input type="text" bg={"#CACACA"} onChange={(e) => setUser(e.target.value)} />
        <FormLabel color={"#00713D"} fontFamily={"roboto"} mt={"20px"}>
          Senha:
        </FormLabel>
        <Input type="password" bg={"#CACACA"} onChange={(e) => setPass(e.target.value)} />
        <Flex
          w={"100%"}
          justifyContent={"space-around"}
          mt={"40px"}
          gap={"20px"}
        >
          <Box>
            <FormHelperText>
              <Link
                color={"#00713D"}
                fontFamily={"roboto"}
                fontSize={"10px"}
                textDecor={"underline"}
                onClick={LinkHandleRessetPass}
              >
                ESQUECI MINHA SENHA
              </Link>
            </FormHelperText>
            <FormHelperText
              color={"#00713D"}
              fontFamily={"roboto"}
              fontSize={"10px"}
            >
              NÃO TEM CONTA? {""}
              <Link
                color={"#00713D"}
                fontFamily={"roboto"}
                fontSize={"10px"}
                textDecor={"underline"}
                onClick={LinkHandleRegister}
              >
                CADASTRE-SE
              </Link>
            </FormHelperText>
          </Box>
          <Box>
            <Button type="submit" isLoading={Looad} colorScheme={"green"}>ENTRAR</Button>
          </Box>
        </Flex>
      </FormControl>
    </form>
  );
};
