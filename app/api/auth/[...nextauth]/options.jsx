import { LOGIN_URL } from "@/app/utils/spotify";
import { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

// async function refreshAccessToken(token) {
//   try {
//     const params = new URLSearchParam();
//     params.append("grant_type", "refresh_token");
//     params.append("refresh_token", token.refreshToken);
//     const response = await fetch("https://accounts.spotify.com/api/token", {
//       method: "POST",
//       headers: {
//         "content-type": "application/x-www-form-urlencoded",
//         Authorization:
//           "Basic " +
//           new Buffer.from(
//             process.env.NEXT_PUBLIC_CLIENT_ID +
//               ":" +
//               process.env.NEXT_PUBLIC_CLIENT_SECRET
//           ).toString("base64"),
//       },
//       body: params,
//     });
//     const data = await response.json();
//     return {
//       accessToken: data.access_token,
//       refreshToken: data.refresh_token ?? token.refreshToken,
//       accessTokenExpires: Date.now() + data.expires_in * 1000,
//     };
//   } catch (error) {
//     console.log(error);

//     return {
//       ...token,
//       error: "RefreshAccessTokenError",
//     };
//   }
// }

async function refreshAccessToken(token) {
  const params = new URLSearchParam();
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", token.refreshToken);
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        new Buffer.from(
          process.env.NEXT_PUBLIC_CLIENT_ID +
            ":" +
            process.env.NEXT_PUBLIC_CLIENT_SECRET
        ).toString("base64"),
    },
    body: params,
  });
  const data = await response.json();
  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token ?? token.refreshToken,
    accessTokenExpires: Date.now() + data.expires_in * 1000,
  };
}

export const options = {
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pagees: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      //initial sign in
      if (account && user) {
        return {
          ...token,
          accessToken: account.accessToken,
          refreshToken: account.refreshToken,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000, //convert to ms
        };
      }

      // Return previous token if the access token has not expired yet
      if (Date.now() < token.accessTokenExpires) {
        return token;
      }

      // Access token has expired, try to update it
      return await refreshAccessToken(token);
    },
  },
};

export default options;
