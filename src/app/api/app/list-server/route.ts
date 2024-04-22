import { spawn } from 'child_process'
import fs from 'fs'
export async function GET() {
    try {
        const dir = await fs.promises.readdir('/etc/nginx/sites-enabled')
        return Response.json(dir)
    } catch (error) {
        return Response.json([])
    }
}
