"use react";

import { PlayIcon } from "@heroicons/react/24/solid";
import React, { useState, useRef } from "react";
import { set } from "react-hook-form";
import useSound from "use-sound";

const Song = ({ track, sno }) => {
  const [hover, setHover] = useState(false);

  const [soundUrl, setSoundUrl] = useState("");
  const [play, { stop, isPlaying }] = useSound(soundUrl);

  //  const [isPlaying, setIsPlaying] = useState(false);
  // const [audioPlaying, setAudioPlaying] = useState(null);
  //  const audioRef = useRef(null);

  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return seconds == 60
      ? minutes + 1 + ":00"
      : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  // const playSong = () => {
  //   console.log("Playing song " + audioPlaying);
  //   // If there is already an audio element playing
  //   if (audioRef.current.src === audioPlaying) {
  //     console.log(audioRef.current);

  //     // If it's the same song, toggle play/pause
  //     if (audioRef.current.src === track.preview_url) {
  //       console.log("Same song");
  //       if (isPlaying) {
  //         audioRef.current.pause();
  //       } else {
  //         audioRef.current.play();
  //       }
  //       setIsPlaying(!isPlaying);
  //       return;
  //     }
  //     // If it's a different song, stop the current audio
  //     audioRef.current.pause();
  //     audioRef.current.stop();
  //   } else {
  //     // Create a new audio element
  //     // const audio = new Audio(track.preview_url);
  //     // Set the new audio element to the reference
  //     const audioFile = new Audio(track.preview_url);
  //     audioRef.current = audioFile;
  //     setAudioPlaying(audioFile.src);

  //     // Start playing the new audio
  //     audioRef.current.play();

  //     // Set state to indicate that audio is playing
  //     setIsPlaying(true);

  //     // When the audio finishes, set state to indicate that audio has stopped playing
  //     audioRef.current.onended = () => {
  //       setIsPlaying(false);
  //     };
  //   }
  // };
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="grid grid-cols-2 text-neutral-400 text-sm py-4 px-5 hover:bg-white hover:bg-opacity-10 rounded-lg cursor-default"
    >
      <div className="flex items-center space-x-4">
        {hover ? (
          <PlayButton
            activeBackgroundColor="var(--color-primary)"
            idleBackgroundColor="var(--color-text)"
            iconColor="var(--color-background)"
            size={60}
            play={play}
            stop={stop}
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
