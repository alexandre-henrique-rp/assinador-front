import type { Metadata } from "next";
import { fonts } from "./fonts";
import { Providers } from "./providers";
import { ReactNode } from "react";
import { redirect, usePathname } from "next/navigation";
import NextAuSessionProvider from "./componemts/providers/session_provaiders";
import { useSession } from "next-auth/react";
import PublicPageProvider from "./componemts/providers/publicPage";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "./api/auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: "Assinador Front",
  description: "Assinador de documentos online",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
    const session = await getServerSession(nextAuthOptions);

  const user = session?.user
  console.log(user)

  if (user) {
    redirect("/");
  }

  return (
    <html lang="pt-br"
    style={{fontSize:'0.9rem', width:'100vw', height:'100vh'}}>
      <body className={fonts.rubik.variable}>
        <Providers>
          <NextAuSessionProvider>
            <PublicPageProvider> {children}</PublicPageProvider>
          </NextAuSessionProvider>
        </Providers>
      </body>
    </html>
  );
}
