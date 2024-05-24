"use client";

import {
  Avatar,
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  VStack,
  VisuallyHidden,
  chakra,
  useDisclosure,
} from "@chakra-ui/react";
import {
  AiFillBell,
  AiFillProduct,
  AiFillSignature,
  AiOutlineMenu,
} from "react-icons/ai";
import { Logologin } from "../logo ";
import { IoDocumentLockOutline } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { TbHelpTriangle } from "react-icons/tb";
import { signOut } from "next-auth/react";

export const Header = () => {
  const bg = "#CDCDCD";
  const mobileNav = useDisclosure();

  return (
    <>
      <chakra.header
        bg={bg}
        w="full"
        // px={{
        //   base: 2,
        //   sm: 4,
        // }}
        py={4}
        // shadow="md"
      >
        <Flex
          w={"full"}
          h="full"
          alignItems="center"
          justifyContent="space-evenly"
          mx="auto"
        >
          <Box display={{ base: "block", md: "none" }}>
            <VStack display="flex" spacing={3} alignItems="center">
              <Box
                display={{
                  base: "inline-flex",
                  md: "none",
                }}
              >
                <IconButton
                  display={{
                    base: "flex",
                    md: "none",
                  }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="gray.800"
                  _dark={{
                    color: "inherit",
                  }}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />
                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <CloseButton
                    aria-label="Close menu"
                    justifySelf="self-start"
                    onClick={mobileNav.onClose}
                  />
                  <Button w="full" variant="ghost" leftIcon={<AiFillProduct />}>
                    Painel
                  </Button>
                  <Button
                    w="full"
                    variant="ghost"
                    leftIcon={<AiFillSignature />}
                  >
                    Assinar
                  </Button>
                  <Button
                    w="full"
                    variant="ghost"
                    leftIcon={<IoDocumentLockOutline />}
                  >
                    Documentos e Pastas
                  </Button>

                  <Button w="full" variant="ghost" leftIcon={<MdVerified />}>
                    Verificador
                  </Button>

                  <Button
                    w="full"
                    variant="ghost"
                    leftIcon={<TbHelpTriangle />}
                  >
                    Ajuda
                  </Button>
                </VStack>
              </Box>
            </VStack>
          </Box>

          <chakra.a href="/" title="Home" display="flex" alignItems="center">
            <Logologin
              url="/LOGO REDE BRASIL RP_A.svg"
              width={200}
              height={300}
            />
            <VisuallyHidden>Choc</VisuallyHidden>
          </chakra.a>

          <HStack
            spacing={15}
            display={{
              base: "none",
              md: "inline-flex",
            }}
          >
            <Button
              variant="ghost"
              colorScheme="green"
              leftIcon={<AiFillProduct />}
              size="sm"
            >
              Painel
            </Button>

            <Button
              variant="ghost"
              colorScheme="green"
              leftIcon={<AiFillSignature />}
              size="sm"
            >
              Assinar
            </Button>

            <Button
              variant="ghost"
              colorScheme="green"
              leftIcon={<IoDocumentLockOutline />}
              size="sm"
            >
              Documentos e Pastas
            </Button>

            <Button
              variant="ghost"
              colorScheme="green"
              leftIcon={<MdVerified />}
              size="sm"
            >
              Verificador
            </Button>

            <Button
              variant="ghost"
              colorScheme="green"
              leftIcon={<TbHelpTriangle />}
              size="sm"
            >
              Ajuda
            </Button>
          </HStack>

          <HStack
            spacing={3}
            display={mobileNav.isOpen ? "none" : "flex"}
            alignItems="center"
          >
            <AiFillBell />
          <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Editar Perfil</MenuItem>
                <MenuDivider />
                <MenuItem onClick={() => signOut()}>Sair</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Flex>
      </chakra.header>
    </>
  );
};
