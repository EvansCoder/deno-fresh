/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useState,useEffect } from "preact/hooks";
import axios from './axios.tsx'

export default function Post() {
  const [posts,setPosts]=useState([]);
  const [name,setName]=useState('');
  useEffect(()=>{
    const getData=async()=>{
      await axios.get('/messages/sync').then((res)=>{setPosts(res.data)})
    } 
    getData()
  },[posts])
  
  const handleSubmit=async(e)=>{
    e.preventDefault()
    if(!name) return;
    await axios.post('/messages/new',{
      name:name,
      date:new Date()
    })
    setName('')
  }

  return (
      <div class={tw`max-w-screen-md px-4 pt-8 md:pt-16 mx-auto`}>
        <h1  class={tw`text-4xl text-gray-600`}>Post</h1>
        <form action="post" class={tw`flex flex-col`} onSubmit={handleSubmit}>
            <input type="text"  placeholder="Your username" class={tw`border rounded my-5 py-3 px-3 w-[90%]  lg:w-[50%]`} onChange={e=>setName(e.target.value)}/>
            <button onClick={handleSubmit} class={tw`border rounded w-[25%] bg-[whitesmoke] hover:border-gray-500 py-2 mb-10`}>Submit</button>
        </form>
        {posts.map((post) =>{
          return <div class={tw`bg-[whitesmoke] hover:border-gray-400 mb-10 rounded p-5 `}>
            <h1 class={tw`text-3xl`}>{post.name}</h1>
            <p>{post.message}</p>
          </div>
        })}
      </div>
  );
}

