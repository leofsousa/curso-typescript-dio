import {
  Box,
  Button,
  Center,
  Code,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Card } from "./components/Card";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Box display="flex" minH="dvh" justifyContent="center" pt={50}>
        <Card />
      </Box>
    </>
  );
}

export default App;
