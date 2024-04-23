import { strmCmd } from '@/bin/strm_cmd'
import { spawn } from 'child_process'

export async function GET() {
    const strm = strmCmd({ cmd: 'pm2 status' })
    return new Response(strm, {
        headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
        },
    })
}