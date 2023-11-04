import React from "react";
import { useFormik } from "formik";
import {
  Flex,
  Checkbox,
  Text,
  Button,
  Link,
  Input,
  useToast,
} from "@chakra-ui/react";

import api from "@/api/api";

function RegisterForm() {
  const toast = useToast();

  async function registerUser(email: string, password: string) {
    try {
      const response = await api.post("/users", {
        email,
        password,
      });
      console.log(response);
      if (response.status == 201) {
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      registerUser(values.email, values.password);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        placeholder="Your e-mail"
        variant="filled"
        mb={3}
        type="email"
        id="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <Input
        placeholder="Your password"
        variant="filled"
        mb={3}
        type="password"
        required
        id="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <Input
        placeholder="Confirm password"
        variant="filled"
        type="password"
        required
      />
      <Flex direction="row" color="gray.500" my={8}>
        <Checkbox size="md" colorScheme="teal" />
        {/* TODO: Criar uma rota para linkar o termos e condições aqui (para o usuário clicar) */}
        <Text ml={2}>I accept the Terms and Conditions</Text>
      </Flex>
      <Flex
        mt={5}
        color="gray.500"
        justify="center"
        direction="column"
        alignItems="center"
      >
        <Link href="/">Already have an account?</Link>
        <Button colorScheme="teal" type="submit">
          Register
        </Button>
      </Flex>
    </form>
  );
}

export default RegisterForm;
