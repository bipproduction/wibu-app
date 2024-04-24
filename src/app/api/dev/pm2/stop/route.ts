import { header_strm } from "@/bin/header_stream"
import { strm_cmd } from "@/bin/strm_cmd"

export async function GET(req: Request) {
    const app = new URL(req.url).searchParams.get('app')
    if (!app) return new Response("Require app name", { status: 400 })
    const strm = strm_cmd({ cmd: `pm2 stop ${app} ` })
    return new Response(strm, { headers: header_strm })
}