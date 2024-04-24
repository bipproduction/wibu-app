import build from '@/bin/build';
import appASetting from '@/util/app_setting';
import { spawn } from 'child_process'

var onProgress = false

export async function GET(req: Request) {
    if (onProgress) return new Response("please wait, app is In Used by other !", { status: 500 })
    onProgress = true
    const cmd = new URL(req.url).searchParams.get('cmd')
    // if (appASetting.isLocal) return new Response("Not Available on Local", { status: 500 })

    if (cmd) return new Response(cmd, { status: 200 })

    const stream = new ReadableStream({
        start(controller) {
            const child = spawn('/bin/sh', ['bin/build.sh']);
            // Handle stdout data from the child process
            child.stdout.on('data', (data) => {
                console.log(data.toString())
                // Push data into the stream
                controller.enqueue(data);
            });

            child.stderr.on('data', (data) => {
                console.log(data.toString())
                // Push data into the stream
                controller.enqueue(data);
            })
            // Handle the end of the child process
            child.on('close', () => {
                onProgress = false
                console.log("selesai")
                // Close the stream
                controller.close();
            });
        }
    });

    // Return the response with the stream
    return new Response(stream, {
        headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
        },
    });

}


