import Head from "next/head";
import {
  Button,
  MantineProvider,
  Text,
  createEmotionCache,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import { withUrqlClient } from "next-urql";
import { SessionProvider, signIn } from "next-auth/react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Configure } from "react-instantsearch";

import "tailwindcss/tailwind.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import UserData from "../context/userdata";

function App(props) {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props;

  const myCache = createEmotionCache({
    key: "mantine",
    prepend: false,
  });

  return (
    <>
      <SessionProvider session={session}>
        <Head>
          <title>Page title</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>

        <MantineProvider
          emotionCache={myCache}
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: "dark",
            fontFamily: "Satoshi",
          }}
        >
          <Notifications />
          <UserData>
            <Component {...pageProps} />
          </UserData>
        </MantineProvider>
      </SessionProvider>
    </>
  );
}

export default withUrqlClient((_ssrExchange, ctx) => ({
  // ...add your Client options here
  url: process.env.NEXT_PUBLIC_SERVER_REMOTE,
}))(App);
