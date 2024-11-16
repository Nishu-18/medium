import { Appbar } from "../Components/Appbar";
import { BlogCard } from "../Components/BlogCard";
import { BlogSkeleton } from "../Components/BlogSkeleton";
import { useBlogs } from "../Hooks";

export function Blogs(){
    const {loading,blogs}=useBlogs()
   
    
    
    
    if(loading||!blogs){
        return <div>
            <Appbar/>
            <div className="flex justify-center">
           
           <div>
           <BlogSkeleton/>
           <BlogSkeleton/>
           <BlogSkeleton/>
           <BlogSkeleton/>
           <BlogSkeleton/>
           <BlogSkeleton/>

           </div>
           

       </div>

        </div>
        
    }
    return <div>
        <Appbar ></Appbar>
        <div className=" flex justify-center">
            <div>
                {blogs.map(blog=><BlogCard id={blog.id} name={blog.author.name||"anonymous"} publishedDate="22-08-2024" title={blog.title} content={blog.content}></BlogCard>)}
            {/* {blogs.map(function(item){
                return <BlogCard name={item.author.name||"anonymous"} publishedDate="22-08-2024" title={item.title} content={item.content}></BlogCard>
            })} */}

            </div>
       
        </div>
        
    </div>
}