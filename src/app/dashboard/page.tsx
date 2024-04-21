import { Anchor, Flex, Stack, Title } from "@mantine/core";
import { MdHome } from 'react-icons/md'

export default function Page() {
    return <Stack>
        <Flex justify={"space-between"} p={"md"}>
            <Flex>
                <Title>Home</Title>
            </Flex>
        </Flex>
    </Stack>
}