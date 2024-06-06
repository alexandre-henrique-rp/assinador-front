"use client";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Flex,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
} from "@chakra-ui/react";
import { FormEventHandler, useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { mask, unMask } from "remask";

interface InProps {
    Data: any;
}

export const AddSubProps = (Props: { Data: any }) => {
    const [Dados, setDados] = useState<any>([]);
    const [Nome, setNome] = useState<string>("");
    const [Whatsapp, setWhatsapp] = useState<string>("");
    const [WhatsappMasck, setWhatsappMasck] = useState<string>("");
    const [Email, setEmail] = useState<string>("");

    const AddAssinantes = () => {
        if (Nome && WhatsappMasck && Email) {
            setDados([
                ...Dados,
                { nome: Nome, whatsapp: Whatsapp, email: Email },
            ]);
            Props.Data([
                ...Dados,
                { nome: Nome, whatsapp: Whatsapp, email: Email },
            ]);
            setNome("");
            setWhatsapp("");
            setWhatsappMasck("");
            setEmail("");
        }
    };

    const MascaraWhatsapp = (e: { target: { value: any } }) => {
        const valor = e.target.value;
        const valorLinpo = unMask(valor);
        const masked = mask(valorLinpo, ["(99) 9999-9999", "(99) 9 9999-9999"]);
        setWhatsapp(valorLinpo);
        setWhatsappMasck(masked);
    };

    return (
        <>
            <Box>
                <Text fontWeight={"bold"}>Adicionar Assinante</Text>
                <InputGroup>
                    <InputLeftElement pointerEvents="none">
                        <Icon as={FaUserEdit} color="gray.400" />
                    </InputLeftElement>
                    <Input
                        type="text"
                        placeholder="Nome"
                        borderColor={"gray.400"}
                        onChange={(e) => setNome(e.target.value)}
                        value={Nome}
                    />
                </InputGroup>
                <Flex gap={4} py={4}>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none">
                            <PhoneIcon color="gray.400" />
                        </InputLeftElement>
                        <Input
                            type="tel"
                            placeholder="Whatsapp"
                            borderColor={"gray.400"}
                            onChange={MascaraWhatsapp}
                            value={WhatsappMasck}
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none">
                            <EmailIcon color="gray.400" />
                        </InputLeftElement>
                        <Input
                            type="email"
                            placeholder="email"
                            borderColor={"gray.400"}
                            onChange={(e) => setEmail(e.target.value)}
                            value={Email}
                        />
                    </InputGroup>
                </Flex>
                <Button
                    type="submit"
                    colorScheme="green"
                    w="100%"
                    size="lg"
                    onClick={AddAssinantes}
                >
                    Adicionar
                </Button>
            </Box>
            <Box h={"55%"} overflow={"auto"} w={"full"}>
                {!Dados && null}
                {Dados &&
                    Dados.map((item: any) => {
                        return (
                            <>
                                <Flex
                                    w={"100%"}
                                    gap={2}
                                    flexWrap={"wrap"}
                                    border={"1px solid #00713D"}
                                    p={2}
                                    borderRadius={6}
                                    lineHeight={"initial"}
                                >
                                    <Text p={"2px"} fontSize={"sm"}>
                                        Nome: {item.nome}
                                    </Text>
                                    <Text p={"2px"} fontSize={"sm"}>
                                        Whatsapp: {item.whatsapp}
                                    </Text>
                                    <Text p={"2px"} fontSize={"sm"}>
                                        Email: {item.email}
                                    </Text>
                                    <Text p={"2px"} fontSize={"sm"}>
                                        Data de Envio: {item.date}
                                    </Text>
                                </Flex>
                            </>
                        );
                    })}
            </Box>
        </>
    );
};
