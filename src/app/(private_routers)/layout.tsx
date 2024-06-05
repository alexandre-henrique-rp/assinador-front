import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../components/header";

import FooterComponent from "../components/Footer";


export default function Privaterouter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Flex
        flexDir={"column"}
        justifyContent={"space-between"}
        h={"100vh"}
        w={"100%"}
        bg="#F8F8F8"
        overflow={"auto"}
      >
        {/* header */}
        <Box>
          <Header />
        </Box>

        <Box>{children}</Box>

        {/* rodapé */}

        <Box>

          <FooterComponent />

        </Box>
      </Flex>
    </>
  );
}
