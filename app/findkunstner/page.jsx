"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

const ArtistChecker = () => {
  const session = useSession();
  //const [artists, setArtists] = useState([]);

  useEffect(() => {
    async function getArtists() {
      const response = await fetch(
        "https://api.spotify.com/v1/me/following?type=artist",
        {
          headers: {
            Authorization: `Bearer ${session.data.accessToken}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      //  setArtists(data.artists.items);
    }
    getArtists();
  }, [session]);
  console.log(session);

  return (
    <div>
      <h1>Find kunstner</h1>
      <p>Her kan du finde en kunstner</p>
      {/* <button onClick={getArtists}>Tryk her</button> */}

      <p className="text-white">{JSON.stringify(session)}</p>
    </div>
  );
};

export default ArtistChecker;
