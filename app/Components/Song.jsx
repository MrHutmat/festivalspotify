"use react";

//THIS IS USED

//import { PlayIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const Song = ({ track, sno, playTrack, isPlaying }) => {
  const [hover, setHover] = useState(false);

  const handlePlayPause = () => {
    playTrack(track);
  };

  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return seconds == 60
      ? minutes + 1 + ":00"
      : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="grid grid-cols-2 text-neutral-400 text-sm py-4 px-5 hover:bg-white hover:bg-opacity-10 rounded-lg cursor-default"
    >
      <div className="flex items-center space-x-4">
        {hover ? (
          <button className="h-8 w-8 text-white" onClick={handlePlayPause}>
            {isPlaying ? "Pause" : "Play"}
          </button>
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
                <React.Fragment key={artist.id}>
                  <span className="hover:underline">{artist.name}</span>
                  <span>{i != track.artists.length - 1 ? ", " : null}</span>
                </React.Fragment>
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
