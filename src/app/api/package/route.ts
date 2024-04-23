const root_path = process.cwd()
import MODEL_PACKAGE from '@/models/PACKAGE'
import fs from 'fs'
import path from 'path'

export async function GET() {
    const pkg: MODEL_PACKAGE = JSON.parse(fs.readFileSync(path.join(root_path, 'package.json'), 'utf8'))
    return Response.json(pkg)
}