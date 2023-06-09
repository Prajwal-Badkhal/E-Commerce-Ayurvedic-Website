import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <div>
          <img
            class="mx-auto h-12 w-auto"
            src="https://cdn.sanity.io/images/m4wuptgm/production/dfbf03a0970db8d3eda0982de398ae6462b76646-512x512.png"
            alt="Ayurvedic"
          />
          <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            {" "}
            forgot password{" "}
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Or
            <Link href={"/login"}>
              <a
                href="#"
                class="font-medium text-orange-600 hover:text-orange-500"
              >
                {" "}
                Login{" "}
              </a>
            </Link>
          </p>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="-space-y-px rounded-md shadow-sm">
            <div>
              <label for="email-address" class="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
          </div>

          <div class="flex items-center justify-between"></div>

          <div>
            <button
              type="submit"
              class="group relative flex w-full justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  class="h-5 w-5 text-orange-500 group-hover:text-orange-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
