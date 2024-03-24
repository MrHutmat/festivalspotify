// import { getServerSession } from "next-auth/next";
// import { useSession } from "next-auth/react";

export const createPlaylistAndAddSibgs = async (session, festival) => {
  const selectedFestival = festival;


// Create a new playlist




// Add songs to the playlist

      async function getAllsongs() {
    const response = await fetch(
      "https://api.spotify.com/v1/me/tracks?limit=50",
    {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    }
    );





  const response = await fetch(nextUrl, {
    headers: {
      Authorization: `Bearer ${session.accessToken}`,
    },
  });
  const data = await response.json(); // Assuming the response is JSON

  allTracks.push(...data.items);

  // Extract artists from the current batch of tracks
  const names = data.items.flatMap((artist) =>
    artist.track.artists.map((artist) => artist.name)
  );

  // Add unique artists to the list
  allArtists = [...new Set([...allArtists, ...names])];

  // Update nextUrl for pagination
  nextUrl = data.next;

  console.log(allArtists);

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
    console.log(commonElements);

    return commonElements;
  };
  console.log(allTracks);

  const commonElements = findCommonElements(dummyList, allArtists);

  return { commonElements, allTracks };
};
