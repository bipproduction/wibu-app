import { header_strm } from "@/bin/header_stream";
import { strm_cmd } from "@/bin/strm_cmd";
import { revalidatePath } from "next/cache";
import { spawn } from 'child_process'

export async function GET(req: Request) {
    const app = new URL(req.url).searchParams.get('app')
    if (app) return new Response(app)

    const cmd = `pm2 restart ${app} --update-env`
    const stream = strm_cmd({ cmd })
    return new Response(stream, { headers: header_strm })

}