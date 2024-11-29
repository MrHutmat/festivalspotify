import Image from "next/image";
import Hero from "./Components/Hero";
import { Login, LogOut } from "./Components/Login";
import AuthCheck from "./Components/AuthCheck";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Discover Your Festival Matches
        </h1>
        <p className="text-lg mb-6">
          Login with Spotify to find your favorite festival artists.
        </p>

        <AuthCheck>
          <LogOut />
        </AuthCheck>
      </div>
    </div>
  );
}
