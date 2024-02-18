"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import GetAllSongsArtists from "../Components/GetAllSongsArtists";
import Hero from "../Components/Hero";

const ArtistChecker = () => {
  const { data: session } = useSession();
  // const [artists, setArtists] = useState([]);
  //const [isDataFetched, setIsDataFetched] = useState(false);
  const [showComponentTwo, setShowComponentTwo] = useState(false);

  // useEffect(() => {
  //   if (session?.error === "RefreshAccessTokenError") {
  //     signIn(); // Force sign in to hopefully resolve error
  //   }
  // }, [session]);

  // async function getAllsongs() {
  //   const response = await fetch(
  //     "https://api.spotify.com/v1/me/tracks?limit=50",
  //   {
  //     headers: {
  //       Authorization: `Bearer ${session.accessToken}`,
  //     },
  //   }
  //   );

  //   const songs = await response.json();
  //   const artistNames = songs.artists.items.map((artist) => artist.name);
  // useEffect(() => {
  //   async function getArtists() {
  //     if (session && session.accessToken && !isDataFetched) {
  //       let allArtists = [];
  //       let nextUrl = "https://api.spotify.com/v1/me/tracks?limit=50&offset=0"; // Replace with your initial URL

  //       // Continue fetching tracks until there are no more
  //       while (nextUrl) {
  //         // Fetch tracks data
  //         const response = await fetch(nextUrl, {
  //           headers: {
  //             Authorization: `Bearer ${session.accessToken}`,
  //           },
  //         });
  //         const data = await response.json(); // Assuming the response is JSON

  //         // Extract artists from the current batch of tracks
  //         const names = data.items.flatMap((artist) =>
  //           artist.track.artists.map((artist) => artist.name)
  //         );

  //         // Add unique artists to the list
  //         allArtists = [...new Set([...allArtists, ...names])];

  //         // Update nextUrl for pagination
  //         nextUrl = data.next;
  //       }
  //       console.log(allArtists);

  //       setArtists(allArtists);
  //       setIsDataFetched(true);
  //     }
  //   }

  //   getArtists();
  // }, [session, isDataFetched]);

  // useEffect(() => {
  //   async function getArtists() {
  //     if (session && session.accessToken) {
  //       let allArtists = [];
  //       let nextUrl = "https://api.spotify.com/v1/me/tracks?limit=50&offset=0"; // Replace with your initial URL

  //       // Continue fetching tracks until there are no more
  //       while (nextUrl) {
  //         // Fetch tracks data
  //         const response = await fetch(nextUrl, {
  //           headers: {
  //             Authorization: `Bearer ${session.accessToken}`,
  //           },
  //         });
  //         const data = await response.json(); // Assuming the response is JSON

  //         // Extract artists from the current batch of tracks
  //         const names = data.items.flatMap((artist) =>
  //           artist.track.artists.map((artist) => artist.name)
  //         );

  //         // Add unique artists to the list
  //         allArtists = [...new Set([...allArtists, ...names])];

  //         // Update nextUrl for pagination
  //         nextUrl = data.next;
  //       }
  //       console.log(allArtists);

  //       return allArtists;
  //     }
  //   }
  //   getArtists();
  // }, [session]);

  // useEffect(() => {
  //   async function getArtists() {
  //     if (session && session.accessToken) {
  //       const response = await fetch(
  //         "https://api.spotify.com/v1/me/following?type=artist&limit=50",
  //         {
  //           headers: {
  //             Authorization: `Bearer ${session.accessToken}`,
  //           },
  //         }
  //       );
  //       const data = await response.json();
  //       setArtists(data.artists.items);
  //       console.log(data.artists.items);

  //       const names = data.artists.items.map((artist) => artist.name);
  //       console.log(names);
  //     }
  //   }
  //   getArtists();
  // }, [session]);

  const handleClick = () => {
    setShowComponentTwo(true);
  };

  return (
    <div className="text-white">
      <h1>Find kunstner</h1>
      <p>Her kan du finde en kunstner</p>

      <p>{JSON.stringify(session)}</p>
      <div>
        <h1>Conditional Rendering Example</h1>
        <button onClick={handleClick}>Show Component Two</button>
        {showComponentTwo ? <GetAllSongsArtists session={session} /> : <Hero />}
      </div>
    </div>
  );
};

export default ArtistChecker;
