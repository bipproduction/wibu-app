'use client'
import { Button, Stack, TextInput, Title } from "@mantine/core";
import { useState } from "react";
import _ from "lodash"
import Swal from "sweetalert2";
import toast from "react-simple-toasts";

export function RegisterUi() {
    const [form, setForm] = useState({
        "name": '',
        "email": '',
        "password": ''
    })

    async function onRegister() {
        if (_.flatMap(form).includes('')) return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'All fields are required!',
        })

        const res = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })

        const data = await res.json()
        if (res.status === 200) {
            toast(data.message)
            await new Promise(resolve => setTimeout(resolve, 2000))
            location.reload()
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: data.message,
            })
        }

    }

    return <Stack>
        <Title>REGISTER</Title>
        <TextInput placeholder="Name" label="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
        <TextInput placeholder="Email" label="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
        <TextInput placeholder="Password" label="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
        <Button onClick={onRegister}>REGISTER</Button>
    </Stack>
}