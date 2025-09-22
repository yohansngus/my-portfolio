"use client";

import React from "react";

export default function Page() {
  const labelstyle = "text-2xl pt-5";
  const inputstyle = "border-2 border-white w-8/9 h-1/5 pl-3 rounded-lg";
  type submithandle = () => void;
  const submithandler: submithandle = () => {
    console.log("Hello");
  };
  return (
    <div className="h-full flex flex-col xl:flex-row justify-center items-center gap-3">
      <div className="bg-yellow-700 h-1/2 xl:w-1/3 pl-10 flex flex-col justify-center border-2 border-gray-300">
        <label className={labelstyle} htmlFor="address">
          ADDRES
        </label>
        <h2 className="text-2xl" id="address">
          +251967384173
        </h2>
        <label className={labelstyle} htmlFor="call">
          CALL ME
        </label>
        <h2 className="text-2xl" id="call">
          +251967384173
        </h2>
        <label className={labelstyle} htmlFor="email">
          EMAIL
        </label>
        <h2 className="text-2xl" id="email">
          yohansngus73@gmail.com
        </h2>
      </div>
      <form
        onSubmit={submithandler}
        className="relative h-1/2 xl:w-2/3 flex flex-row justify-center itmes-center border-2 border-gray-300"
      >
        <div className="xl:w-2/1 pl-3 flex flex-col justify-center gap-2 text-gray-200 text-2xl">
          <input
            className={inputstyle}
            type="text"
            placeholder="Your name..."
          />
          <input className={inputstyle} type="text" placeholder="Subject..." />
          <input
            className="border-2 border-white w-8/9 h-1/3 pl-3 rounded-lg"
            type="text"
            placeholder="Messages..."
          />
        </div>
        <div className="xl:w-2/1 flex flex-col justify-center gap-2 text-gray-200 text-2xl flex">
          <input
            className={inputstyle}
            type="email"
            placeholder="Your Email..."
          />
          <input
            className={inputstyle}
            type="text"
            placeholder="Contact Phone..."
          />
        </div>
        <br />
        <button
          type="submit"
          className="absolute bottom-3 border-3 border-yellow-700 px-4 py-2 rounded-xl font-bold hover:bg-yellow-700 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
