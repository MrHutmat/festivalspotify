"use client";

import { data } from "autoprefixer";
import { set, useForm } from "react-hook-form";
import { useState } from "react";
import { allSavedSongs } from "../../utils/allSavedSongs";
import { useSession } from "next-auth/react";

const ModalForAllSongs = () => {
  const { data: session } = useSession();
  const [selectedOption, setSelectedOption] = useState("option1");
  const [commonArtist, setCommonArtist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const getCommonArtistList = async (bands) => {
    const response = await allSavedSongs(session, bands);
    console.log(response);
    setCommonArtist(response);
    console.log(response);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setHasBeenSubmitted(true);
    setLoading(true);

    // Define bands based on the selected radio option
    let bands;
    if (selectedOption === "option1") {
      bands = ["Linkin Park", "Eminem", "Drake", "Kanye West", "Test"];
    } else if (selectedOption === "option2") {
      bands = ["Band X", "Band Y", "Band Z"];
    } else {
      bands = ["Band P", "Band Q", "Band R"];
    }

    await getCommonArtistList(bands);
    setLoading(false);
  };

  return (
    <div className="">
      <div className="">
        <h3 className="mb-2 text-4xl font-semibold">4. Semester.</h3>
        <p className="text-lg">
          Her er mine 2 emner, som jeg har arbejdet med under 4. Semester på
        </p>
      </div>
      {!hasBeenSubmitted && (
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
                Test
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

      {loading && <p>Loading...</p>}
    </div>
  );
};

export default ModalForAllSongs;
