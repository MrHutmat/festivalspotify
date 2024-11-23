// import { getServerSession } from "next-auth/next";
// import { useSession } from "next-auth/react";

//THIS IS USED

export const allPlaylistSongs = async (session, bands, selectedPlaylist) => {
  //Maybe a switch statement for the different festivals here?
  //Importing the csv file with spotify artists artist id's?
  // Replace with your initial URL

  // Continue fetching tracks until there are no more

  const festivalArtists = bands;

  // call for the session

  // const session = await getServerSession();
  let allArtists = [];
  let allTracks = [];
  let nextUrl = `https://api.spotify.com/v1/playlists/${selectedPlaylist}/tracks?offset=0&limit=100`; // Replace with your initial URL

  // Continue fetching tracks until there are no more
  while (nextUrl) {
    // Fetch tracks data
    const response = await fetch(nextUrl, {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    });
    const data = await response.json(); // Assuming the response is JSON

    console.log(data);

    allTracks.push(...data.items);

    // Extract artists from the current batch of tracks
    // 23-11-2024 Changed "names" to "artistData"
    // So that I can add ID to the artist as well
    // artist.track.artists.map((artist) => artist.name
    const artistData = data.items.flatMap((artist) =>
      // artist.track.artists.map((artist) => artist.name

      artist.track.artists.map((artist) => ({
        id: artist.id,
        name: artist.name,
      }))
    );

    const uniqueArtists = [
      ...new Map(artistData.map((artist) => [artist.id, artist])).values(),
    ];

    // Add unique artists to the list
    // 23-11-2024 Changed names to artistData
    // allArtists = [...new Set([...allArtists, ...artistData])];

    allArtists = [
      ...new Map(
        [...allArtists, ...uniqueArtists].map((a) => [a.id, a])
      ).values(),
    ];

    // Update nextUrl for pagination
    nextUrl = data.next;
  }
  console.log(allArtists);

  const findCommonElements = (festivalArtists, allArtists) => {
    // Old way before ID was added to the artist, still need to import the csv file with the artist ID's.
    // let dummyListSet = new Set(dummyList);
    // let allArtistsSet = new Set(allArtists);

    // // Initialize an empty array to store common elements
    // let commonElements = [];

    // for (let item of dummyListSet) {
    //   if (allArtistsSet.has(item)) {
    //     commonElements.push(item);
    //   }
    // }
    // console.log(commonElements);

    const festivalArtistsID = new Set(
      festivalArtists.map((artist) => artist.spotifyID)
    );

    return allArtists.filter((artist) => festivalArtistsID.has(artist.id));
  };
  console.log(allTracks);

  const commonElements = findCommonElements(festivalArtists, allArtists);
  console.log(commonElements);

  return { commonElements, allTracks };
};
