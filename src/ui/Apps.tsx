'use client'

import { Card, Flex, Paper, Stack, Text, Title } from "@mantine/core"
import { useShallowEffect } from "@mantine/hooks"
import { useState } from "react"

export default function AppsUi({ listApp }: { listApp: any[] }) {

    return <Stack gap={0}>
        <Title>Apps</Title>
        <Flex wrap={'wrap'} gap={4}>
            {JSON.stringify(listApp)}
        </Flex>
    </Stack>
}