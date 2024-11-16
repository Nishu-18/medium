import { useParams } from "react-router-dom"
import { FullBlog } from "../Components/FullBlog"
import { useBlog } from "../Hooks"

import { Spinner } from "../Components/Spinner"

export function Blog(){
    const {id}=useParams()
    const {loading,blog}=useBlog({id:id||""})
    
    
    if(loading||!blog){
        return <div>
            <div>
                
                <div className="h-screen flex flex-col justify-center">
                    <div className="flex justify-center ">
                    <Spinner/>

                    </div>
                

                </div>
               
            </div>
            
           
        </div>
    }
    return <div>
            <FullBlog blog={blog}></FullBlog>

         </div>
}