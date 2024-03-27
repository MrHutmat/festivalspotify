export const showAllPlaylists = async (session) => {
  let nextUrl = "https://api.spotify.com/v1/me/playlists?limit=50&offset=0"; // Replace with your initial URL
  let allPlaylists = [];

  // Continue fetching tracks until there are no more
  while (nextUrl) {
    // Fetch tracks data
    const response = await fetch(nextUrl, {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    });
    const data = await response.json(); // Assuming the response is JSON

    allPlaylists.push(...data.items);

    // Update nextUrl for pagination
    nextUrl = data.next;
  }

  return allPlaylists;
};
