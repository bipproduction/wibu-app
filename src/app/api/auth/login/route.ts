import prisma from "@/util/prisma"
import { AES } from 'crypto-js'
import { cookies } from 'next/headers'
export async function POST(req: Request) {
    const cookie = cookies()
    const { email, password } = await req.json()
    const user = await prisma?.users.findUnique({
        where: {
            email: email
        }
    })

    if (!user) return Response.json({
        success: false,
        message: "User not found | Register first"
    }, { status: 401 })

    if (user.password !== password) return Response.json({
        success: false,
        message: "Wrong email or password"
    }, { status: 401 })

    const token = AES.encrypt(user.id, 'wibu').toString()
    await prisma.auth.upsert({
        where: {
            usersId: user.id
        },
        update: {
            token: token
        },
        create: {
            token: token,
            usersId: user.id
        }
    })
    cookies().set('token', token)
    
    return Response.json({
        success: true,
        token
    }, { status: 200 })

}