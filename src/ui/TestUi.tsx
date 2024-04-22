'use client'

import { Button } from "@mantine/core"

export default function TestUi() {

    async function onTekan() {
        // stream fetch
        fetch('/api/dev/test', {
            method: "GET",
            headers: {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
            },
        }).then(res => res.text()).then(data => console.log(data))
    }
    return <>
        <Button onClick={onTekan}>Tekan</Button>
    </>
}