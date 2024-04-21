'use client'

import { Title } from "@mantine/core"

export default function Project({ listProject }: { listProject: any[] }) {
    return <>
        <Title>Project</Title>
        {JSON.stringify(listProject)}
    </>
}