"use client";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

interface LogoUrlProps {
  url: string;
}


export const Logologin = ({url}: LogoUrlProps) => {

  const urlstring=url
  return (
    <>
      <Box
        onClick={() => (window.location.href = "https://redebrasilrp.com.br/")}
        cursor={"pointer"}
      >
        <Image
          src={urlstring}
          alt="Vercel Logo"
          width={300}
          height={500}
          priority
        />
      </Box>
    </>
  );
};