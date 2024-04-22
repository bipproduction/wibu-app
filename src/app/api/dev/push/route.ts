import appASetting from "@/util/app_setting";
import { spawn } from 'child_process'

var onProgress = false

export async function GET() {
    if (onProgress) return new Response("please wait, app is In Used by other !", { status: 500 })
    if (!appASetting.isLocal) return new Response("Not Available on Server", { status: 500 })

    onProgress = true
    const stream = new ReadableStream({
        start(controller) {
            const child = spawn('/bin/sh', ['bin/push.sh'])
            // Handle stdout data from the child process
            child.stdout.on('data', (data) => {
                // Push data into the stream
                controller.enqueue(data);
            });

            child.stderr.on('data', (data) => {
                // Push data into the stream
                controller.enqueue(data);
            })

            // Handle the end of the child process
            child.on('close', () => {
                // Close the stream
                onProgress = false
                controller.close();
            })
        }
    })

    // Return the response with the stream
    return new Response(stream, {
        headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
        },
    })

}