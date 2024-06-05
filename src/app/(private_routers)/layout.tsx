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
              w={"100vw"}
              bg="#F8F8F8"
              overflow={"auto"}
          >
              {/* header */}
              <Box h={"10%"} w={"100%"}>
                  <Header />
              </Box>

              <Box h={"full"} w={"100%"} p={4}>
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
