import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode,sign,verify } from 'hono/jwt'
import { userRouter } from './routes/user'
import { postRouter } from './routes/post'

const app = new Hono()
app.use('/*', cors())
app.route("api/v1/user",userRouter)
app.route("api/v1/post",postRouter)




















export default app


