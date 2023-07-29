import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import Head from "next/head";
import HotjarLoader from "@/components/HotjarLoader";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  HotjarLoader();
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="any"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/faviconlight.ico"
          sizes="any"
          media="(prefers-color-scheme: light)"
        />
        <title>Pidus Bhusal </title>
        <meta
          name="keywords"
          content="pidus, ui ux designer, web designer, ui ux designer, canada, toronto, app designer, web developer"
        ></meta>
        <meta name="robots" content="index, follow"></meta>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Pidus Bhusal | Ui Ux Designer" />
        <meta
          name="description"
          content="Pidus Bhusal is an Ui/Ux designer based on Toronto,Canada. Pidus can help you in designing Website, Mobile App and Brand Identity. He has about more then 2 Years of experinece."
        />
        <meta
          property="og:image"
          content="https://pidus.net/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdgjcimkmq%2Fimage%2Fupload%2Fv1688630888%2FPidus_d3exvm_380e67a.webp&w=1920&q=75"
        ></meta>
        <meta
          property="og:image:secure_url"
          content="https://pidus.net/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdgjcimkmq%2Fimage%2Fupload%2Fv1688630888%2FPidus_d3exvm_380e67a.webp&w=1920&q=75"
        ></meta>

        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
        <meta property="og:pidus.net" content="Pidus Bhusal | Ui/Ux Designer" />
        <meta property="og:locale" content="en-US" />
        <meta
          property="og:image"
          content="https://pidus.net/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdgjcimkmq%2Fimage%2Fupload%2Fv1688630888%2FPidus_d3exvm_380e67a.webp&w=1920&q=75"
        />
        <meta
          property="og:image:secure_url"
          content="https://pidus.net/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdgjcimkmq%2Fimage%2Fupload%2Fv1688630888%2FPidus_d3exvm_380e67a.webp&w=1920&q=75"
        />
        <meta property="og:title" content="Pidus Bhusal | Ui Ux Designer" />
        <meta
          property="og:description"
          content="Pidus Bhusal is a Ui/Ux designer based in Toronto, Canada. Pidus can help you in designing Website, Mobile App, and Brand Identity. He has over 2 years of experience."
        />
        <meta property="og:url" content="https://pidus.net" />
        <meta property="og:type" content="website" />
      </Head>

      <Layout>
        <NextNProgress color="#254FD9" />
        <Component {...pageProps} />
        <HotjarLoader />
      </Layout>
    </>
  );
}
