/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";


export default function Header() {
  return (
    <div class={tw`flex gap-2 w-full`}>
      <nav class={tw`flex flex-1 justify-between`}>
      <a href="" class={tw`flex items-center`}>
        <img
          src="/logo.svg"
          height="100px"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p>Fresh</p>
      </a>
      <div class={tw `flex items-center gap-6`}>
        <a href="https://deno.land" class={tw `hover:underline text-gray-600`}>
          CLI
        </a>
        <a href="/blog" class={tw `hover:underline text-gray-600`}>
          Blog
        </a>
        <a href="/deploy" class={tw `hover:underline text-gray-600`}>
          Deploy
        </a>
      </div>
      </nav>
    </div>
  );
}
