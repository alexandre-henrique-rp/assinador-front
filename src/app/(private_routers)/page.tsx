import { Flex } from "@chakra-ui/react";
import PendenteComponent from "./Home/_components/pendenteComponent";
import AnaliseComponent from "./Home/_components/AnaliseComponent/Index";
import FinalizadosComponents from "./Home/_components/finalizadosComponent";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import EventosComponent from "./Home/_components/EventosComponent";
import Dropzone from "./Home/_components/dropzone";

interface UserProps {
    id: number | null | undefined;
    name: string | null | undefined;
    email: string | null | undefined;
    blocked: boolean | null | undefined;
    username: string | null | undefined;
    whatsapp: string | null | undefined;
    uuid: string | null | undefined;
}

export default async function HomePage() {
    const session = await getServerSession(nextAuthOptions);
    const user: any = session?.user;

    // if (!user) redirect("/login");

    const token: any = process.env.NEXT_API_TOKEN;
    const url: any = process.env.NEXT_PUBLIC_STRAPI_API_URL;

    const response = await fetch(`${url}/users/${user?.id}?populate=%2A`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        cache: "no-store",
    });
    const retorno = await response.json();
    console.log("🚀 ~ HomePage ~ retorno:", retorno);

    //   const handleFilesDropped = (files: any) => {
    //       for (const file of files) {
    //           console.log("Arquivo:", file.name);
    //           // Aqui você pode fazer o que quiser com os arquivos, por exemplo, enviá-los para um servidor
    //       }
    //   };

    return (
        // [pendentes, analise, finalizados]
        <Flex
            w={"100%"}
            h={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Flex
                flexDir={"column"}
                justifyContent={"space-between"}
                h={"100%"}
                w={"50%"}
                p={"50px"}
            >
                <Flex
                    w={"100%"}
                    h={"20%"}
                    alignItems={"center"}
                    justifyContent={"space-evenly"}
                    gap={"15px"}
                >
                    <PendenteComponent />
                    <AnaliseComponent />
                    <FinalizadosComponents />
                </Flex>

                <Flex
                    h={"70%"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    w={"100%"}
                >
                    <EventosComponent />
                </Flex>
            </Flex>
            <Flex
                h={"70%"}
                w={"40%"}
                borderColor={"#00713D"}
                borderWidth={"2px"}
                borderStyle="dashed"
                borderRadius={"15px"}
                justifyContent={"center"}
                flexDir={"column"}
                alignItems={"center"}
            >
                <Dropzone />
            </Flex>
        </Flex>
    );
}
