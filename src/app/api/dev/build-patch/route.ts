import { header_strm } from "@/bin/header_stream";
import { strm_cmd } from "@/bin/strm_cmd";
import { revalidatePath } from "next/cache";
import { spawn } from 'child_process'

export async function GET(req: Request) {
    try {
        await new Promise<void>((resolve, reject) => {
            const child = spawn('/bin/sh', ['-c', 'yarn dev --port 3335']);
            // Handle stdout data from the child process
            child.stdout.on('data', (data) => {
                console.log(data.toString())
            })

            child.stderr.on('data', (data) => {
                console.log(data.toString())
            })

            setTimeout(() => {
                resolve()
                child.kill('SIGHUP')
            }, 5000)

        })

        return new Response("OK")
    } catch (error) {
        return new Response(error?.toString())
    }

}