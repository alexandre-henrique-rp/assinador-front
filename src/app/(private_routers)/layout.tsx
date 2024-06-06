"use client";
import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../components/header";
import FooterComponent from "../components/Footer";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";


export default function Privaterouter({
  children,
}: {
  children: React.ReactNode;
}) {
     const { data: session }: any = useSession();
     const id = session?.user?.id;
     const [user, setUser] = useState<any>(null);

     useEffect(() => {
         (async () => {
             const res = await fetch(`/api/User/get/${id}`);
             const data = await res.json();
             setUser(data);
         })();
     }, [id]);

     const AvatarIcon =
         user?.avatar?.url && `http://127.0.0.1:1337${user?.avatar?.url}`;
     const nomeAvatar = user?.nome && user?.nome;
  return (
      <>
          <Flex
              flexDir={"column"}
              justifyContent={"space-between"}
              h={"100vh"}
              w={"100vw"}
              bg="#F8F8F8"
              overflow={"auto"}
          >
              {/* header */}
              <Box h={"10%"} w={"100%"}>
                  <Header Icon={AvatarIcon} Title={nomeAvatar} />
              </Box>

              <Box h={"83%"} w={"100%"} p={8}>
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
