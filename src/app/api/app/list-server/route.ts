import { spawn } from 'child_process'
import fs from 'fs'
export async function GET() {
    const dir = await fs.promises.readdir('/etc/nginx/sites-enabled')
    // const child = spawn('/bin/sh', ["-c", "ls /etc/nginx/sites-enabled"])

    // let log: string[] = []

    // child.stdout.on('data', (data) => {
    //     log = `${data}`.split('\n').filter(x => x !== '')
    // })

    // child.stderr.on('data', (data) => {
    //     console.log(data.toString())
    // })

    // await new Promise(resolve => setTimeout(resolve, 1000))

    return Response.json(dir)
}