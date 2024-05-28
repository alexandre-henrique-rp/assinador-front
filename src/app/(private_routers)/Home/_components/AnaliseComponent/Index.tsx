"use client";

import { Box, Flex, Text } from "@chakra-ui/react";

export default function AnaliseComponent() {
    return (
        <Flex
            shadow={"2xl"}
            borderRadius={"15px"}
            w={"250px"}
            bg={"white"}
            p={"30px"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Box w={"100%"}>
                <Text
                    w={"50%%"}
                    fontSize={"20px"}
                    textAlign={"center"}
                    color="#00713D"
                    alignItems={"center"}
                    fontWeight={"bold"}
                >
                    ANALISE
                </Text>

                <Text
                    w={"50%%"}
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
