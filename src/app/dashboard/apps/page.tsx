
import AppsView from "@/ui/AppsView";
import Project from "@/ui/Project";
import Server from "@/ui/Server";
import appASetting from "@/util/app_setting";
import { Stack, Title } from "@mantine/core";


export default async function Page({ params }: any) {
    return <Stack>
        <AppsView />
        <Project />
        <Server />
    </Stack>
}