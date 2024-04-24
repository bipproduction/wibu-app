'use client'

import { Center, LoadingOverlay, Stack, Table, Title } from "@mantine/core"
import { useShallowEffect } from "@mantine/hooks"
import { useState } from "react"

export default function Server() {
    const [listServer, setListServer] = useState<any[] | null>(null)

    useShallowEffect(() => {
        fetch(`/api/app/list-server`).then(res => res.json()).then(setListServer)
    }, [])

    return <Stack gap={0} p={"md"}>
        <Title>List Server</Title>
        <Stack gap={0} pos={"relative"}>
            <Table border={1} highlightOnHover striped highlightOnHoverColor="yellow">
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>no</Table.Th>
                        <Table.Th>name</Table.Th>
                        <Table.Th>text</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {
                        listServer?.map((server, index) => {
                            return <Table.Tr key={index}>
                                <Table.Td>{index + 1}</Table.Td>
                                <Table.Td>{server.name}</Table.Td>
                                <Table.Td>{server.text}</Table.Td>
                            </Table.Tr>

                        })
                    }
                </Table.Tbody>
            </Table>
            <Center>
                <LoadingOverlay visible={listServer === null} />
            </Center>
        </Stack>
    </Stack>
}