import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const accountIcon =
    "rounded-lg shadow-md transition-transform hover:scale-110";
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 relative">
      <main className="flex flex-col xl:flex-row h-full justify-center items-center">
        <div className="w-full xl:w-1/2 flex flex-col justify-center items-center p-10 mt-20">
          <h1 className="text-5xl font-bold text-white mb-4">
            I am{" "}
            <span className="text-yellow-400 drop-shadow-lg">
              Yohannes Niguse
            </span>
          </h1>
          <h2 className="text-3xl text-gray-300 mb-6 font-semibold">
            a Frontend Developer
          </h2>
          <div className="w-full flex flex-col justify-center items-center xl:w-4/6">
            <p className="py-3 text-lg text-gray-200 text-center mb-4">
              Frontend developer specializing in building modern, responsive web
              applications using React, Next.js, and Tailwind CSS — with a focus
              on turning ideas into intuitive digital experiences.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 transition-colors cursor-pointer px-6 py-3 rounded-xl font-semibold text-xl text-black shadow-lg">
              Contact Me
            </button>
          </div>
          <div className="flex gap-6 mt-8">
            <Link href="https://facebook.com/jodenkings.man" target="_blank">
              <Image
                className={accountIcon}
                src="/assets/facebook.png"
                width={40}
                height={40}
                alt="facebook"
              />
            </Link>
            <Link href="https://t.me/Johnsavagee21" target="_blank">
              <Image
                className={accountIcon}
                src="/assets/telegram.png"
                width={40}
                height={40}
                alt="telegram"
              />
            </Link>
            <Link href="https://www.tiktok.com/@jodishmekelle" target="_blank">
              <Image
                className={accountIcon}
                src="/assets/tiktok.png"
                width={40}
                height={40}
                alt="tiktok"
              />
            </Link>
            <Link href="https://github.com/yohansngus" target="_blank">
              <Image
                className={accountIcon}
                src="/assets/github.png"
                width={40}
                height={40}
                alt="github"
              />
            </Link>
          </div>
        </div>
        <div className="hidden xl:flex xl:w-1/2 xl:justify-center items-center mr-5 mb-5">
          <Image
            className="rounded-2xl shadow-2xl object-cover h-[400px] w-[400px]"
            src="/assets/blackbg.jpg"
            width={400}
            height={400}
            alt="Image of developer"
          />
        </div>
      </main>
    </div>
  );
}
