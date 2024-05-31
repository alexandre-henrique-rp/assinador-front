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

    // if (!session) {
    //      if (PathName === "/") {
    //          router.push("/login");
    //      } else if (PathName === "/login") {
    //         return <>{children}</>;
    //     } else if (PathName === "/register") {
    //         return <>{children}</>;
    //     } else if (PathName === "/reset-password") {
    //         return <>{children}</>;
    //     } else if (PathName === `/reset-password/${uuid}`) {
    //         return <>{children}</>;
    //     } else if (PathName === "/termos/uso") {
    //         return <>{children}</>;
    //     } else if (PathName === "/termos/privacidade") {
    //         return <>{children}</>;
    //     }
    // }
    // if (session) {
    //     if (PathName === "/login") {
    //         router.push("/");
    //     }
    // }

    return <>{children}</>;
}
