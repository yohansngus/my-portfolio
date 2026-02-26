import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const acounticon =
    "rounded-lg transition-transform hover:scale-110 shadow-md";

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <main className="flex flex-col xl:flex-row items-center justify-center min-h-screen px-4">
        <div className="hidden xl:flex xl:w-1/2 justify-center items-center">
          <Image
            className="h-2/3 shadow-lg rounded-xl shadow-orange-400"
            src="/assets/aboutimg.jpg"
            width={500}
            height={500}
            alt="Image of developer"
          />
        </div>
        <div className="w-full xl:w-1/2 flex flex-col justify-center items-center p-8">
          <h1 className="text-5xl font-bold mb-2 text-yellow-500">
            I am <span className="text-yellow-400">Yohannes Niguse</span>
          </h1>
          <h2 className="text-3xl mb-6 font-semibold">a Frontend Developer</h2>
          <div className="w-full max-w-xl flex flex-col items-center">
            <p className="py-3 text-lg leading-relaxed text-gray-300 mb-4">
              I am a Frontend Developer passionate about building responsive,
              user-friendly, and visually appealing web applications. I
              specialize in HTML, CSS, JavaScript, and modern frameworks like
              React, Next.js, Bootstrap, and Tailwind, with a strong
              understanding of responsive design, UI/UX principles, and
              performance optimization.
              <br />I enjoy turning designs from Figma into interactive web
              pages, implementing dynamic functionality, and writing clean,
              maintainable, and reusable code. I am always learning new
              technologies and best practices to deliver high-quality,
              production-ready websites.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer px-6 py-3 rounded-lg font-bold text-xl mb-6 shadow-lg">
              Contact Me
            </button>
          </div>
          <div className="flex gap-6 mt-2">
            <Link href="https://facebook.com/jodenkings.man" target="_blank">
              <Image
                className={acounticon}
                src="/assets/facebook.png"
                width={40}
                height={40}
                alt="facebook"
              />
            </Link>
            <Link href="https://t.me/Johnsavagee21" target="_blank">
              <Image
                className={acounticon}
                src="/assets/telegram.png"
                width={40}
                height={40}
                alt="telegram"
              />
            </Link>
            <Link href="https://www.tiktok.com/@jodishmekelle" target="_blank">
              <Image
                className={acounticon}
                src="/assets/tiktok.png"
                width={40}
                height={40}
                alt="tiktok"
              />
            </Link>
            <Link href="https://github.com/yohansngus" target="_blank">
              <Image
                className={acounticon}
                src="/assets/github.png"
                width={40}
                height={40}
                alt="github"
              />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
