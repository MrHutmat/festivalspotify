"use client";

import { data } from "autoprefixer";
import { useForm } from "react-hook-form";
import { useState } from "react";

const ModalForAllSongs = () => {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(selectedOption);
  };

  const handleButtonClick = () => {
    // Define bands based on the selected radio option
    let bands;
    if (selectedOption === "option1") {
      bands = ["Band A", "Band B", "Band C"];
    } else if (selectedOption === "option2") {
      bands = ["Band X", "Band Y", "Band Z"];
    } else {
      bands = ["Band P", "Band Q", "Band R"];
    }
    // Call the function passed from props with the selected bands
    onSelection(bands);
    onClose();
  };

  return (
    <div className="">
      <div className="">
        <h3 className="mb-2 text-4xl font-semibold">4. Semester.</h3>
        <p className="text-lg">
          Her er mine 2 emner, som jeg har arbejdet med under 4. Semester på
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-between text-start items-center"
      >
        <div className="flex-1">
          <div className="flex flex-col">
            <label>
              <input
                type="radio"
                value="Roskilde"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
              />
              Roskilde
            </label>

            <label>
              <input
                type="radio"
                value="Roskilde"
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
              />
              Test
            </label>

            <label>
              <input
                type="radio"
                value="Roskilde"
                checked={selectedOption === "option3"}
                onChange={handleOptionChange}
              />
              OtherTest
            </label>
          </div>
        </div>
        <div className="mx-10 hidden h-[300px] min-h-[1em] w-0.5 self-stretch bg-themegray opacity-10 xl:inline-block"></div>
        <div className="flex-1 text-center">
          <button onClick={handleButtonClick}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ModalForAllSongs;
