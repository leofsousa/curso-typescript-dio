import { Box, Heading, Input } from '@chakra-ui/react';
export const Card = () => {
  return (
    <Box
      background="#ffffff"
      borderRadius="25px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Heading as="h1" size="lg" textAlign="center" mb={6}>
        Faça seu Login
      </Heading>
      <Input placeholder="email" />
      <Input placeholder="password" />
    </Box>
  );
};
