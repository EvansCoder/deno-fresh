/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";


export default function Articles() {
  const username="EvansCoder"
  return (
      <article class={tw`max-w-screen-md px-4 pt-8 md:pt-16 mx-auto`}>
        <h1 class={tw`text-5xl text-gray-900 font-bold`}>Fresh 1.0 Review</h1>
        <div class={tw`mt-8 text-gray-500`}>
          <p class={tw`flex gap-2 items-center`}>
            <time dateTime="2022-06-28T14:15:00.000Z">Jul 4, 2022</time>
            <a href="/feed" class={tw`hover:text-gray-700" title="Atom Feed`}>
              <svg
                class={tw`w-4 h-4`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z">
                </path>
                <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z">
                </path>
              </svg>
            </a>
          </p>
            <p><a class={tw`hover:underline" href="https://github.com/lucacasonato`}>Wanga Evans</a></p>
        </div>
            <hr class={tw`my-8`}></hr>
            <a href={`/github/${username}`} class={tw`bg-[whitesmoke] p-4 rounded`}>Click Me</a>
      </article>
  );
}
