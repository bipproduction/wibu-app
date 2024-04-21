const root_path = process.cwd()
import PACKAGE from '@/models/PACKAGE'
import fs from 'fs'
import path from 'path'

export async function GET() {
    const pkg: PACKAGE = JSON.parse(fs.readFileSync(path.join(root_path, 'package.json'), 'utf8'))
    return Response.json(pkg)
}