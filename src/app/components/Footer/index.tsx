"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { FaPhoneVolume } from "react-icons/fa";

export default function FooterComponent() {
  const bg = "#00713D";

  return (
    <Flex
      w={"100%"}
      h={"100%"}
      bg={bg}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      gap={"5px"}
    >

<Flex w={"33"} h={"100%"} gap={"1rem"} alignItems={"center"}>
        <Text color={"white"}> Precisa de Ajuda?</Text>

        <Button variant="link" color={"white"} leftIcon={<FaPhoneVolume />} size="sm">
        (16) 3325-4134
        </Button>
      </Flex>


      <Flex gap={"1rem"}>

      <Button variant="link" color={"white"} size="sm">
          Termos de Uso
        </Button>
        <Button variant="link" color={"white"} size="sm">
          Documentação
        </Button>
        <Button variant="link" color={"white"} size="sm">
          Politica de Privacidade
        </Button>

      </Flex>

      <Flex w={"33"} h={"100%"} gap={"1rem"} alignItems={"center"}>

      <Text color={"white"}> Copyright © 2024 Rede BrasilRP </Text>

      </Flex>
    </Flex>
  );
}
