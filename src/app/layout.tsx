import type { Metadata } from "next";
import { fonts } from "./fonts";
import { Providers } from "./providers";
import { ReactNode } from "react";
import NextAuSessionProvider from "./components/providers/session_provaiders";
import { getServerSession } from "next-auth";
import { auth } from "@/lib/auth_config";
import { signOut } from "next-auth/react";


export const metadata: Metadata = {
    title: "Assinador Front",
    description: "Assinador de documentos online",
};

interface RootLayoutProps {
    children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
    const session = await getServerSession(auth);
    const expiration = session ? session.expiration : 0;
    const expired = Date.now() > expiration * 1000;
   
    if (expired) {
        signOut();
    }
    
    return (
        <html
            lang="pt-br"
            style={{
                fontSize: "0.8rem",
                width: "100vw important",
                height: "100vh important",
            }}
        >
            <NextAuSessionProvider>
                <body className={fonts.rubik.variable}>
                    <Providers>{children}</Providers>
                </body>
            </NextAuSessionProvider>
        </html>
    );
}
