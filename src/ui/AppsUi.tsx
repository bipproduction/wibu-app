'use client'

import { Card, Flex, Paper, Stack, Text, Title } from "@mantine/core"

export default function AppsUi({ listApp }: { listApp: any[] }) {

    return <Stack gap={0}>
        <Title>Apps</Title>
        <Flex wrap={'wrap'} gap={4}>
            {JSON.stringify(listApp)}
        </Flex>
    </Stack>
}