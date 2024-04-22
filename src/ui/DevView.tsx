'use client'
import appASetting from "@/util/app_setting";
import { Box, Button, Code, Flex, Grid, NavLink, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";
import { MdBuild, MdDownload, MdGite, MdPushPin } from "react-icons/md";

export default function DevView({ isLocal }: { isLocal: boolean }) {
    const [loadingPush, setLoadingPush] = useState(false)
    const [loadingpull, setLoadingPull] = useState(false)
    const [loadingBuild, setLoadingBuild] = useState(false)
    const [logText, setlogText] = useState("")

    async function onPush() {
        let tmpLog= ""
        setLoadingPush(true)
        const res = await fetch('/api/dev/push', {
            method: "GET",
            headers: {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
            },
        })

        const reader = res.body!.getReader()

        const decoder = new TextDecoder()

        while (true) {
            const { done, value } = await reader.read()
            if (done) break

            tmpLog += decoder.decode(value)
            setlogText(tmpLog)
            // setlogText(decoder.decode(value))
        }

        setLoadingPush(false)

    }

    async function onPull() {
        setLoadingPull(true)

    }

    async function onBuild() {
        setLoadingBuild(true)

    }

    return <Stack>
        <Grid>
            <Grid.Col w={300} span={"content"}>
                <NavLink leftSection={<MdGite />} label={"GIT"} opened={true}  >
                    {isLocal && <NavLink onClick={onPush} leftSection={<MdPushPin />} label={"git push"} disabled={loadingPush} />}
                    {!isLocal && <NavLink onClick={onPull} leftSection={<MdDownload />} label={"git pull"} disabled={loadingpull} />}
                    <NavLink onClick={onBuild} leftSection={<MdBuild />} label={"build"} disabled={loadingBuild} />
                </NavLink>

            </Grid.Col>
            <Grid.Col p={"md"} c={"white"} span={"auto"}>
                <Stack bg={"black"} p={"md"}>
                    <Code bg={"black"} c={"white"}>{logText}</Code>
                </Stack>
            </Grid.Col>
        </Grid>
    </Stack>
}