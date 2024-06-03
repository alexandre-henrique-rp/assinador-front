
import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CardLyoutProps {
    children: ReactNode;
}

export default function CardLyout({ children }: CardLyoutProps) {
    return (
        <>
            <Flex w={"100%"} p={4} bg={"blackAlpha.400"} borderRadius={"15px"}  gap={"10px"} flexWrap={"wrap"} justifyContent={"left"} alignItems={"left"}>
               {children}
            </Flex>
        </>
    );
}
