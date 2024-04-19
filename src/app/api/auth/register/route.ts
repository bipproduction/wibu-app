import prisma from "@/util/prisma"
export async function POST(req: Request) {

    const { name, email, password } = await req.json()

    const user = await prisma.users.findUnique({
        where: {
            email: email
        }
    })

    if (user) return Response.json({
        success: false,
        message: "User already exists"
    }, { status: 401 })

    await prisma.users.create({
        data: {
            name: name,
            email: email,
            password: password
        }
    })

    return Response.json({
        success: true,
        message: "User created",
    }, { status: 200 })

}
