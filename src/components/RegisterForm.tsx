import React, { useState } from "react";
import { useFormik } from "formik";
import { Flex, Checkbox, Text, Button, Link, Input } from "@chakra-ui/react";

import api from "../api/api";

async function registerUser(email: string, password: string) {
  const response = await api.post("/users", {
    email,
    password,
  });
  console.log(response);
}

function RegisterForm() {
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
        <Text ml={2}>I agree to sell my privacy</Text>
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
