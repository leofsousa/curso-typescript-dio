import { Box, Button, Heading, Input, VStack, Center } from "@chakra-ui/react";
export const Card = () => {
  return (
    <Box
      background="#ffffff"
      borderRadius="25px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      h="1/2"
      w="1/2"
    >
      <Heading as="h1" size="lg" textAlign="center" mb={6} color="black">
        Faça seu Login
      </Heading>
      <VStack margin={6}>
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Button bg="#5C9A93" w="5/6">
          {" "}
          Entrar
        </Button>
      </VStack>
    </Box>
  );
};
