/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Header from "../islands/Header.tsx";
import Articles from "../islands/Articles.tsx";

export default function Home() {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Fresh</title>
      </head>
      <body>
        <div class={tw`p-4 mx-auto max-w-screen-lg`}>
          <Header />
          <Articles />
        </div>
      </body>
    </html>
  );
}
