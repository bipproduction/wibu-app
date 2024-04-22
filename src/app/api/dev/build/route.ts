import build from '@/bin/build';
import appASetting from '@/util/app_setting';
import { spawn } from 'child_process'

export async function GET(req: Request) {
    const cmd = new URL(req.url).searchParams.get('cmd')
    if (appASetting.isLocal) return new Response("Not Available on Local", { status: 500 })

    if (cmd) return new Response("OK", { status: 200 })

    const stream = new ReadableStream({
        start(controller) {
            const child = spawn('/bin/sh', ['-c', "git pull origin main && yarn build && pm2 restart wibu-app_3025"]);
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


