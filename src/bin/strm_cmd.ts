import { spawn } from 'child_process'
export function strm_cmd({ path }: { path: string }) {
    const stream = new ReadableStream({
        start(controller) {
            const child = spawn('/bin/sh', [path]);
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

    return stream
}