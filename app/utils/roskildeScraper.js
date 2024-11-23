const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const BASE_URL = "https://www.roskilde-festival.dk";
const LINEUP_URL = `${BASE_URL}/program/musik`;

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
  const $ = await fetchHTML(LINEUP_URL);
  if (!$) {
    console.log("Error fetching data from the url upsi");
    return [];
  }

  const artists = [];

  $('a[data-cursor="view"]').each((_, element) => {
    const name = $(element).text().trim();
    const relativeLink = $(element).attr("href");
    const link = `${BASE_URL}${relativeLink}`;
    artists.push({ name, link });
  });
  return artists;
}

async function getSpotifyId(artistPageUrl) {
  const $ = await fetchHTML(artistPageUrl);
  if (!$) return null;

  // Find the Spotify URL
  const spotifyUrl = $('a[href*="spotify.com/artist/"]').attr("href");
  if (!spotifyUrl) return null;

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

  // const csvContent = results
  //   .map(({ name, spotifyUrl }) => `${name},${spotifyUrl || "N/A"}`)
  //   .join("\n");

  // fs.writeFileSync("artists_spotify_roskilde.csv", csvContent);

  fs.writeFileSync(
    "artists_spotify_roskilde.json",
    JSON.stringify(results, null, 2)
  );
  console.log("Scraping completed. Data saved to artists_spotify.csv");
}

main();
