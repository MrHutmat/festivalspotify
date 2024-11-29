"use client";

import React from "react";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";

export const Login = () => {
  const { data: session, status } = useSession();

  return (
    // <button
    //   onClick={() =>
    //     signIn("spotify", {
    //       callbackUrl: "https://festivalspotify.vercel.app/findkunstner",
    //     })
    //   }
    // >
    //   Login in
    // </button>

    <button
      onClick={() =>
        signIn("spotify", {
          callbackUrl: process.env.NEXT_PUBLIC_SPOTIFY_CALLBACK_URL,
        })
      }
      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-xl"
    >
      Login with Spotify
    </button>
  );
};

export const LogOutHeader = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Festival Matcher</h1>
      <button
        onClick={() => signOut()}
        className="bg-red-500 px-4 py-2 rounded"
      >
        Logout
      </button>
    </>
  );
};

export const LogOut = () => {
  return (
    <div className="flex justify-between">
      <Link
        className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-xl"
        href={`/findkunstner`}
      >
        Take me there!
      </Link>
      <button
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg"
        onClick={() => signOut()}
      >
        Log out
      </button>
    </div>
  );
};
