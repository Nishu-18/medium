import axios from "axios"
import { useEffect, useState } from "react"
export interface Blog{
            "id":string,
            
    
            "title": string
            "content": string,
            "published": boolean,
            
            "author": {
                "name": string
                
            }

}
export function useBlog({id}:{id:string}){
    const [loading,setLoading]=useState(true)
    const [blog,setBlog]=useState<Blog[]>([])
    useEffect(()=>{
         async function getBlogs(){
            const response=await axios.get(`https://backend.nishchalbhardwaj2004.workers.dev/api/v1/post/${id}`,{headers:{Authorization:localStorage.getItem("token")}})
            setBlog(response.data.blog)
            
            
            
            setLoading(false)
         }
         getBlogs()
    },[id])
    
    

    return{
        loading,
        blog
    }
    

}

export function useBlogs(){
    const [loading,setLoading]=useState(true)
    const [blogs,setBlogs]=useState<Blog[]>([])
    useEffect(()=>{
         async function getBlogs(){
            const response=await axios.get("https://backend.nishchalbhardwaj2004.workers.dev/api/v1/post/bulk",{headers:{Authorization:localStorage.getItem("token")}})
            setBlogs(response.data.blogs)
            
            setLoading(false)
         }
         getBlogs()
    },[])
    console.log(blogs);
    

    return{
        loading,
        blogs
    }
    
}