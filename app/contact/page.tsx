"use client";

export default function Page() {
  const labelstyle = "text-xl font-semibold pt-4";
  const inputstyle =
    "border border-gray-400 w-full h-12 px-4 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:border-yellow-700 transition";
  const submithandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Hello");
  };
  return (
    <div className="min-h-screen flex flex-col xl:flex-row justify-center items-center gap-8 bg-gray-50 p-8">
      <div className="bg-yellow-700/90 xl:w-1/3 p-8 flex flex-col justify-center border border-gray-300 rounded-lg shadow-md text-white">
        <label className={labelstyle} htmlFor="address">
          ADDRESS
        </label>
        <h2 className="text-lg mb-4" id="address">
          +251967384173
        </h2>
        <label className={labelstyle} htmlFor="call">
          CALL ME
        </label>
        <h2 className="text-lg mb-4" id="call">
          +251967384173
        </h2>
        <label className={labelstyle} htmlFor="email">
          EMAIL
        </label>
        <h2 className="text-lg" id="email">
          yohansngus73@gmail.com
        </h2>
      </div>
      <form
        onSubmit={submithandler}
        className="relative xl:w-2/3 bg-white p-8 rounded-lg shadow-md flex flex-col xl:flex-row gap-6 border border-gray-300"
      >
        <div className="flex-1 flex flex-col gap-4">
          <input
            className={inputstyle}
            type="text"
            placeholder="Your name..."
          />
          <input className={inputstyle} type="text" placeholder="Subject..." />
          <textarea
            className="border border-gray-400 w-full h-32 px-4 py-2 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:border-yellow-700 transition resize-none"
            placeholder="Message..."
          />
        </div>
        <div className="flex-1 flex flex-col gap-4">
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
        <button
          type="submit"
          className="mt-6 xl:mt-0 xl:absolute xl:bottom-8 xl:right-8 border border-yellow-700 px-6 py-3 rounded-xl font-bold bg-yellow-700 text-white hover:bg-yellow-800 transition cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
