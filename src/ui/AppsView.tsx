'use client'
import moment from 'moment'
import { MODEL_PM2 } from "@/models/PM2"
import { ActionIcon, Card, Center, Flex, LoadingOverlay, Paper, Stack, Table, Text, Title } from "@mantine/core"
import { MdRestore, MdStop } from 'react-icons/md'
import { useShallowEffect } from '@mantine/hooks'
import { useState } from 'react'

export default function AppsView() {
    const [listApp, setListApp] = useState<MODEL_PM2[]>([])
    const [loadingPm2, setLoadingPm2] = useState(false)

    useShallowEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        await fetch(`/api/app/list-app`).then(res => res.json()).then(setListApp)
    }

    const restartApp = async (app: string) => {
        setLoadingPm2(true)
        await fetch(`/api/dev/pm2/restart?app=${app}`)
        await loadData()
        setLoadingPm2(false)
    }

    const stopApp = async (app: string) => {
        setLoadingPm2(true)
        await fetch(`/api/dev/pm2/stop?app=${app}`)
        await loadData()
        setLoadingPm2(false)
    }

    return <Stack gap={0} p={"md"} >
        <Title>Apps</Title>
        <Stack pos={"relative"}>
            <Table striped border={1} p={"md"} highlightOnHover highlightOnHoverColor='yellow'>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>no</Table.Th>
                        <Table.Th>name</Table.Th>
                        <Table.Th>pid</Table.Th>
                        <Table.Th>status</Table.Th>
                        <Table.Th>cpu</Table.Th>
                        <Table.Th>mem</Table.Th>
                        <Table.Th>time</Table.Th>
                        <Table.Th>action</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {
                        listApp.map((app, index) => {
                            return <Table.Tr key={index} >
                                <Table.Td>{index + 1}</Table.Td>
                                <Table.Td>{app.name}</Table.Td>
                                <Table.Td>{app.pid}</Table.Td>
                                <Table.Td bg={app.pm2_env.status === "online" ? "green" : "red"} >{app.pm2_env.status}</Table.Td>
                                <Table.Td >{app.monit.cpu}</Table.Td>
                                <Table.Td>{app.monit.memory}</Table.Td>
                                <Table.Td>{moment(app.pm2_env.created_at).format('YYYY-MM-DD HH:mm:ss')}</Table.Td>
                                <Table.Td>
                                    <Flex gap={"md"}>
                                        <ActionIcon disabled={loadingPm2} onClick={() => restartApp(app.name)}>
                                            <MdRestore />
                                        </ActionIcon>
                                        <ActionIcon disabled={loadingPm2} onClick={() => stopApp(app.name)}>
                                            <MdStop />
                                        </ActionIcon>
                                    </Flex>
                                </Table.Td>
                            </Table.Tr>
                        })
                    }
                </Table.Tbody>
            </Table>
            <Center><LoadingOverlay visible={listApp.length === 0} /></Center>
        </Stack>
    </Stack>
}