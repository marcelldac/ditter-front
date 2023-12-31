import "@/styles/globals.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

const colors = {
  brand: {
    900: "#1a365d",
    800: "153e75",
    700: "2a69ac",
  },
};

export const theme = extendTheme({ colors });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
