import {z} from 'zod'
export const signupBody=z.object({
    email:z.string().email(),
    password:z.string().min(6),
    name:z.string().optional( )
})


export const signinBody=z.object({
    email:z.string().email(),
    password:z.string().min(6),
    
})
export const updateBlogInput=z.object({
    title:z.string(),
    content:z.string(),
    id:z.string()
})
export const createBlog=z.object({
    title:z.string(),
    content:z.string()
    
})

export type SigninBody=z.infer<typeof signinBody>
export type SignUpBody=z.infer<typeof signupBody>
export type updateBlog=z.infer<typeof updateBlogInput>
export type createBlog=z.infer<typeof createBlog>

