"use client";

import Loading from "@/app/loading";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FormEventHandler, useEffect, useState } from "react";
import { mask, unMask } from "remask";


export const RegisterAuth = () => {
  const [Name, setName] = useState<string>("");
  const [User, setUser] = useState<string>("");
  const [Pass, setPass] = useState<string>("");
  const [Pass1, setPass1] = useState<string>("");
  const [Tel, setTel] = useState<string>("");
  const [Whatapp, setWhatapp] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [Looad, setLooad] = useState<boolean>(false);
  const toast = useToast();
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    setLooad(true);
    
    if (!Name || !User || !Pass || !Email) {
      toast({
        title: "Erro",
        description: "Preencha todos os campos",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setLooad(false);
    }

    if (Pass !== Pass1) {
      toast({
        title: "Erro",
        description: "A senha não corresponde a confirmação",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setLooad(false);
    } else {
      try {

        const res = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: Name,
            user: User,
            pass: Pass,
            tel: Tel,
            whatapp: Whatapp,
            email: Email,
          }),
        });
        const data = await res.json();
        if (data.error) {
          toast({
            title: "Erro",
            description: data.error,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Sucesso",
            description: data.message,
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          router.push("/login");
        }
        setLooad(false);
      } catch (error) {
        toast({
          title: "Erro",
          description: `${JSON.stringify(error)}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        setLooad(false);
      }
    }
  };

  const WhatsAppMask = (e: any) => {
    const valor = e.target.value;
    const valorLinpo = unMask(valor);
    const masked = mask(valorLinpo, ["(99) 9999-9999", "(99) 9 9999-9999"]);
    setTel(valorLinpo);
    setWhatapp(masked);
  };

  return (
    <>
      <FormControl isRequired>
        <Flex display={"flex"} flexDirection={"column"} gap={"2%"}>
          <Box>
            <FormLabel color={"#00713D"} fontFamily={"roboto"}>
              Nome Completo:
            </FormLabel>
            <Input
              type="text"
              onChange={(e) => setName(e.target.value)}
              border={"1px solid #00713D"}
            />
          </Box>

          <Box>
            <FormLabel color={"#00713D"} fontFamily={"roboto"}>
              Ususario:
            </FormLabel>
            <Input
              type="text"
              onChange={(e) => setUser(e.target.value)}
              border={"1px solid #00713D"}
            />
          </Box>

          <Box>
            <FormLabel color={"#00713D"} fontFamily={"roboto"}>
              Whatsapp com DDD
            </FormLabel>
            <Input
              type="text"
              onChange={WhatsAppMask}
              value={Whatapp}
              border={"1px solid #00713D"}
            />
          </Box>

          <Box>
            <FormLabel color={"#00713D"} fontFamily={"roboto"}>
              Email:
            </FormLabel>
            <Input
              type="Email"
              onChange={(e) => setEmail(e.target.value)}
              border={"1px solid #00713D"}
            />
          </Box>
          <Box>
            <FormLabel color={"#00713D"} fontFamily={"roboto"}>
              Senha
            </FormLabel>
            <Input
              type="Password"
              onChange={(e) => setPass(e.target.value)}
              border={"1px solid #00713D"}
            />
          </Box>
          <Box>
            <FormLabel color={"#00713D"} fontFamily={"roboto"}>
              Confirme sua Senha
            </FormLabel>
            <Input
              type="Password"
              onChange={(e) => setPass1(e.target.value)}
              border={"1px solid #00713D"}
            />
          </Box>

          <Flex
            w={"100%"}
            justifyContent={"space-around"}
            mt={"40px"}
            gap={"20px"}
          >
            <Box>
              <Button
                isDisabled={!Name || !User || !Pass || !Email}
                onClick={handleSubmit}
                inlineSize={"100%"}
                colorScheme={"green"}
                size={"md"}
                isLoading={Looad}
              >
                Cadastrar
              </Button>

              <FormLabel
                color={"#00713D"}
                fontFamily={"roboto"}
                fontSize={"16px"}
              >
                Ao clickar em Cadastrar você concorda com os {""}
                <Link>Termos de Uso </Link>e {""}
                <Link> Politica de Privacidade </Link>
              </FormLabel>
            </Box>
          </Flex>
        </Flex>
      </FormControl>
    </>
  );
};
