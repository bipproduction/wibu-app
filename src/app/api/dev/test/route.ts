import appASetting from '@/util/app_setting';
import { spawn } from 'child_process'


export async function GET() {
    if (appASetting.isLocal) return new Response("Not Available on Local", { status: 500 })
    const stream = new ReadableStream({
        start(controller) {
            const child = spawn('/bin/sh', ['bin/build.sh'])
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
                controller.close();
            })
        }
    })


    return new Response(stream, {
        headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
        },
    })
}