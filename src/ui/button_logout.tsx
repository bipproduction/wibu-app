'use client'
import { Button, Flex, Modal, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Swal from 'sweetalert2'

export function ButtonLogout() {
    const [opened, { open, close }] = useDisclosure(false)

    async function _logout() {
        const res = await fetch('/api/auth/logout')
        if (res.ok) {
            return location.reload()
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
    }
    return <Stack>
        <Button variant="subtle" onClick={open}>
            LOGOUT
        </Button>
        <Modal opened={opened} onClose={close} title="Logout">
            <p>Are you sure you want to log out?</p>
            <Flex justify={`space-between`}>
                <Button onClick={close} variant="subtle">CANSEL</Button>
                <Button onClick={_logout} color="red">LOGOUT</Button>
            </Flex>
        </Modal>
    </Stack>
}