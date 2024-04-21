import { Anchor, Flex, Stack, Title } from "@mantine/core";
import Image from "next/image";

export default function Home() {
  return (
    <Stack>
      <Flex justify={"space-between"} p={"md"}>
        <Title>Wibu App</Title>
        <Flex wrap={'wrap'} gap={4}>
          <Anchor href={'/dashboard'}>Dashboard</Anchor>
        </Flex>
      </Flex>
    </Stack>

  );
}
