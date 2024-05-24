import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../components/header";

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
        w={"100vw"}
        bg="#F8F8F8"
      >
        {/* header */}

        <Box>
          <Header />
        </Box>

        <Box>{children}</Box>

        {/* rodapé */}

        <Box></Box>
      </Flex>
    </>
  );
}
