
import AppsView from "@/ui/AppsView";
import Project from "@/ui/Project";
import Server from "@/ui/Server";
import appASetting from "@/util/app_setting";
import { Stack, Title } from "@mantine/core";


export default async function Page({ params }: any) {
    try {
        const listApp = await fetch(`${appASetting.url}/api/app/list-app`).then(res => res.json())
        const listServer = await fetch(`${appASetting.url}/api/app/list-server`).then(res => res.json())
        const listProject = await fetch(`${appASetting.url}/api/app/list-project`).then(res => res.json())

        return <Stack>
            <AppsView listApp={listApp}  />
            <Project listProject={listProject} />
            <Server listServer={listServer} />
        </Stack>
    } catch (error) {
        return <>{JSON.stringify(error)}</>
    }
}