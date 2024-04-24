'use client'

import { Center, LoadingOverlay, Stack, Table, Title } from "@mantine/core"
import { useShallowEffect } from "@mantine/hooks"
import moment from "moment"
import { useState } from "react"

export default function Project() {
    const [listProject, setListProject] = useState<any[] | null>(null)

    useShallowEffect(() => {
        fetch(`/api/app/list-project`).then(res => res.json()).then(setListProject)
    }, [])

    return <Stack gap={0} p={"md"}>
        <Title>Project</Title>
        <Stack pos={"relative"} gap={0}>
            <Table border={1} highlightOnHover striped highlightOnHoverColor="yellow">
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>no</Table.Th>
                        <Table.Th>name</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {
                        listProject?.map((project, index) => {
                            return <Table.Tr key={index}>
                                <Table.Td>{index + 1}</Table.Td>
                                <Table.Td>{project}</Table.Td>
                            </Table.Tr>

                        })
                    }
                </Table.Tbody>
            </Table>
            <Center>
                <LoadingOverlay visible={listProject === null} />
            </Center>
        </Stack>
    </Stack>
}