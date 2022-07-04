/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";

interface User {
  login: string;
  name: string;
  avatar_url: string;
}

export const handler: Handlers<User | null> = {
  async GET(_, ctx) {
    const { username } = ctx.params;
    const resp = await fetch(`https://api.github.com/users/${username}`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: User = await resp.json();
    return ctx.render(user);
  },
};

export default function Page({ data }: PageProps<User | null>) {
  if (!data) {
    return <h1>User not found</h1>;
  }

  return (
    <div class={tw`max-w-screen-md px-4 pt-8 md:pt-16 mx-auto`}>
       <h1 class={tw`text-4xl text-gray-900 font-bold`}>Fetch Data</h1>
            <hr class={tw`my-5`}></hr>
      {/* <h1 class={tw`text-4xl text-gray-600`}>Post</h1>
      <form action="post" class={tw`flex flex-col`}>
        <input
          type="text"
          placeholder="Your username"
          class={tw`border rounded my-5 py-3 px-3 w-[90%]  lg:w-[50%]`}
        />
        <button
          class={tw`border rounded w-[25%] bg-[whitesmoke] hover:border-gray-500 py-2 mb-10`}
        >
          Submit
        </button>
      </form> */}
      <div class={tw`bg-[whitesmoke] hover:border-gray-400 mb-10 rounded p-5 `}>
        <img src={data.avatar_url} width={64} height={64} />
        <h1>{data.name}</h1>
        <p>{data.login}</p>

        <a href="/"class={tw`text-blue-400 hover:underline`}>Go Back</a>
      </div>
    </div>
  );
}
