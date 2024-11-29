"use client";

import { useSession } from "next-auth/react";
import { Login } from "./Login";

export default function AuthCheck({ children }) {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return <>{children}</>;
  } else {
    return <Login />;
  }
}
