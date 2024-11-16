import { useState } from "react";
import { Appbar } from "../Components/Appbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Publish(){
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")
    const navigate=useNavigate()
    return <div>
            <Appbar></Appbar>
            <div className="flex justify-center w-full">
                <div className=" max-w-screen-lg w-full">
                <input onChange={function(e){
                    setTitle(e.target.value)
                }} type="text"className=" mt-5 w-full bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5   " placeholder="Title" required />
                <textarea onChange={function(e){
                    setDesc(e.target.value)
                }}  rows={8} className="mt-5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg" placeholder="Write your thoughts here..."></textarea>
                <button onClick={async function(){
                  const response=  await axios.post("https://backend.nishchalbhardwaj2004.workers.dev/api/v1/post",{title:title,content:desc},{headers:{Authorization:localStorage.getItem("token")}})
                  const id=response.data.id
                    navigate(`/blog/${id}`)

                }} type="button" className="mt-5 text-white bg-blue-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Publish</button>
                </div>
            
            </div>
        </div>
}