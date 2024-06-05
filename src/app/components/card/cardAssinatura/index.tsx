import { Flex, Text } from "@chakra-ui/react";

interface CardNameProps {
    id: number;
}
export default async function CardAssinatura(Dados: CardNameProps) {
    const { id } = Dados;

    const request = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/docs/${id}?populate=*`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
                "Content-Type": "application/json",
            },
            cache: "no-store",
        }
    );

    const response = await request.json();
    const TotalSubs = response.data.attributes.sub_clientes;
  
    return (
        <Flex gap={"0.5rem"}>
            <Text fontWeight={"bold"}>Assinatura:</Text>
            <Text>{!TotalSubs ? 0 : TotalSubs.data.length}</Text>
        </Flex>
    );
}
