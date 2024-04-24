import { spawn } from 'child_process'
import fs from 'fs'
export async function GET() {
    let list: any[] = []
    try {
        const dir = await fs.promises.readdir('/etc/nginx/sites-enabled')
        for (let ls of dir) {
            const text = await fs.promises.readFile(`/etc/nginx/sites-enabled/${ls}`, 'utf8')
            const data = {
                name: ls,
                text: text
            }
            list.push(data)
        }
        return Response.json(list)
    } catch (error) {
        return Response.json([])
    }
}
