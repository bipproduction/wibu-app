'use client'

import { Stack, Title } from "@mantine/core"

export default function Server({ listServer }: { listServer: any[] }) {

    return <Stack>
        <Title>List Server</Title>
        {JSON.stringify(listServer)}
    </Stack>
}