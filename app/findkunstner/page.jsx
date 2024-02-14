"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

const ArtistChecker = () => {
  const session = useSession();
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    async function getArtists() {
      const response = await fetch("https://api.spotify.com/v1/me/following", {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      });
        const data = await response.json();
        setArtists(data.artists.items);
    }
    getArtists();
  }, [session]);

  return (
    <div>
      <h1>Find kunstner</h1>
      <p>Her kan du finde en kunstner</p>
      {/* <button onClick={getArtists}>Tryk her</button> */}

      <p>{JSON.stringify(session.data)}</p>
    </div>
  );
};

export default ArtistChecker;
