import DevView from "@/ui/DevView";
import appASetting from "@/util/app_setting";
import { Anchor, Card, Flex, Stack, Title } from "@mantine/core";

export default function Page() {
    return <Stack>
        <Title>DEV</Title>
        <DevView isLocal={appASetting.isLocal} />
    </Stack>
}