"use client";

import React, { useState } from "react";
import { allSavedSongs } from "@/app/utils/allSavedSongs";
import { useSession } from "next-auth/react";

const OldButtonTest = () => {
  const { data: session } = useSession();
  const [commonArtist, setCommonArtist] = useState([]);

  console.log(session);

  const handleClick = async () => {
    const response = await allSavedSongs(session);
    //await allSavedSongs(session);
    console.log(response);
    setCommonArtist(response);
    console.log(commonArtist);
    console.log(response);
  };

  return (
    <div>
      <button onClick={handleClick}>click her</button>
    </div>
  );
};
export default OldButtonTest;
