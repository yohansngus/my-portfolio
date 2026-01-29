import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const acounticon = "rounded-lg";
  return (
    <div className="h-full relative xl:bg-black">
      <main className="flex h-full justify-center items-center">
        <div className="w-full lg:w-4/4 flex flex-col justify-center items-center p-10 mt-30">
          <h1 className="text-5xl">
            I'm
            <b className="text-yellow-600">Yohannes Niguse</b>
          </h1>
          <h2 className="text-4xl mb-5">a Frontend Developer</h2>
          <div className="w-full flex flex-col justify-center items-center lg:w-4/6 lg:flex lg:flex-col">
            <p className="py-3 text-[20px]">
              Frontend developer specializing in building modern, responsive web
              applications using React, Next.js, and Tailwind CSS — with a focus
              on turning ideas into intuitive digital experiences.
            </p>
            <button className="flex justify-center bg-yellow-600 hover:bg-yellow-700 cursor-pointer p-3 m-5 rounded-lg font-medium font-bold text-2xl w-1/3">
              Contact Me
            </button>
          </div>
          <div className="flex gap-5">
            <Link href="https://facebook.com/jodenkings.man">
              <Image
                className={acounticon}
                src="/assets/facebook.png"
                width={40}
                height={40}
                alt="facebook"
              ></Image>
            </Link>
            <Link href="https://t.me/Johnsavagee21">
              <Image
                className={acounticon}
                src="/assets/telegram.png"
                width={40}
                height={40}
                alt="telegram"
              ></Image>
            </Link>
            <Link href="https://www.tiktok.com/@jodishmekelle">
              <Image
                className={acounticon}
                src="/assets/tiktok.png"
                width={40}
                height={40}
                alt="tiktok"
              ></Image>
            </Link>
            <Link href="https://github.com/yohansngus">
              <Image
                className={acounticon}
                src="/assets/github.png"
                width={40}
                height={40}
                alt="github"
              ></Image>
            </Link>
          </div>
        </div>
        <div className="hidden lg:hidden h-screen xl:w-1/2 xl:flex xl:justify-center items-center mr-5 mb-5">
          <Image
            className="h-2/3"
            src="/assets/blackbg.jpg"
            width={500}
            height={500}
            alt="Image of developer"
          ></Image>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
