import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Pidus Bhusal | Ui/Ux Designer" content="Pidus Bhusal is an Ui/Ux designer based on Toronto,Canada. Pidus can help you in designing Website, Mobile App and Brand Identity. He has about more then 2 Years of experinece." />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
        <meta property="og:pidus.net" content="Pidus Bhusal | Ui/Ux Designer" />
        <meta property="og:locale" content="en-US" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
