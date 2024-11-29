//THIS IS USED

export const allSavedSongs = async (session, bands) => {
  //Maybe a switch statement for the different festivals here?
  //Importing the csv file with spotify artists artist id's?
  const festivalArtists = bands;



  // call for the session

  // const session = await getServerSession();
  let allArtists = [];
  let allTracks = [];
  let nextUrl = "https://api.spotify.com/v1/me/tracks?limit=50&offset=0"; // Replace with your initial URL

  // Continue fetching tracks until there are no more
  while (nextUrl) {
    // Fetch tracks data
    const response = await fetch(nextUrl, {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    });
    const data = await response.json(); // Assuming the response is JSON

    allTracks.push(...data.items);

    // Extract artists from the current batch of tracks
    // 23-11-2024 Changed "names" to "artistData"
    // So that I can add ID to the artist as well
    // artist.track.artists.map((artist) => artist.name
    const artistData = data.items.flatMap((artist) =>
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

    allArtists = [
      ...new Map(
        [...allArtists, ...uniqueArtists].map((a) => [a.id, a])
      ).values(),
    ];

    // Update nextUrl for pagination
    nextUrl = data.next;
  }

  const findCommonElements = (festivalArtists, allArtists) => {
    // Old way before ID was added to the artist, still need to import the csv file with the artist ID's.

    const festivalArtistsID = new Set(
      festivalArtists.map((artist) => artist.spotifyID)
    );

    return allArtists.filter((artist) => festivalArtistsID.has(artist.id));
  };

  const commonElements = findCommonElements(festivalArtists, allArtists);

  return { commonElements, allTracks };
};
