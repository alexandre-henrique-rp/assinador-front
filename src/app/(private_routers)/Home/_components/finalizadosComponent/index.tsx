"use client";

import { Box, Flex, Text } from "@chakra-ui/react";

export default function FinalizadosComponents() {
    return (
        <Flex
            shadow={"2xl"}
            borderRadius={"15px"}
            w={"33%"}
            bg={"white"}
            p={"30px"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Box w={"100%"}>
                <Text
                    fontSize={"20px"}
                    textAlign={"center"}
                    color="#00713D"
                    alignItems={"center"}
                    fontWeight={"bold"}
                >
                    FINALIZADOS
                </Text>

                <Text
                    fontSize={"40px"}
                    textAlign={"center"}
                    color="#00713D"
                    alignItems={"center"}
                    fontWeight={"thin"}
                >
                    0
                </Text>
            </Box>
        </Flex>
    );
}
