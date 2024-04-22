import PACKAGE from '@/models/PACKAGE'
import { ButtonLogout } from '@/ui/ButtonLogout'
import { LoginUi } from '@/ui/LoginUi'
import appASetting from '@/util/app_setting'
import { Anchor, Button, Flex, Stack, Text, Title } from '@mantine/core'
import { cookies } from 'next/headers'
import { MdHome } from 'react-icons/md'


export default async function Layout({ children }: { children: React.ReactNode }) {
    const token = cookies().get('token') || null
    const pkg: PACKAGE = await fetch(`${appASetting.url}/api/package`).then(res => res.json())

    if (!token) return <LoginUi />
    return <Stack>
        <Flex justify={'space-between'} p={"md"}>
            <Stack>
                <Flex>
                    <Anchor href="/">
                        <MdHome size={42} />
                    </Anchor>
                    <Flex gap={"md"} align={'end'}>
                        <Title>Dashboard</Title>
                        <Text>{pkg.version}</Text>
                    </Flex>
                </Flex>
                <Flex gap={`md`}>
                    <Anchor href={'/dashboard'}>Home</Anchor>
                    <Anchor href={'/dashboard/apps'}>Apps</Anchor>
                    <Anchor href={'/dashboard/dev'}>Dev</Anchor>
                </Flex>
            </Stack>
            <Flex>
                <ButtonLogout />
            </Flex>
        </Flex>
        {children}

    </Stack>
}