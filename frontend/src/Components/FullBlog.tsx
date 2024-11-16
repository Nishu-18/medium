import { Blog } from '../Hooks'


import {Appbar} from './Appbar'
import { Avatar } from './Avatar'
export function FullBlog({blog}:{blog:Blog}){
    
    
    
    
    
    return <div>
        <Appbar></Appbar>
        <div className='flex justify-center'>
            <div className='grid grid-cols-12 px-10 w-full pt-200 px-10 pt-12'>
                <div className='col-span-8'>
                    <div className='text-5xl font-extrabold'>
                        {blog.title}

                    </div>
                    <div className='text-slate-500 pt-2'>
                        Post on 2nd december 2024
                    </div>
                    <div className='pt-4 flex'>
                        {blog.content}
                    </div>
                    
                </div>
                <div className='col-span-1'></div>
                <div className='col-span-3 '>
                    <div className='text-slate-600 text-xl mb-2'>Author</div>
                    <div className='flex gap-2'>
                        <Avatar size='big' name={blog.author.name}/>
                    <div className='text-xl font-bold'>{blog.author.name}</div>


                    </div>
                
                <div className='text-slate-500 pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum sed iste dolor fugit? Quaerat fuga repudiandae eius illum labore ex alias distinctio nisi aliquid. Tempora quibusdam magni beatae sequi quasi!</div>

                </div>
                
            </div>
        </div>
        
    </div>
}