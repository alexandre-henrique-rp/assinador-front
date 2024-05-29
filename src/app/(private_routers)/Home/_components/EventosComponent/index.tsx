"use client";

import { Box, Divider, Flex, Link, Text } from "@chakra-ui/react";

export default function EventosComponent() {
    return (
        <Flex
            shadow={"2xl"}
            borderRadius={"15px"}
            w={{ base: "100%", md: "97%" }}
            bg={"white"}
            p={"30px"}
            flexDir={"column"}
            justifyContent={"left"}
            alignItems={"left"}
        >
            TEXTO SUPERIOR ESQUERDO
            <Text
                w={"100%"}
                fontSize={"20px"}
                textAlign={"left"}
                color="#00713D"
                alignItems={"left"}
                fontWeight={"bold"}
            >
                Eventos Recentes
                <Divider borderColor={"#00713D"} />
            </Text>

            {/* LOCAL AONDE VAI FICAR OS ARQUIVOS DO CLIENTE */}
            <Box w={"100%"} h={"100%"} p={"140px"}></Box>

            {/* TEXTO INFERIOR DIREITO */}
            <Text
                w={"100%"}
                fontSize={"20px"}
                textAlign={"right"}
                color="#00713D"
                alignItems={"right"}
                fontWeight={"Thin"}
            >
                <Divider borderColor={"#00713D"} />
                <Link pt={"10px"}> Ver lista completa </Link>
            </Text>
        </Flex>
    );
}
