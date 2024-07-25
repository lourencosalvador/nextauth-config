'use client'
import { signOut } from "next-auth/react";

export default function ButtonLogout(){
    return(
        <button
    onClick={() => signOut()}
    className="p-[10px] rounded-lg bg-zinc-900 text-slate-100 text-md font-semibold"
  > Logout 
</button>
    )
}