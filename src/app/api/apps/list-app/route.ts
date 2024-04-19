import { spawn } from 'child_process'

export async function GET() {
    const child = spawn('/bin/sh', ["-c", "pm2 jlist"])
    let log: any[] = []

    child.stdout.on('data', (data) => {
        try {
            console.log(data.toString())
            log = JSON.parse(data.toString().trim())
        } catch (error) {
            console.log(error)
        }
    })

    child.stderr.on('data', (data) => {
        console.log(data.toString())
    })

    await new Promise(resolve => setTimeout(resolve, 2000))

    return Response.json({
        success: true,
        message: log,
    })

}