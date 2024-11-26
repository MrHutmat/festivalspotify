"use client";

import roskildeLineUp from "../../utils/artists_spotify_roskilde.json" assert { type: "json" };
import tinderboxLineUp from "../../utils/artists_spotify_tinderbox.json" assert { type: "json" };
import { useState, useRef, useEffect } from "react";
import { allPlaylistSongs } from "../../utils/allPlaylistSongs";

import { useSession } from "next-auth/react";
import Song from "../Song";
import { createPlaylistAndAddSongs } from "@/app/utils/createPlaylistAndAddSongs";

const ModalForPlaylistSelector = () => {
  const { data: session } = useSession();
  const [selectedOption, setSelectedOption] = useState("option1");
  const [playlistIsSelected, setPlaylistIsSelected] = useState(false);
  const [commonArtists, setCommonArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [showSongs, setShowSongs] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [hover, setHover] = useState(false);

  // Maybe move this logic.
  useEffect(() => {
    "1" + session;
    const showAllPlaylists = async (session) => {
      "2" + session;
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
      setPlaylists(allPlaylists);
      setLoading(false);
    };
    showAllPlaylists(session);
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCreatePlaylistClick = async () => {
    await createPlaylist(tracks);
  };

  const createPlaylist = async (tracks) => {
    const respone = await createPlaylistAndAddSongs(
      session,
      tracks,
      selectedOption
    );
    // TODO: Show a message to the user that the playlist has been created
  };

  const getCommonArtistList = async (bands) => {
    const response = await allPlaylistSongs(session, bands, selectedPlaylist);
    setCommonArtists(response.commonElements);
    setTracks(response.allTracks);
  };

  const handlePlaylistOptionChange = (event) => {
    setSelectedPlaylist(event.target.value);
  };

  const handlePlaylistSubmit = (event) => {
    event.preventDefault();
    setSelectedPlaylist(selectedPlaylist);
    setPlaylistIsSelected(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setHasBeenSubmitted(true);
    setLoading(true);

    // Define bands based on the selected radio option
    let bands;
    if (selectedOption === "option1") {
      bands = roskildeLineUp;
    } else if (selectedOption === "option2") {
      bands = tinderboxLineUp;
    } else {
      bands = ["Band P", "Band Q", "Band R"];
    }

    await getCommonArtistList(bands);
    setLoading(false);
  };

  const handleClick = () => {
    setHasBeenSubmitted(false);
    setLoading(true);

    const commonArtistsID = new Set(commonArtists.map((artist) => artist.id));

    const filteredObjects = tracks.filter((obj) =>
      obj.track.artists.some((artist) => commonArtistsID.has(artist.id))
    );
    setLoading(false);
    setShowSongs(true);
    setTracks(filteredObjects);
  };

  const playTrack = (track) => {
    if (currentTrack !== track) {
      audioRef.current.pause();
      audioRef.current.src = track.preview_url;
      audioRef.current.play();
      setCurrentTrack(track);
      setIsPlaying(true); // Set isPlaying to true when a new track starts playing
    } else {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true); // Set isPlaying to true when the same track resumes playing
      } else {
        audioRef.current.pause();
        setIsPlaying(false); // Set isPlaying to false when the same track is paused
      }
    }
  };

  return (
    <div className="max-h-[550px]">
      <div className="">
        <h3 className="mb-2 text-4xl font-semibold">4. Semester.</h3>
        <p className="text-lg">
          Her er mine 2 emner, som jeg har arbejdet med under 4. Semester på
        </p>
      </div>
      {!hasBeenSubmitted && !loading && !showSongs && !playlistIsSelected && (
        <div className="px-8 flex flex-col space-y-1 pb-28 max-h-[450px] overflow-auto">
          <form onSubmit={handlePlaylistSubmit}>
            {playlists.map((playlist, i) => {
              return (
                <div
                  key={playlist.id}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  className="grid grid-cols-2 text-neutral-400 text-sm py-4 px-5 hover:bg-white hover:bg-opacity-10 rounded-lg cursor-default"
                >
                  <input
                    type="radio"
                    value={playlist.id}
                    checked={selectedPlaylist === playlist.id}
                    onChange={handlePlaylistOptionChange}
                  />
                  <div className="flex items-center space-x-4">
                    <p className="w-5">{i + 1}</p>

                    {playlist.images && playlist.images.length > 0 ? (
                      <img className="h-4 w-4" src={playlist.images[0].url} />
                    ) : (
                      <img
                        className="h-4 w-4"
                        src="https://i.scdn.co/image/ab67616d0000b273058d85d25752a6701564ba06"
                      />
                    )}

                    <div>
                      <p className="w-36 lg:w-64 truncate text-white text-base">
                        {playlist.name}
                      </p>
                      <p className="w-36 truncate">
                        <>
                          <span className="hover:underline">
                            {playlist.owner.display_name}
                          </span>
                        </>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between ml-auto md:ml-0">
                    <p className="w-40 truncate hidden md:inline">
                      PlaceHolder for now
                    </p>
                    <p>{playlist.tracks.total}</p>
                  </div>
                </div>
              );
            })}
            <div className="mx-10 hidden h-[300px] min-h-[1em] w-0.5 self-stretch bg-themegray opacity-10 xl:inline-block"></div>
            <div className="flex-1 text-center">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      )}
      {!hasBeenSubmitted && !showSongs && playlistIsSelected && (
        <form
          onSubmit={handleSubmit}
          className="flex justify-between text-start items-center"
        >
          <div className="flex-1">
            <div className="flex flex-col">
              <label>
                <input
                  type="radio"
                  value="option1"
                  checked={selectedOption === "option1"}
                  onChange={handleOptionChange}
                />
                Roskilde
              </label>

              <label>
                <input
                  type="radio"
                  value="option2"
                  checked={selectedOption === "option2"}
                  onChange={handleOptionChange}
                />
                Tinderbox
              </label>

              <label>
                <input
                  type="radio"
                  value="option3"
                  checked={selectedOption === "option3"}
                  onChange={handleOptionChange}
                />
                OtherTest
              </label>
            </div>
          </div>
          <div className="mx-10 hidden h-[300px] min-h-[1em] w-0.5 self-stretch bg-themegray opacity-10 xl:inline-block"></div>
          <div className="flex-1 text-center">
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
      {hasBeenSubmitted && !loading && (
        <div>
          {commonArtists.map((artist) => {
            return (
              <div key={artist.id}>
                <p>{artist.name}</p>
              </div>
            );
          })}
          <div>
            <p>
              Would you like to see what songs you have liked from these band?
            </p>
            <button onClick={handleClick}>Yes please!</button>
          </div>
        </div>
      )}

      {loading && <p>Loading...</p>}

      {showSongs && (
        <div className="text-white px-8 flex flex-col space-y-1 pb-28 max-h-[450px] overflow-auto">
          <div>
            <h1>Would you like to save these songs to a playlist?</h1>
            <button
              className="navButton w-[101px] hover:bg-left-bottom hover:text-themeblack"
              onClick={handleCreatePlaylistClick}
            >
              Click Here
            </button>
          </div>
          {tracks.map((track, i) => {
            return (
              <Song
                key={track.track.id}
                track={track.track}
                sno={i}
                playTrack={playTrack}
                isPlaying={currentTrack === track.track && isPlaying}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ModalForPlaylistSelector;
