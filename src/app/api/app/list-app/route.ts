import { spawn } from 'child_process'


export async function GET() {
    const child = spawn('/bin/sh', ["-c", "pm2 jlist"])
    let log = ""

    child.stdout.on('data', (data) => {
        log += data.toString()
        // console.log(log)
    })

    child.stderr.on('data', (data) => {
        // console.log(data.toString())
    })

    await new Promise(resolve => setTimeout(resolve, 2000))

    try {
        return Response.json(JSON.parse(log))
    } catch (error) {
        // console.log(error)
        return Response.json([])
    }

}

