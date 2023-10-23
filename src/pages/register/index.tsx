import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Switch,
  useColorMode,
  useColorModeValue,
  Checkbox,
  Link,
  Text,
} from "@chakra-ui/react";

export default function Register() {
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const { toggleColorMode } = useColorMode();

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Box textAlign="right">
          <Switch onChange={toggleColorMode} />
        </Box>
        <Heading mb={6}>Register</Heading>
        <Input placeholder="Your e-mail" variant="filled" mb={3} type="email" />
        <Input
          placeholder="Your password"
          variant="filled"
          mb={3}
          type="password"
          required
        />
        <Input
          placeholder="Confirm password"
          variant="filled"
          type="password"
          required
        />
        <Flex direction="row" color="gray.500" my={8}>
          <Checkbox size="md" colorScheme="teal" />
          <Text>Concordo com os termos... blablabla</Text>
        </Flex>
        <Button colorScheme="teal">Register</Button>
        <Box textAlign="center" mt={5} color="gray.500">
          <Link href="/">Already have an account?</Link>
        </Box>
      </Flex>
    </Flex>
  );
}
