
import { Component } from "@/components/component/component";
import { Signin } from "@/components/component/signin";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Signin/>
    </main>
  );
}
