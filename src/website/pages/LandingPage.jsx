import React from "react";
import { NavLink } from "react-router-dom";

export function LandingPage() {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: 'url("./imgs/fondo.jpg")' }}
    >
      {
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <a
              href="#"
              className="text-2xl font-bold text-white dark:text-white mb-2 block"
            >
              Explore Your Unique Style: The Fashion Survey that will Unveil
              Your Essence.
            </a>
            <p className="text-white dark:text-gray-400 mb-3 px-48">
              Explore carefully crafted questions to help you discover your
              perfect style and see where you stand on the fashion scene in
              Colombia. Ready to unveil the look that best represents you? Start
              now.
            </p>
            <NavLink to ="/quiz">
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Try it now!
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            </NavLink>
          </div>
        </div>
      }
    </div>
  );
}
