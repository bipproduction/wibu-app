'use client'

import { Stack, Table, Title } from "@mantine/core"
import moment from "moment"

export default function Project({ listProject }: { listProject: any[] }) {
    return <Stack gap={0} p={"md"}>
        <Title>Project</Title>
        <Table border={1} highlightOnHover striped highlightOnHoverColor="yellow">
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>no</Table.Th>
                    <Table.Th>name</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                {
                    listProject.map((project, index) => {
                        return <Table.Tr key={index}>
                            <Table.Td>{index + 1}</Table.Td>
                            <Table.Td>{project}</Table.Td>
                        </Table.Tr>

                    })
                }
            </Table.Tbody>
        </Table>
    </Stack>
}