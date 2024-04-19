import { spawn } from 'child_process'
export async function GET() {
    const child = spawn('/bin/sh', ["-c", "ls ./.."])

    let log: string[] = []
    child.stdout.on('data', (data) => {
        log = `${data}`.split('\n').filter(x => x !== '')
    })

    child.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`)
    })

    await new Promise(resolve => setTimeout(resolve, 2000))
    return Response.json({
        success: true,
        message: log
    })
}