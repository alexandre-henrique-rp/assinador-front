"use client";
import { CheckCircleIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Box,
    Button,
    Checkbox,
    Flex,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    chakra,
    Text,
} from "@chakra-ui/react";
import { FormEventHandler, useEffect, useState } from "react";
import { FaPenNib, FaUserEdit } from "react-icons/fa";
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
    const [Type, setType] = useState<string>("");

    const AddAssinantes = () => {
        if (Nome && WhatsappMasck && Email) {
            setDados([
                ...Dados,
                { nome: Nome, whatsapp: Whatsapp, email: Email, tipo: Type },
            ]);
            Props.Data([
                ...Dados,
                { nome: Nome, whatsapp: Whatsapp, email: Email, tipo: Type },
            ]);
            setNome("");
            setWhatsapp("");
            setWhatsappMasck("");
            setEmail("");
            setType("");
        }
    };

    const MascaraWhatsapp = (e: { target: { value: any } }) => {
        const valor = e.target.value;
        const valorLimpo = unMask(valor);
        const masked = mask(valorLimpo, ["(99) 9999-9999", "(99) 9 9999-9999"]);
        setWhatsapp(valorLimpo);
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
                <InputGroup>
                    <Flex gap={2} alignItems={"center"} pt={3}>
                        <Box color="gray.400">
                            <FaPenNib />
                        </Box>
                        <chakra.label color={"gray.400"}>
                            Assinante
                        </chakra.label>
                        <Checkbox />
                    </Flex>

                   
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
                <Alert status="info" variant="left-accent" mt={2}>
                    <AlertIcon />
                    <Box>
                        <AlertTitle>Atenção!</AlertTitle>
                        <AlertDescription>
                            Todas as alterações so serão efetuadas depois de
                            salvar.
                        </AlertDescription>
                    </Box>
                </Alert>
            </Box>
            <Box h={"66%"} overflow={"auto"} w={"full"}>
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
