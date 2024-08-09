import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../components/header";
import FooterComponent from "../components/Footer";
import { getServerSession } from "next-auth";
import { auth } from "@/lib/auth_config";

export default async function Privaterouter({
    children,
}: {
    children: React.ReactNode;
}) {
    
    // const { data: session }: any = useSession();
    const session = await getServerSession(auth);
    const id = session?.user?.id;

    const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/users/${id}?populate=%2A`;
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

    const req = await fetch(url, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        cache: "no-store",
    });
    const user = await req.json();

    const AvatarIcon = user?.avatar && user?.avatar;
    const nomeAvatar = user?.nome && user?.nome;

    
    return (
        <>
            <Flex
                flexDir={"column"}
                justifyContent={"space-between"}
                h={"100dvh"}
                w={"100vw"}
                bg="#F8F8F8"
                overflow={"auto"}
            >
                {/* header */}
                <Box h={{ base: "13%", lg: "10%" }} w={"100%"}>
                    <Header Icon={AvatarIcon} Title={nomeAvatar} />
                </Box>

                <Box
                    h={"83%"}
                    w={"100%"}
                    p={6}
                    overflowY={{ base: "auto", lg: "hidden" }}
                >
                    {children}
                </Box>

                {/* rodapé */}

                <Box h={"7%"} w={"100%"}>
                    <FooterComponent />
                </Box>
            </Flex>
        </>
    );
}
