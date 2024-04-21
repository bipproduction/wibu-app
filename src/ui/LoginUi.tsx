'use client'
import { Button, Center, Container, Stack, TextInput, Title } from "@mantine/core";
import { useState } from "react";
import Swal from "sweetalert2";
import _ from "lodash";
import { RegisterUi } from "./RegisterUi";


export function LoginUi() {

    const [isLogin, setIslogin] = useState(true)
    return <Container>
        <Center>
            <Stack>
                {isLogin ? <Stack>
                    <LoginView />
                    <Button onClick={() => setIslogin(false)} variant="subtle">REGISTER</Button>
                </Stack> : <Stack>
                    <RegisterUi />
                    <Button onClick={() => setIslogin(true)} variant="subtle">LOGIN</Button>
                </Stack>}

            </Stack>
        </Center>
    </Container>
}

function LoginView() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    async function onLogin() {
        if (_.flatMap(form).includes('')) return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'All fields are required!',
        })

        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })

        const data = await res.json()

        if (res.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Login successful',
            })
            await new Promise(resolve => setTimeout(resolve, 2000))
            return location.reload()
        }

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message,
        })
    }
    return <Stack gap={"md"}>
        <Title>LOGIN</Title>
        <TextInput placeholder="Email" label="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
        <TextInput placeholder="Password" label="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
        <Button onClick={onLogin}>LOGIN</Button>
    </Stack>
}