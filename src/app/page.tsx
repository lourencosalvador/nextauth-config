'use client'

import { signIn } from "next-auth/react";

export default function Home() {
  
  return (
    <main className="flex justify-center items-center h-screen w-full">
         <button 
         onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
         className="p-[10px] rounded-lg bg-zinc-900 text-slate-100 text-md font-semibold"
         >Login Github
         </button>
    </main>  
  );
}
