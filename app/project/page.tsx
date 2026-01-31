"use client";
import Image from "next/image";
export default function Page() {
  const para = "bg-gray-800 py-3 px-3 text-2xl";
  const components =
    "flex flex-col justify-center items-center border-3 border-white w-1/2 my-2 mx-auto p-3";
  return (
    <div className="flex flex-col gap-3">
      <div className={components}>
        <a
          href="https://jecommerce-q4kj36ciw-yohannes-projects-cb80050d.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/jecommerce.png"
            width={600}
            height={600}
            alt="J E-commerce"
          ></Image>
        </a>
        <p className={para}>
          A simple e-commerce application that allows users to browse products,
          add items to the cart, and complete purchases through a smooth and
          user-friendly interface.
        </p>
        <a href="https://github.com/yohansngus/jecommerce/tree/main">
          <Image
            className="rounded-lg"
            src="/assets/github.png"
            width={40}
            height={40}
            alt="github"
          ></Image>
        </a>
      </div>
      <div className={components}>
        <a
          href="https://next-js-dashboard-4bb2cczr7-yohannes-projects-cb80050d.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/nextjsdashboard.png"
            width={600}
            height={600}
            alt="NextJs Dashboard"
          ></Image>
        </a>
        <p className={para}>
          A Next.js dashboard application built to visualize data, manage
          content, and monitor key metrics through a responsive and intuitive
          interface.
        </p>
        <a href="https://github.com/yohansngus/next.js-dashboard/tree/main">
          <Image
            className="rounded-lg"
            src="/assets/github.png"
            width={40}
            height={40}
            alt="github"
          ></Image>
        </a>
      </div>
      <div className={components}>
        <a
          href="https://day-3-to-do-app-add-and-display-fh4oos6pc.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/todoapp.png"
            width={600}
            height={600}
            alt="Todo App"
          ></Image>
        </a>
        <p className={para}>
          A simple To-Do List application that helps users organize tasks, set
          priorities, and track progress efficiently through an intuitive
          interface.
        </p>
        <a href="https://github.com/yohansngus/Day-3---ToDo-App-add-and-display/tree/main">
          <Image
            className="rounded-lg"
            src="/assets/github.png"
            width={40}
            height={40}
            alt="github"
          ></Image>
        </a>
      </div>
      <div className={components}>
        <a
          href="https://weather-applicatio-njgq399cg-yohannes-projects-cb80050d.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/weatherapp.png"
            width={600}
            height={600}
            alt="Todo App"
          ></Image>
        </a>
        <p className={para}>
          A simple weather application that allows users to search for any city
          and view real-time weather information, including temperature and
          current conditions, through a clean and user-friendly interface.
        </p>
        <a href="https://github.com/yohansngus/WeatherApplicatio/tree/main">
          <Image
            className="rounded-lg"
            src="/assets/github.png"
            width={40}
            height={40}
            alt="github"
          ></Image>
        </a>
      </div>
    </div>
  );
}
