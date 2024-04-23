'use client'

import { Stack, Table, Title } from "@mantine/core"

export default function Server({ listServer }: { listServer: any[] }) {

    return <Stack gap={0} p={"md"}>
        <Title>List Server</Title>
        <Table border={1} highlightOnHover striped highlightOnHoverColor="yellow">
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>no</Table.Th>
                    <Table.Th>name</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                {
                    listServer.map((server, index) => {
                        return <Table.Tr key={index}>
                            <Table.Td>{index + 1}</Table.Td>
                            <Table.Td>{server}</Table.Td>
                        </Table.Tr>

                    })
                }
            </Table.Tbody>
        </Table>
    </Stack>
}