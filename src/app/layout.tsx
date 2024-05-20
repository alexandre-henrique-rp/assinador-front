import type { Metadata } from "next";
import { fonts } from './fonts'
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Assinador Front",
  description: "Assinador de documentos online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={fonts.rubik.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
