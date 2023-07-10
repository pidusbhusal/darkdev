import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Some Description" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
        <meta property="og:site_name" content="Pidus Bhusal" />
        <meta property="og:locale" content="en-US" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
