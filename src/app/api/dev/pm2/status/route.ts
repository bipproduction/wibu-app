import { header_strm } from "@/bin/header_stream"
import { strm_cmd } from "@/bin/strm_cmd"

export async function GET() {
    const strm = strm_cmd({ path: "bin/pm2_status.sh" })
    return new Response(strm, {
        headers: header_strm,
    })
}