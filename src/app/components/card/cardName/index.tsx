import { Flex, Text } from "@chakra-ui/react";

interface CardNameProps {
    nome: string;
}
export default function CardName(Dados: CardNameProps) {
    return (
        <Flex gap={"0.5rem"}>
            <Text fontWeight={"bold"}>Arquivo:</Text>
            <Text>{Dados.nome? Dados.nome : ""}</Text>
        </Flex>
    );
}
