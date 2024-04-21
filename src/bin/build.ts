'use server'
import { spawn } from 'child_process'
export default async function build() {
    // Create a new ReadableStream
    const stream = new ReadableStream({
        start(controller) {
            const child = spawn('/bin/sh', ['-c', 'git pull origin main && yarn build && pm2 restart wibu-app_3025']);
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