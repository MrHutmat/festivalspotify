"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";

export const Login = () => {
  const { data: session, status } = useSession();
  //console.log(status);

  if (status === "authenticated") {
    return (
      <Link href={`/findkunstner`}>
        <img src={session.user?.image} alt="" />
      {/* <Image
      width={32}
      height={32}
      src={session.user.image}
      alt="Profile Picture"
      /> */}
      </Link>
    )

  }

  return (
        <button
          onClick={() =>
            signIn("spotify", {
              callbackUrl: "http://localhost:3000/findkunstner",
            })
          }
        >
          Login in
        </button>
  );
};



export const LogOut = () => {
  return <button onClick={() => signOut()}>Log out</button>;
}
