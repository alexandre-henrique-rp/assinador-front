import type { Metadata } from "next";
import { fonts } from "./fonts";
import { Providers } from "./providers";
import { ReactNode } from "react";
import NextAuSessionProvider from "./components/providers/session_provaiders";
import PublicPageProvider from "./components/providers/publicPage";


export const metadata: Metadata = {
  title: "Assinador Front",
  description: "Assinador de documentos online"
};

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="pt-br"
      style={{ fontSize: "0.9rem", width: "100vw", height: "100vh" }}
    >
      <NextAuSessionProvider>
        <PublicPageProvider>
          <body className={fonts.rubik.variable}>
            <Providers>{children}</Providers>
          </body>
        </PublicPageProvider>
      </NextAuSessionProvider>
    </html>
  );
}
