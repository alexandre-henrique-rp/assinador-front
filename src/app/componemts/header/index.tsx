"use cliente";

import {
  Avatar,
  Box,
  Button,
  Center,
  CloseButton,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  VStack,
} from "@chakra-ui/react";
import { Logologin } from "../logo ";

export const Header = () => {
  return (
    <Flex
      bg={"#CDCDCD"}
      justify={"space-evenly"}
      p={"20px"}
      alignItems={"center"}
    >
      <Menu>
        <MenuButton
          as={Button}
          rounded={"full"}
          variant={"link"}
          cursor={"pointer"}
          minW={0}
        >
          <Avatar
            size={"sm"}
            src={
              "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
            }
          />
        </MenuButton>
        <MenuList>
          <MenuItem> Painel </MenuItem>
          <MenuDivider />
          <MenuItem> Sair </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
