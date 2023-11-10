import { useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Link,
  Switch,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export default function LoginForm() {
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const { toggleColorMode } = useColorMode();

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Box textAlign="right">
          <Switch onChange={toggleColorMode} />
        </Box>
        <Heading mb={6}>Login</Heading>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("ok");
          }}
        >
          <Input
            name="email"
            placeholder="johndoe@email.com"
            variant="filled"
            mb={3}
            type="email"
          />
          <Input
            name="password"
            placeholder="*************"
            variant="filled"
            mb={6}
            type="password"
          />
          <Button type="submit" colorScheme="teal">
            Login
          </Button>
          <Box textAlign="center" mt={5} color="gray.500">
            <Link href="/register">Create an account</Link>
          </Box>
        </form>
      </Flex>
    </Flex>
  );
}
