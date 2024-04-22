'use client'
import appASetting from "@/util/app_setting";
import { Box, Button, Code, Flex, Grid, NavLink, SimpleGrid, Stack, Text, Textarea, Title } from "@mantine/core";
import { useState } from "react";
import { MdBuild, MdDownload, MdGite, MdPushPin } from "react-icons/md";

export default function DevView({ isLocal }: { isLocal: boolean }) {
    const [loadingPush, setLoadingPush] = useState(false)
    const [loadingpull, setLoadingPull] = useState(false)
    const [loadingBuild, setLoadingBuild] = useState(false)
    const [logText, setlogText] = useState("")

    async function onPush() {
        let tmpLog = "... \n"
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

            tmpLog += decoder.decode(value) + "\n"
            setlogText(tmpLog)
        }

        setLoadingPush(false)

    }

    async function onPull() {
        let tmpLog = "... \n"
        setLoadingPull(true)
        const res = await fetch('/api/dev/pull', {
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

            tmpLog += decoder.decode(value) + "\n"
            setlogText(tmpLog)
        }

        setLoadingPull(false)

    }

    async function onBuild() {
        let tmpLog = "... \n"
        setLoadingBuild(true)

        const res = await fetch('/api/dev/build', {
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

            tmpLog += decoder.decode(value) + "\n"
            setlogText(tmpLog)
        }

        setLoadingBuild(false)

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
                <Stack bg={"black"} p={"md"} h={"100%"} w={"100%"} style={{ overflow: "auto" }}>
                    <pre>
                        <Text>{logText}</Text>
                    </pre>
                </Stack>
            </Grid.Col>
        </Grid>
    </Stack>
}