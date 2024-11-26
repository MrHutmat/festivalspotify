"use client";

import React from "react";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";

export const Login = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return <Link href={`/findkunstner`}></Link>;
  }

  return (
    <button
      onClick={() =>
        signIn("spotify", {
          callbackUrl: "https://festivalspotify.vercel.app/findkunstner",
        })
      }
    >
      Login in
    </button>
  );
};

export const LogOut = () => {
  return <button onClick={() => signOut()}>Log out</button>;
};
