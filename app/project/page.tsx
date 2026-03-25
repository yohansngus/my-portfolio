"use client";
import Image from "next/image";

export default function Page() {
  // Updated styles for a more modern, card-like look
  const container =
    "flex flex-col gap-12 px-4 py-8 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen";
  const components =
    "flex flex-col lg:flex-row items-center justify-between bg-gray-800/80 rounded-2xl shadow-lg w-full max-w-4xl mx-auto my-6 p-6 gap-6 transition-transform hover:scale-[1.01]";
  const imglink = "w-full lg:w-1/2 rounded-xl overflow-hidden shadow-md";
  const para =
    "flex flex-col justify-between w-full lg:w-1/2 bg-gray-900/90 rounded-xl p-6 text-lg text-white gap-4";
  const paramob = "mb-4";
  const gitlink =
    "rounded-lg transition-transform duration-300 ease-in-out hover:scale-110";
  const compimg =
    "w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105";
  const githubBtn = "flex justify-center mt-2";

  return (
    <div className={container}>
      <div className={components}>
        <a
          href="https://jecommerce-tau.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={imglink}
        >
          <Image
            className={compimg}
            src="/assets/jecommerce.png"
            width={600}
            height={400}
            sizes="100vw"
            quality={100}
            priority
            alt="J E-commerce"
          />
        </a>
        <div className={para}>
          <p className={paramob}>
            Modern eCommerce frontend built with Next.js <br></br>✔ Fast page
            load for better user retention <br></br>✔ Fully responsive across
            devices <br></br>✔ Clean UI designed for better conversion
          </p>
          <a
            href="https://github.com/yohansngus/jecommerce/tree/main"
            className={githubBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={gitlink}
              src="/assets/github.png"
              width={40}
              height={40}
              alt="github"
            />
          </a>
        </div>
      </div>
      <div className={components}>
        <div className={para}>
          <p className={paramob}>
            A Next.js dashboard application built to visualize data, manage
            content, and monitor key metrics through a responsive and intuitive
            interface.
          </p>
          <a
            href="https://github.com/yohansngus/next.js-dashboard/tree/main"
            className={githubBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={gitlink}
              src="/assets/github.png"
              width={40}
              height={40}
              alt="github"
            />
          </a>
        </div>
        <a
          href="https://next-js-dashboard-4bb2cczr7-yohannes-projects-cb80050d.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className={imglink}
        >
          <Image
            className={compimg}
            src="/assets/nextjsdashboard.png"
            width={600}
            height={400}
            alt="NextJs Dashboard"
          />
        </a>
      </div>
      <div className={components}>
        <a
          href="https://day-3-to-do-app-add-and-display.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={imglink}
        >
          <Image
            className={compimg}
            src="/assets/todoapp.png"
            width={600}
            height={400}
            alt="Todo App"
          />
        </a>
        <div className={para}>
          <p className={paramob}>
            A simple To-Do List application that helps users organize tasks, set
            priorities, and track progress efficiently through an intuitive
            interface.
          </p>
          <a
            href="https://github.com/yohansngus/Day-3---ToDo-App-add-and-display/tree/main"
            className={githubBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={gitlink}
              src="/assets/github.png"
              width={40}
              height={40}
              alt="github"
            />
          </a>
        </div>
      </div>
      <div className={components}>
        <div className={para}>
          <p className={paramob}>
            A simple weather application that allows users to search for any
            city and view real-time weather information, including temperature
            and current conditions, through a clean and user-friendly interface.
          </p>
          <a
            href="https://github.com/yohansngus/WeatherApplicatio/tree/main"
            className={githubBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={gitlink}
              src="/assets/github.png"
              width={40}
              height={40}
              alt="github"
            />
          </a>
        </div>
        <a
          href="https://weather-applicatio-njgq399cg-yohannes-projects-cb80050d.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className={imglink}
        >
          <Image
            className={compimg}
            src="/assets/weatherapp.png"
            width={600}
            height={400}
            alt="Weather App"
          />
        </a>
      </div>
    </div>
  );
}
