import build from '@/bin/build';
import appASetting from '@/util/app_setting';

export async function GET(req: Request, { searchParams }: { searchParams: { cmd: string } }) {
    const cmd = "git pull origin main && yarn build && pm2 restart wibu-app_3025"
    if (appASetting.isLocal) return new Response("Not Available on Local", { status: 500 })

    const stream = build({ cmd: "ls" })

    // Return the response with the stream
    return new Response(searchParams.toString(), {
        headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
        },
    });

}


