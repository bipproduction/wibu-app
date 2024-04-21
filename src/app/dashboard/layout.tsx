import { ButtonLogout } from '@/ui/ButtonLogout'
import { Login } from '@/ui/Login'
import { Anchor, Button, Flex, Stack, Title } from '@mantine/core'
import { cookies } from 'next/headers'

export default function Layout({ children }: { children: React.ReactNode }) {
    const token = cookies().get('token') || null

    if (!token) return <Login />
    return <Stack>
        <Flex justify={'space-between'} p={"md"}>
            <Stack>
                <Title>Dashboard</Title>
                <Flex gap={`md`}>
                    <Anchor href={'/dashboard'}>Home</Anchor>
                    <Anchor href={'/dashboard/apps'}>Apps</Anchor>
                </Flex>
            </Stack>
            <Flex>
                <ButtonLogout />
            </Flex>
        </Flex>
        {children}
    </Stack>
}