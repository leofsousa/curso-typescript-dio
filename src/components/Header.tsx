import { Box, Heading } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box background="white" w="100%">
      <Heading
        fontSize="5xl"
        as="h1"
        color="black"
        textAlign="center"
        padding={10}
      >
        Dio Bank
      </Heading>
    </Box>
  );
};
