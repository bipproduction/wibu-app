import { spawn } from 'child_process'
export default function build({ cmd }: { cmd: string | null }) {
    // Create a new ReadableStream
    const stream = new ReadableStream({
        start(controller) {
            const child = spawn('/bin/sh', ['-c', cmd ?? "ls"]);
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
            });
        }
    });

    return stream
}