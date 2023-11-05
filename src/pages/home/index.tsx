import { GetServerSideProps } from "next";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { parseCookies } from "nookies";
import { AuthContext } from "@/contexts/AuthContext";
import { api } from "@/services/api";
import { getAPIClient } from "@/services/axios";

export default function Home() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get("/users");
  }, []);

  return (
    <>
      <Head>
        <title>Home - System</title>
      </Head>
      <h1>Home</h1>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);
  const { ["nextauth.token"]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  await apiClient.get("/users");

  return {
    props: {},
  };
};
