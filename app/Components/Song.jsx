"use react";

import { PlayIcon } from "@heroicons/react/24/solid";
import React, { useState, useRef, useef } from "react";

const Song = ({ track, sno }) => {
  const [hover, setHover] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return seconds == 60
      ? minutes + 1 + ":00"
      : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  const playSong = async () => {
    // If there is already an audio element playing
    if (audioRef.current) {
      // If it's the same song, toggle play/pause
      if (audioRef.current.src === track.preview_url) {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
        return;
      }
      // If it's a different song, stop the current audio
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Create a new audio element
    const audio = new Audio(track.preview_url);
    // Set the new audio element to the reference
    audioRef.current = audio;

    // Start playing the new audio
    audio.play();

    // Set state to indicate that audio is playing
    setIsPlaying(true);

    // When the audio finishes, set state to indicate that audio has stopped playing
    audio.onended = () => {
      setIsPlaying(false);
    };
  };
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="grid grid-cols-2 text-neutral-400 text-sm py-4 px-5 hover:bg-white hover:bg-opacity-10 rounded-lg cursor-default"
    >
      <div className="flex items-center space-x-4">
        {hover ? (
          <PlayIcon
            className="h-8 w-8 text-white"
            onClick={async () => await playSong(track)}
          />
        ) : (
          <p className="w-5">{sno + 1}</p>
        )}
        {track?.album?.images[0]?.url && (
          <img className="h-4 w-4" src={track.album.images[0].url} />
        )}
        <div>
          <p className="w-36 lg:w-64 truncate text-white text-base">
            {track.name}
          </p>
          <p className="w-36 truncate">
            {track.artists.map((artist, i) => {
              return (
                <>
                  <span key={artist.id} className="hover:underline">
                    {artist.name}
                  </span>
                  <span>{i != track.artists.length - 1 ? ", " : null}</span>
                </>
              );
            })}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between ml-auto md:ml-0">
        <p className="w-40 truncate hidden md:inline">{track.album.name}</p>
        <p>{millisToMinutesAndSeconds(track.duration_ms)}</p>
      </div>
    </div>
  );
};

export default Song;
