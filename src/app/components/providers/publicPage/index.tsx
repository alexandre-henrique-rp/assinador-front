"use client";

import { useSession } from "next-auth/react";
import { redirect, usePathname, useRouter } from "next/navigation";

export default function PublicPageProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    // const { data: session } = useSession();
    // const PathName = usePathname();
    // const uuid = PathName.split("/")[2];
    // const router = useRouter();


    // if (PathName === "/login" && !session) {
    //     return <>{children}</>;
    // } else if (PathName === "/register" && !session) {
    //     return <>{children}</>;
    // } else if (PathName === "/reset-password" && !session) {
    //     return <>{children}</>;
    // } else if (PathName === `/reset-password/${uuid}` && !session) {
    //     return <>{children}</>;
    // } else if (PathName === "/termos/uso" && !session) {
    //     return <>{children}</>;
    // } else if (PathName === "/termos/privacidade" && !session) {
    //     return <>{children}</>;
    // } else if (
    //     (!session && PathName !== "/register") ||
    //     (!session && PathName !== "/reset-password") ||
    //     (!session && PathName !== `/reset-password/${uuid}`) ||
    //     (!session && PathName !== "/termos/uso") ||
    //     (!session && PathName !== "/termos/privacidade")
    // ) {
    //     router.push("/login");
    // } else if (!!session) {
    //     router.push("/");

    // }

    return <>{children}</>;
}
