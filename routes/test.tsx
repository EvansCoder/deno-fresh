/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Post from "../islands/Post.tsx";


export default function test() {
  return (
      <article class={tw`max-w-screen-md px-4 pt-8 md:pt-16 mx-auto`}>
        <h1 class={tw`text-4xl text-gray-900 font-bold`}>Fetch Data</h1>
            <hr class={tw`my-5`}></hr>
            <Post/>
            <a href="/"class={tw`text-blue-400 hover:underline`}>Go Back</a>
            
      </article>
  );
}
