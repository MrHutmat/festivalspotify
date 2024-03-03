"use client"

import React from 'react'
import { useSession } from "next-auth/react";
import { allSavedSongs } from "../utils/allSavedSongs";

const AllSavedSongsCompared = ({ params }) => {
  const { data: session } = useSession();


  
  const fetchAllSongsCalc = async () => {
    await allSavedSongs()
  }



  return (
    <div>AllSavedSongsCompared</div>
  )
}

export default AllSavedSongsCompared