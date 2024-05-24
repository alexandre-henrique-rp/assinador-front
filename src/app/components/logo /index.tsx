"use client";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

interface LogoUrlProps {
  url: string;
  width: number;
  height: number;
}

export const Logologin = ({ url, width, height }: LogoUrlProps) => {
  const urlstring = url;
  const widthstring = width;
  const heightstring = height;
  return (
    <>
      <Box
        onClick={() => (window.location.href = "https://redebrasilrp.com.br/")}
        cursor={"pointer"}
      >
        <Image
          src={urlstring}
          alt="Vercel Logo"
          width={widthstring}
          height={heightstring}
          priority
        />
      </Box>
    </>
  );
};
