"use client";

import { data } from "autoprefixer";
import { useForm } from "react-hook-form";
import { useState } from "react";

const ModalForAllSongs = () => {
  const [data, setData] = useState("");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
            <label htmlFor="roskilde">
              <input
                {...register("Festival Selector")}
                type="radio"
                value="Roskilde"
                id="roskilde"
              />
              Roskilde
            </label>

            <label htmlFor="test">
              <input
                {...register("Festival Selector")}
                type="radio"
                value="Test"
                id="test"
              />
              Test
            </label>

            <label htmlFor="othertest">
              <input
                {...register("Festival Selector")}
                type="radio"
                value="OtherTest"
                id="othertest"
              />
              OtherTest
            </label>
          </div>
        </div>
        <div className="mx-10 hidden h-[300px] min-h-[1em] w-0.5 self-stretch bg-themegray opacity-10 xl:inline-block"></div>
        <div className="flex-1 text-center">
          <input type="Submit" />
        </div>
      </form>
    </div>
  );
};

export default ModalForAllSongs;
