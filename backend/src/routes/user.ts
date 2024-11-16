import { Hono } from "hono"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode,sign,verify } from 'hono/jwt'
import { signinBody, signupBody, SignUpBody } from "@nishchal_bhardwaj/medium"
import { use } from "hono/jsx"

export const userRouter=new Hono()



userRouter.post('/signup',async(c)=>{
    const body=await c.req.json()
    const {success}=signupBody.safeParse(body);
   
   
    
    if(!success){
      c.status(411)
      return c.json({
        msg:"Input not correct"
      })
    }
    
  
    
    const prisma=new PrismaClient({
      //@ts-ignore
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
  
   const user= await prisma.user.create({
    
    
      data:{
        name:body.name,
        email:body.email,
        password:body.password,
      }
    })
    
    
  
    //@ts-ignore
    const token= await sign({id:user.id},c.env.JWT_SECRET)
    return c.json({
      token:token,
      user
    })
  
  })


userRouter.post('/signin',async(c)=>{
    const body=await c.req.json()
    const {success}=signinBody.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({
        msg:"Input not correct"
      })
    }
  
    
    const prisma=new PrismaClient({
      //@ts-ignore
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
        const user=await prisma.user.findUnique(({
            where:{
              email:body.email,
              password:body.password
            }
          }))
          if(!user){
            c.status(403)
            return c.json({
              error:"user not found"
            })
        
          }
          //@ts-ignore
    const token= await sign({id:user.id},c.env.JWT_SECRET)
    return c.json({
      token:token
    })

    }catch(e){
       
            c.status(403)
            return c.json({
              error:"user not found"
            })
        
        
    }
    
    
  
  
    
  })