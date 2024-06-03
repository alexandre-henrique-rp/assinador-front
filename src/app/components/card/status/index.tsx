import { Flex, Text } from "@chakra-ui/react";


interface CardStatusProps {
    status: boolean;
}
export default function CardStatus(Dados: CardStatusProps) {

    return (
        <Flex gap={"0.5rem"}>
            <Text fontWeight={"bold"}>Status:</Text>
            <Text>{Dados.status === false ? "Em andamento" : "Comcluido"}</Text>
        </Flex>
    )
}