import {
  Box,
  Flex,
  Heading,
  Switch,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import RegisterForm from "@/components/RegisterForm";
import Head from "next/head";

export default function Register() {
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Register - System</title>
      </Head>

      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
          <Box textAlign="right">
            <Switch onChange={toggleColorMode} />
          </Box>
          <Heading mb={6}>Register</Heading>
          <RegisterForm />
        </Flex>
      </Flex>
    </>
  );
}
