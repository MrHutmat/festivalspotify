const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const BASE_URL = "https://tinderbox.dk/artister";

async function fetchHTML(url) {
  try {
    const { data } = await axios.get(url);
    return cheerio.load(data);
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    return null;
  }
}

async function getArtists() {
  const $ = await fetchHTML(BASE_URL);
  if (!$) {
    console.log("Error fetching data from the url upsi");
    return [];
  }

  const artists = [];

  $('a[class="item-artist__inner"]').each((_, element) => {
    const name = $(element)
      .find("h4.item-artist__content-header")
      .text()
      .trim();
    const link = $(element).attr("href");

    artists.push({ name, link });
  });
  return artists;
}

async function getSpotifyId(artistPageUrl) {
  const $ = await fetchHTML(artistPageUrl);
  if (!$) return null;

  // Find the Spotify URL
  const spotifyUrl = $('a[href*="spotify.com/artist/"]').attr("href");
  if (!spotifyUrl) {
    const spotifyEmbedUrl = $('iframe[title*="Spotify Embed:"]').attr(
      "data-lazy-src"
    );
    if (!spotifyEmbedUrl) return null;

    const match = spotifyEmbedUrl.match(/artist\/([\w\d]+)/);
    return match ? match[1] : null;
  }

  // Extract the artist ID
  const match = spotifyUrl.match(/artist\/([\w\d]+)/);
  return match ? match[1] : null;
}

async function main() {
  const results = [];
  const artists = await getArtists();

  for (const artist of artists) {
    console.log(`Processing ${artist.name}...`);
    const spotifyID = await getSpotifyId(artist.link);
    results.push({ name: artist.name, spotifyID: spotifyID || "N/A" });
  }

  fs.writeFileSync(
    "artists_spotify_tinderbox.json",
    JSON.stringify(results, null, 2)
  );
}

main();
