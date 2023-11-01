import {
  Box,
  Flex,
  Heading,
  Switch,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import RegisterForm from "@/components/RegisterForm";

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
        <RegisterForm />
      </Flex>
    </Flex>
  );
}
