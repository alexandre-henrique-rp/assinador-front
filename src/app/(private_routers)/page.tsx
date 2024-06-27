"use client";

import { Box, Flex, Icon, Stack } from "@chakra-ui/react";
import PendenteComponent from "./Home/_components/pendenteComponent";
import AnaliseComponent from "./Home/_components/AnaliseComponent/Index";
import FinalizadosComponents from "./Home/_components/finalizadosComponent";
import EventosComponent from "./Home/_components/EventosComponent";

import Dropzone from "./Home/_components/dropzone";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface UserProps {
    id: number | null | undefined;
    name: string | null | undefined;
    email: string | null | undefined;
    blocked: boolean | null | undefined;
    username: string | null | undefined;
    whatsapp: string | null | undefined;
    uuid: string | null | undefined;
}

async function fetcher(user: UserProps) {
    const token: any = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

    const url: any = process.env.NEXT_PUBLIC_STRAPI_API_URL;

    const response = await fetch(`${url}/users/${user?.id}?populate=*`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        cache: "no-store",
    });
    return await response.json();
}

export default function HomePage() {
    const {data: session} = useSession();
    const user: any = session?.user;

    const [Data, setData] = useState<any>();

    useEffect(() => {
        (async () => {
            const Response = await fetcher(user);
            setData(Response);
        })();
    }, [user]);
   
    

    const reloadProps = (e: any) => {
        const valor = e;
        if (valor == true) {
            (async () => {
                const Response = await fetcher(user);
                setData(Response);
            })();
        }
    };

    return (
        // [pendentes, analise, finalizados]
        <Flex
            w={"100%"}
            h={"100%"}
            justifyContent={{ lg: "center" }}
            alignItems={"center"}
            p={"20px"}
            flexDir={{ base: "column", lg: "row" }}
            gap={{ base: "20px", lg: "0px" }}
        >
            <Flex
                flexDir={"column"}
                justifyContent={{ lg: "space-between" }}
                h={"100%"}
                w={{ base: "100%", lg: "50%" }}
                p={{ lg: "50px" }}
                gap={{ base: "20px", lg: "0px" }}
            >
                <Flex
                    w={"100%"}
                    h={{ base: "43%", lg: "20%" }}
                    alignItems={"center"}
                    // justifyContent={"space-evenly"}
                    gap={"15px"}
                >
                    <PendenteComponent />
                    <AnaliseComponent />
                    <FinalizadosComponents />
                </Flex>

                <Flex
                    h={{ base: "50%", lg: "70%" }}
                    alignItems={"center"}
                    justifyContent={"center"}
                    w={"100%"}
                >
                    <EventosComponent docs={Data?.docs} />
                </Flex>
            </Flex>
            <Flex
                h={{ base: "100%", lg: "70%" }}
                m={6}
                w={{ base: "100%", lg: "40%" }}
                borderColor={"#00713D"}
                borderWidth={"2px"}
                borderStyle="dashed"
                borderRadius={"15px"}
                justifyContent={"center"}
                flexDir={"column"}
                alignItems={"center"}
            >
                <Dropzone reload={reloadProps} />
            </Flex>
        </Flex>
    );
}
