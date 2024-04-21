import { spawn } from 'child_process'

export async function GET() {
    const child = spawn('/bin/sh', ["-c", "pm2 jlist"])
    let log = ""

    child.stdout.on('data', (data) => {
        try {
            log += JSON.parse(data.toString())
        } catch (error) {
            console.log(error)
        }
    })

    child.stderr.on('data', (data) => {
        console.log(data.toString())
    })

    await new Promise(resolve => setTimeout(resolve, 1000))

    try {
        return Response.json(JSON.parse(log))
    } catch (error) {
        return Response.json([])
    }

}