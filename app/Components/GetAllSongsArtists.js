import React from "react";

const GetAllSongsArtists = async ({ session }) => {
  const dummyList = ["Linkin Park", "Eminem", "Drake", "Kanye West"];

  console.log(session);

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

  const findCommonElements = (dummyList, allArtists) => {
    let dummyListSet = new Set(dummyList);
    let allArtistsSet = new Set(allArtists);

    // Initialize an empty array to store common elements
    let commonElements = [];

    for (let item of dummyListSet) {
      if (allArtistsSet.has(item)) {
        commonElements.push(item);
      }
    }

    return commonElements;
  };

  // if (allArtists !== null) {
  //   let commonElementsList = findCommonElements(bigList1, bigList2);
  //   console.log(commonElementsList);
  // }

  return (
    <div>
      <h1>Artists</h1>
      <ul>
        {dummyList.map((artist) => (
          <li key={artist}>{artist}</li>
        ))}
      </ul>
    </div>
  );
};

export default GetAllSongsArtists;
