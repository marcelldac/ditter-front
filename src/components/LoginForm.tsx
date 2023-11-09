import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
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

import { api } from "@/services/api";
/* import { AuthContext } from "@/contexts/AuthContext"; */

export default function LoginForm() {
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const { toggleColorMode } = useColorMode();
  const { register, handleSubmit } = useForm();
  /* const { signIn } = useContext(AuthContext); */

  const [users, setUsers] = useState<any[]>([]);

  async function getUsers(): Promise<void> {
    const { data } = await api.get("/users");
    setUsers(data);
  }

  /* async function handleSignIn(data: any) {
    await signIn(data);
  } */

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Box textAlign="right">
          <Switch onChange={toggleColorMode} />
        </Box>
        <Heading mb={6}>Login</Heading>
        <form
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("ok");
            /* handleSubmit(handleSignIn) */
          }}
        >
          <Input
            {...register("email")}
            name="email"
            placeholder="johndoe@email.com"
            variant="filled"
            mb={3}
            type="email"
          />
          <Input
            {...register("password")}
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
