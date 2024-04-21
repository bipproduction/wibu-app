import Project from "@/ui/Project";
import Server from "@/ui/Server";
import AppsUi from "@/ui/apps";
import appASetting from "@/util/app_setting";
import { Stack, Title } from "@mantine/core";
import { headers } from 'next/headers'


export default async function Page({ params }: any) {
    // console.log(appASetting.platform)

    try {
        const listApp = await fetch(`${appASetting.url}/api/app/list-app`).then(res => res.json())
        const listServer = await fetch(`${appASetting.url}/api/app/list-server`).then(res => res.json())
        const listProject = await fetch(`${appASetting.url}/api/app/list-project`).then(res => res.json())

        return <Stack>

            <AppsUi listApp={listApp}  />
            <Project listProject={listProject} />
            <Server listServer={listServer} />
        </Stack>
    } catch (error) {
        // console.log(error)
        return <>{JSON.stringify(error)}</>
    }
}