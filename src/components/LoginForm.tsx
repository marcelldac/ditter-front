import { api } from "@/services/api";
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
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

type UserLogin = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const { toggleColorMode } = useColorMode();
  const { handleSubmit, register } = useForm<UserLogin>();
  const { push } = useRouter();

  const onSubmit: SubmitHandler<UserLogin> = (data) => {
    loginUser(data.email, data.password);
  };

  async function loginUser(email: string, password: string) {
    const response = await api.post("/authorization", {
      email,
      password,
    });

    if (response.status == 201) {
      console.log(response.data.token);
      return push("/home");
    }
    return alert("User does not exist");
  }

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Box textAlign="right">
          <Switch onChange={toggleColorMode} />
        </Box>
        <Heading mb={6}>Login</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("email", { required: true })}
            name="email"
            placeholder="johndoe@email.com"
            variant="filled"
            mb={3}
            type="email"
          />
          <Input
            {...register("password", { required: true })}
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
