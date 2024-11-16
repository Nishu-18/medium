  import { Hono } from "hono";

  import { PrismaClient } from '@prisma/client/edge'
  import { withAccelerate } from '@prisma/extension-accelerate'
  import { decode,sign,verify } from 'hono/jwt'
  import { createBlog,updateBlog, updateBlogInput } from "@nishchal_bhardwaj/medium";


  export const postRouter=new Hono<{
      Variables:{
      userID:string
  }}>();

  postRouter.use('/*',async(c,next)=>{
      const header=c.req.header("Authorization")
      //@ts-ignore
      const response=await verify(header,c.env.JWT_SECRET)
      if(response.id){
          //@ts-ignore
          c.set("userID",response.id)
        await next()
      }else{
        c.status(403)
        return c.json({
          error:"unauthorized"
        })
      }
    })


  postRouter.post('/',async(c)=>{
    const body=await c.req.json()
   
    

    const {success}=createBlog.safeParse(body);
      if(!success){
        c.status(411)
        return c.json({
          msg:"Input not correct"
        })
      }
    
      const authorId=c.get("userID")
      const prima=new PrismaClient({
          //@ts-ignore
          datasourceUrl:c.env.DATABASE_URL,
        }).$extends(withAccelerate())
        try{
          const post=  await prima.post.create({
              data:{
              title:body.title,
              content:body.content,
              authorId:authorId
              }
            })
      
          return c.json({
            id: post.id
      
          })

        }catch(e){
          console.log(e);
          
        }

    
  })

    postRouter.put('/',async (c)=>{
      const body=await c.req.json()
      const {success}=updateBlogInput.safeParse(body);
      if(!success){
        c.status(411)
        return c.json({
          msg:"Input not correct"
        })
      }
      
      const prima=new PrismaClient({
          //@ts-ignore
          datasourceUrl:c.env.DATABASE_URL,
        }).$extends(withAccelerate())

      const post=  await prima.post.update({
          where:{
              id:body.id
          },
          data:{
          title:body.title,
          content:body.content,
          authorId:"1",   
          }
        })

      return c.json({
        id: post.id

      })
      
  })
  postRouter.get('/bulk',async(c)=>{
    const prima=new PrismaClient({
        //@ts-ignore
        datasourceUrl:c.env.DATABASE_URL,
      }).$extends(withAccelerate())
    const blogs= await prima.post.findMany({
      
      select:{
        content:true,
        title:true,
        id:true,
        author:{
          select:{
            name:true
          }
        }
      }
      
      
      
    })
   
    
    return c.json({
        blogs   
    })
})
  postRouter.get('/:id',async (c)=>{
      const id= c.req.param('id')
      const prima=new PrismaClient({
          //@ts-ignore
          datasourceUrl:c.env.DATABASE_URL,
        }).$extends(withAccelerate())

      const blog=  await prima.post.findUnique({
        include:{
          author:{
            select:{
              name:true,
             
              
            }
          }
        },
          where:{
          id:id  
          }
        })
     
        
  
      return c.json({
        blog

      })
    
  })
    
    
    


