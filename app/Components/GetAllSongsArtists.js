import React from "react";

const GetAllSongsArtists = async (session) => {
  if (session && session.accessToken) {
    let allArtists = [];
    let nextUrl = "https://api.spotify.com/v1/me/tracks?limit=50&offset=0";

    // Continue fetching tracks until there are no more
    while (nextUrl) {
      const response = await fetch(nextUrl, {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(
          `Failed to fetch tracks: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      const names = data.items.flatMap((artist) =>
        artist.track.artists.map((artist) => artist.name)
      );

      allArtists = [...new Set([...allArtists, ...names])];
      nextUrl = data.next;
    }

    console.log(allArtists);
    return allArtists;
  }
};

export default GetAllSongsArtists;
