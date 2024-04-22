import { red } from './../../../../../node_modules/colors/index.d';
import appASetting from '@/util/app_setting';
import { spawn } from 'child_process'
import { URL } from 'url';



export async function GET(req: Request) {
    if (appASetting.isLocal) return new Response("Not Available on Local", { status: 500 })
    const cmd = new URL(req.url).searchParams.get('cmd')
    if (cmd) return new Response(cmd, { status: 200 })
    const stream = new ReadableStream({
        start(controller) {
            const child = spawn('/bin/sh', ['-c', 'bin/build.sh'])
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