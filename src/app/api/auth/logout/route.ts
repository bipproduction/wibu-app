
import { cookies } from 'next/headers'
export function GET() {
    cookies().set('token', '', { maxAge: 0 })
    cookies().delete('token')
    return Response.json({
        success: true
    }, { status: 200 })
}