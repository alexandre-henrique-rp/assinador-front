import { ReactNode } from "react"
import { Box } from "@chakra-ui/react";

interface PublicRouterProps {
  children: ReactNode
}

export default async function PublicRouter({ children }: PublicRouterProps) {

  return (
    <>
      <Box h={'100vh'} w={'100vw'}>
        {children}
      </Box>
    </>
  )
}