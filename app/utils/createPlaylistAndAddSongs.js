// import { getServerSession } from "next-auth/next";
// import { useSession } from "next-auth/react";


//THIS IS USED


export const createPlaylistAndAddSongs = async (
  session,
  tracks,
  festivalOption
) => {
  let festival;
  if (festivalOption === "option1") {
    festival = "Roskilde Festival";
  } else if (festivalOption === "option2") {
    festival = "Tinderbox";
  } else {
    festival = "TBD";
  }
  // const selectedFestival = festival;

  // Create a new playlist

  const createPlaylist = async () => {
    const response = await fetch(
      `https://api.spotify.com/v1/users/${session.user.id}/playlists`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.accessToken}`,
        },
        body: JSON.stringify({
          name: `Your favorite songs from artists playing at ${festival}`,
          description:
            "A playlist of your favorite songs from artists playing at the festival. Generated Helsegren",
          public: false,
        }),
      }
    );
    const data = await response.json();
    console.log(data.id);

    return data.id;
  };

  const getSongsUris = (tracks) => {
    const songsUriList = tracks.map((track) => track.track.uri);
    console.log(songsUriList);
    return songsUriList;
  };

  const addSongsToPlaylist = async () => {
    const playlistId = await createPlaylist();
    const uriList = getSongsUris(tracks);
    const response = await fetch(
      `https://api.spotify.com/v1/users/${session.user.id}/playlists/${playlistId}/tracks`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.accessToken}`,
        },
        body: JSON.stringify({
          uris: uriList,
        }),
      }
    );
    const data = await response.json();
  };

  addSongsToPlaylist();

  // Add songs to the playlist

  // async function addSongs() {
  //   const response = await fetch(
  //     "https://api.spotify.com/v1/me/tracks?limit=50",
  //     {
  //       headers: {
  //         Authorization: `Bearer ${session.accessToken}`,
  //       },
  //     }
  //   );
  // }

  // const response = await fetch(nextUrl, {
  //   headers: {
  //     Authorization: `Bearer ${session.accessToken}`,
  //   },
  // });
  // const data = await response.json(); // Assuming the response is JSON

  // allTracks.push(...data.items);

  // // Extract artists from the current batch of tracks
  // const names = data.items.flatMap((artist) =>
  //   artist.track.artists.map((artist) => artist.name)
  // );

  // // Add unique artists to the list
  // allArtists = [...new Set([...allArtists, ...names])];

  // // Update nextUrl for pagination
  // nextUrl = data.next;

  // console.log(allArtists);

  // const findCommonElements = (dummyList, allArtists) => {
  //   let dummyListSet = new Set(dummyList);
  //   let allArtistsSet = new Set(allArtists);

  //   // Initialize an empty array to store common elements
  //   let commonElements = [];

  //   for (let item of dummyListSet) {
  //     if (allArtistsSet.has(item)) {
  //       commonElements.push(item);
  //     }
  //   }
  //   console.log(commonElements);

  //   return commonElements;
  // };
  // console.log(allTracks);

  // const commonElements = findCommonElements(dummyList, allArtists);

  // return { commonElements, allTracks };
};
