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
  const uuid = PathName.split("/")[2];
  const router = useRouter()

  if (PathName === "/login" && !session) {
    return <>{children}</>;
  }
  if (PathName === "/register" && !session) {
    return <>{children}</>;
  }
  if (PathName === "/reset-password" && !session) {
    return <>{children}</>;
  }
  if (PathName === `/reset-password/${uuid}` && !session) {
    return <>{children}</>;
  }
  if (PathName === "/termos/uso" && !session) {
    return <>{children}</>;
  }
  if (PathName === "/termos/privacidade" && !session) {
    return <>{children}</>;
  }
  if (!!session) {
    router.push("/");
  }
  if (
    (PathName !== "/login" && !session) ||
    (PathName !== "/register" && !session) ||
    (PathName !== "/reset-password" && !session) ||
    (PathName !== `/reset-password/${uuid}` && !session) || 
    (PathName !== "/termos/uso" && !session) || 
    (PathName !== "/termos/privacidade" && !session)
  ) {
    router.push("/login");
  }

  return <>{children}</>;
}


