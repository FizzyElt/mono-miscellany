import { AbsoluteCenter, Box, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router";
export default function RootPage() {
  return (
    <Box h="50px">
      <AbsoluteCenter>
        <HStack>
          <Link to="jotai/step1">
            <Text>Jotai</Text>
          </Link>
          <Link to="xstate/step1">
            <Text>Xstate</Text>
          </Link>
          <Link to="zustand/step1">
            <Text>Zustand</Text>
          </Link>
        </HStack>
      </AbsoluteCenter>
    </Box>
  );
}
