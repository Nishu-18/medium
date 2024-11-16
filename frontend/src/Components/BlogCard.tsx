import { Link } from "react-router-dom"
import { Avatar} from "./Avatar"

type blogDetails={name:string,publishedDate:string,title:string,content:string,id:string}
export function BlogCard({name,publishedDate,title,content,id}:blogDetails){
    
   return <Link to={`/blog/${id}`}>
         <div className="cursor-pointer w-screen max-w-screen-md">
        <div className="flex flex-col justify-center p-2 ">
        <div className="flex pb-2">
            <div className="m-1">
            <Avatar size="small"  name={name} />

            </div>
           
           <div className="m-1 font-extralight text-sm">
           {name} 

           </div>
           <div className="m-1 font-thin text-slate-500 text-sm">
            {publishedDate} 

           </div>

         
        </div>

        </div>
        
        <div className="font-semibold text-xl">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0,100)+"...."}
        </div>
        <div className="text-slate-500 font-sm mb-4 mt-4">
            {`${Math.ceil(content.length/100)} minutes read`}
        </div>
        <div className="bg-slate-100 h-1 w-full">

        </div>

    </div>

    </Link>
    
    
    
}
