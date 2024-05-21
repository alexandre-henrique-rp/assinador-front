'use client'
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      sair <button style={{ cursor: "pointer", background: "red" , color: "white", padding: "5px", borderRadius: "5px" }} onClick={() => signOut()}>Logout</button>
    </main>
  );
}
