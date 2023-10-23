import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
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
        <Input
          placeholder="johndoe@email.com"
          variant="filled"
          mb={3}
          type="email"
        />
        <Input
          placeholder="*************"
          variant="filled"
          mb={6}
          type="password"
        />
        <Button colorScheme="teal">Login</Button>
      </Flex>
    </Flex>
  );
}
