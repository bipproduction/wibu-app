import build from '@/bin/build';
import appASetting from '@/util/app_setting';
import { spawn } from 'child_process'

export async function GET() {
    if (appASetting.isLocal) return new Response("Not Available on Local", { status: 500 })

   const stream = await build()

    // Return the response with the stream
    return new Response(stream, {
        headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
        },
    });

}

// test


