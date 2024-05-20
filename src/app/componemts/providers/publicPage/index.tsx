"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";


export default function PublicPageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  const PathName = usePathname();
  const router = useRouter()

  if (
    (PathName !== "/login" && !session) ||
    (PathName !== "/register" && !session) ||
    (PathName !== "/reset-password" && !session)
  ) {
    router.push("/login");
  }
  if (PathName === "/login" && !session) {
    return <>{children}</>;
  }
  if (PathName === "/register" && !session) {
    return <>{children}</>;
  }
  if (PathName === "/reset-password" && !session) {
    return <>{children}</>;
  }

  if (!!session) {
    router.push("/");
  }

  return <>{children}</>;
}


