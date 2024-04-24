'use client'
import { strmFetch } from "@/bin/strm_fetch";
import appASetting from "@/util/app_setting";
import { Box, Button, Center, Code, Flex, Grid, Loader, LoadingOverlay, NavLink, SimpleGrid, Stack, Text, Textarea, Title } from "@mantine/core";
import { useState } from "react";
import { MdBuild, MdDownload, MdGite, MdNote, MdPushPin } from "react-icons/md";

export default function DevView({ isLocal }: { isLocal: boolean }) {
    // const [loadingPush, setLoadingPush] = useState(false)
    // const [loadingpull, setLoadingPull] = useState(false)
    // const [loadingBuild, setLoadingBuild] = useState(false)
    const [logText, setlogText] = useState("")

    const [loading, setLoading] = useState(false)

    async function onPush() {
        setlogText("push ...")
        let tmpLog = ""
        // setLoadingPush(true)
        setLoading(true)
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

        // setLoadingPush(false)
        setLoading(false)

    }

    async function onPull() {
        setlogText("pull ...")
        let tmpLog = ""
        // setLoadingPull(true)
        setLoading(true)
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

        // setLoadingPull(false)
        setLoading(false)

    }
    async function onBuild() {
        setlogText("build ...")
        let tmpLog = ""
        // setLoadingBuild(true)
        setLoading(true)
        await new Promise(resolve => setTimeout(resolve, 1000))
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

        // setLoadingBuild(false)
        setLoading(false)

    }

    const onPm2Status = async () => {
        setLoading(true)
        await strmFetch({ path: "/api/dev/pm2/status", setlogText })
        setLoading(false)
    }

    return <Stack>
        <Grid>
            <Grid.Col span={3}>
                <NavLink leftSection={<MdGite />} label={"GIT"} opened={true}  >
                    {isLocal && <NavLink onClick={onPush} leftSection={<MdPushPin />} label={"git push"} disabled={loading} />}
                    {!isLocal && <NavLink onClick={onPull} leftSection={<MdDownload />} label={"git pull"} disabled={loading} />}
                    <NavLink onClick={onBuild} leftSection={<MdBuild />} label={"build"} disabled={loading} />
                    <NavLink onClick={onPm2Status} leftSection={<MdNote />} label={"pm2 status"} disabled={loading} />
                </NavLink>

            </Grid.Col>
            <Grid.Col p={"md"} span={9} pos={"relative"}>
                <Stack
                    bg={"black"}
                    p={"md"}
                    h={"100vh"}
                    w={"100%"}
                    pos={"relative"}
                    style={{ overflow: "auto" }}
                    c={"white"} mah={"100vh"}>
                    <Code
                        w={"100%"}
                        bg={"black"}
                        c={"green"}>
                        <pre>
                            {logText}
                        </pre>
                    </Code>
                    {loading && <Box pos={"absolute"} right={10} top={10}   >
                        <Loader />
                    </Box>}
                </Stack>
            </Grid.Col>
        </Grid>

    </Stack>
}