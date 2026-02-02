"use client";
import Image from "next/image";
export default function Page() {
  const imglink = "w-1/2";
  const para = "w-1/2 bg-gray-900 py-3 px-3 text-2xl text-white";
  const components = "flex flex-row items-center w-2/3 my-2 mx-auto p-3";
  const gitlink =
    "rounded-lg transition-transform duration-300 ease-in-out hover:scale-105";
  const compimg =
    "w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105";
  return (
    <div className="flex flex-col gap-25">
      <div className={components}>
        <a
          href="https://jecommerce-q4kj36ciw-yohannes-projects-cb80050d.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className={imglink}
        >
          <Image
            className={compimg}
            src="/assets/jecommerce.png"
            width={600}
            height={600}
            sizes="100vw"
            quality={100}
            priority
            alt="J E-commerce"
          ></Image>
        </a>
        <div className={para}>
          <p className="text-white text-shadow-md">
            A simple e-commerce application that allows users to browse
            products, add items to the cart, and complete purchases through a
            smooth and user-friendly interface.
          </p>
          <a
            href="https://github.com/yohansngus/jecommerce/tree/main"
            className="flex justify-center"
          >
            <Image
              className={gitlink}
              src="/assets/github.png"
              width={40}
              height={40}
              alt="github"
            ></Image>
          </a>
        </div>
      </div>
      <div className={components}>
        <div className={para}>
          <p>
            A Next.js dashboard application built to visualize data, manage
            content, and monitor key metrics through a responsive and intuitive
            interface.
          </p>
          <a
            href="https://github.com/yohansngus/next.js-dashboard/tree/main"
            className="flex justify-center"
          >
            <Image
              className={gitlink}
              src="/assets/github.png"
              width={40}
              height={40}
              alt="github"
            ></Image>
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
            height={600}
            alt="NextJs Dashboard"
          ></Image>
        </a>
      </div>
      <div className={components}>
        <a
          href="https://day-3-to-do-app-add-and-display-fh4oos6pc.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className={imglink}
        >
          <Image
            className={compimg}
            src="/assets/todoapp.png"
            width={600}
            height={600}
            alt="Todo App"
          ></Image>
        </a>
        <div className={para}>
          <p>
            A simple To-Do List application that helps users organize tasks, set
            priorities, and track progress efficiently through an intuitive
            interface.
          </p>
          <a
            href="https://github.com/yohansngus/Day-3---ToDo-App-add-and-display/tree/main"
            className="flex justify-center"
          >
            <Image
              className={gitlink}
              src="/assets/github.png"
              width={40}
              height={40}
              alt="github"
            ></Image>
          </a>
        </div>
      </div>
      <div className={components}>
        <div className={para}>
          <p>
            A simple weather application that allows users to search for any
            city and view real-time weather information, including temperature
            and current conditions, through a clean and user-friendly interface.
          </p>
          <a
            href="https://github.com/yohansngus/WeatherApplicatio/tree/main"
            className="flex justify-center"
          >
            <Image
              className={gitlink}
              src="/assets/github.png"
              width={40}
              height={40}
              alt="github"
            ></Image>
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
            height={600}
            alt="Todo App"
          ></Image>
        </a>
      </div>
    </div>
  );
}
