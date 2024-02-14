"use client";

import React from "react";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="bg-red-600">
      <h1>Login</h1>
      <div>
        <button
          onClick={() =>
            signIn("spotify", {
              callbackUrl: "http://localhost:3000/findkunstner",
            })
          }
        >
          Login in
        </button>
      </div>
    </div>
  );
};

export default Login;
