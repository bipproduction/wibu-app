import { spawn } from 'child_process'

/**
 * ### strm_cmd
 * - path: megarah ke file sh contoh: /bin/pm2_status.sh
 * - return: stream
 */
export function strm_cmd({ path, cmd }: { path?: string | null, cmd?: string | null }) {
    const stream = new ReadableStream({
        start(controller) {
            const child = spawn('/bin/sh', cmd ? ["-c", cmd] : [path!]);
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