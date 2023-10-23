import {
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  Switch,
  useColorModeValue,
} from "@chakra-ui/react";

export default function LoginForm() {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
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
        <Switch onChange={toggleColorMode} />
      </Flex>
    </Flex>
  );
}
