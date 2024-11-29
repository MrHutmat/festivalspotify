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

    return data.id;
  };

  const getSongsUris = (tracks) => {
    const songsUriList = tracks.map((track) => track.track.uri);
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
};
