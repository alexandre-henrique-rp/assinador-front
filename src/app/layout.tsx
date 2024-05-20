import type { Metadata } from "next";
import { fonts } from "./fonts";
import { Providers } from "./providers";
import { ReactNode } from "react";
import { redirect, usePathname } from "next/navigation";
import NextAuSessionProvider from "./componemts/providers/session_provaiders";
import { useSession } from "next-auth/react";
import PublicPageProvider from "./componemts/providers/publicPage";

export const metadata: Metadata = {
  title: "Assinador Front",
  description: "Assinador de documentos online",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="pt-br">
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
