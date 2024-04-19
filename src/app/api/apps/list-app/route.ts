import { spawn } from 'child_process'
import os from 'os'

export async function GET() {
    const child = spawn('/bin/sh', ["-c", "pm2 jlist"])
    let log: string[] = []
    child.stdout.on('data', (data) => {
        log = JSON.parse(`${data}`)
    })

    await new Promise(resolve => setTimeout(resolve, 1000))
    return Response.json({
        success: true,
        message: log,
    })
}